const API_DEMAIN = "http://15233xe404.iask.in/api";
let wxUtil = {
    wxSwitchTab: (url) => {
        wx.switchTab({url});
    },
    wxReLaunch: (url) => {
        wx.reLaunch({url});
    },
    wxNavigateTo: (url) => {
        wx.navigateTo({url})
    },

    wxShowModal: async (content, title = '提示', showCancel = true) => {
        let response = await new Promise((resolve, reject) => {
            wx.showModal({
                title,
                content,
                showCancel,
                success: (data) => {
                    resolve(data);
                }, fail: (data) => {
                    reject(data);
                }
            });
        });
        if (response.confirm) {
            return true;
        }
        return false;
    },
    wxShowToast: (title, icon = '', duration = 2000) => {
        wx.showToast({title, icon, duration})
    },
    wxHideToast: () => {
        wx.hideToast()
    },
    wxShowLoading: (title) => {
        wx.showLoading({title})
    },
    wxHideLoading: () => {
        wx.hideLoading()
    },
    wxRequest: async (url, data = {}, method = 'GET', header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        if (isShowLoading) wxUtil.wxShowLoading('加载中...');
        if (header instanceof Object && Object.keys(header).length > 0) {
            if (header['content-type'] === undefined || !header['content-type']) {
                header['content-type'] = 'application/json';
            }
        } else {
            header = {'content-type': 'application/json'};
        }
        let response = await new Promise((resolve, reject) => {
            wx.request({
                url: API_DEMAIN + url, data, method, header, dataType, responseType, success: (data) => {
                    resolve(data);
                }, fail: (data) => {
                    reject(data);
                }
            });
        });
        if (isShowLoading) wxUtil.wxHideLoading();
        let responseData = response.data;
        if (responseData.status_code < 200 || responseData.status_code >= 300) {//错误统一处理
            if (responseData.status_code == 422) {//验证信息统一处理
                let errors = responseData.errors;
                let message = [];
                for (let key in errors) {
                    for (let i = 0; i < errors[key].length; i++) {
                        message.push(errors[key][i]);
                    }
                }
                wxUtil.wxShowToast(message.join('\r\n'), 'none');
                return false;
            } else if (responseData.status_code == 401) {//错误未授权处理
                let comfirm = await wxUtil.wxShowModal('未登录或登录过期，立即重新登录');
                if (!comfirm) {
                    return false;
                }else{
                    let loginStatus = await wxUtil.login();
                    if (!loginStatus) {
                        return false;
                    }
                    return await wxUtil.wxAuthRequest(url, data, method, header, dataType, responseType, isShowLoading);
                }
            }
            wxUtil.wxShowToast(responseData.message, 'none');
            return false;
        }
        //其它状态视为成功
        return responseData.data;
    },
    wxGetRequest: async (url, data = {}, header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxRequest(url, data, 'GET', header, dataType, responseType, isShowLoading);
    },
    wxPostRequest: async (url, data = {}, header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxRequest(url, data, 'POST', header, dataType, responseType, isShowLoading);
    },
    wxPutRequest: async (url, data = {}, header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxRequest(url, data, 'PUT', header, dataType, responseType, isShowLoading);
    },
    wxPatchRequest: async (url, data = {}, header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxRequest(url, data, 'PATCH', header, dataType, responseType, isShowLoading);
    },
    wxDeleteRequest: async (url, data = {}, header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxRequest(url, data, 'DELETE', header, dataType, responseType, isShowLoading);
    },
    wxLogin: async () => {
        let response = await new Promise((resolve, reject) => {
            wx.login({
                success: (data) => {
                    resolve(data);
                }, fail: (data) => {
                    reject(data);
                }
            });
        });
        if (response.code) {
            return response.code;
        } else {
            let comfirm = await wxUtil.wxShowModal('微信登录失败，立即重试');
            if (!comfirm) {
                return false;
            }
            return await wxUtil.wxLogin();
        }
    },
    /**
     * 微信授权加保存，注意：需要引导使用
     * @param guard
     * @returns {Promise<boolean>}
     */
    authorization: async (guard = "users") => {
        let response = await new Promise((resolve, reject) => {
            wx.getUserInfo({
                lang: 'zh_CN',
                success: (data) => {
                    resolve(data);
                }, fail: (data) => {
                    reject(data);
                }
            });
        });
        if (response.userInfo === undefined || response.userInfo.length == 0) {
            let comfirm = await wxUtil.authorization('微信授权失败，立即重试');
            if (!comfirm) {
                return false;
            }
        }
        let data = {
            nickName: response.userInfo.nickName,
            avatarUrl: response.userInfo.avatarUrl,
            gender: response.userInfo.gender, //性别 0：未知、1：男、2：女
            province: response.userInfo.province,
        };
        response = await wxUtil.wxPutAuthRequest('/user/save', data, guard);
        if (response === false) {
            return false;
        }
        return true;
    },
    login: async (guard = "users") => {
        let code = await wxUtil.wxLogin();
        let response = await wxUtil.wxGetRequest('/login', {code});
        if (response !== false) {
            let storage = {
                token: response.access_token,
                token_type: response.token_type,
                expire_time: response.expires_in > 0 ? new Date().getTime() + response.expires_in * 1000 : 0
            };
            await wx.setStorageSync(guard + '_token', storage);
            return true;
        } else {
            return false;
        }
    },
    getToken: (guard = 'users') => {
        let storage = wx.getStorageSync(guard + '_token');
        if (storage && (storage.expire_time === 0 || storage.expire_time > new Date().getTime())) {
            return {
                token: storage.token,
                token_type: storage.token_type
            }
        } else {
            return false;
        }
    },
    wxAuthRequest: async (url, data = {}, guard = 'users', method = 'GET', header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        let token = wxUtil.getToken(guard);
        if (token === false) {
            let comfirm = await wxUtil.wxShowModal('未登录或登录过期，立即重新登录');
            if (!comfirm) {
                return false;
            }else{
                let loginStatus = await wxUtil.login();
                if (!loginStatus) {
                    return false;
                }
            }
        }
        token = wxUtil.getToken();
        if (header instanceof Object && Object.keys(header).length > 0) {
            if (header['authorization'] === undefined || !header['authorization']) {
                header.authorization = token.token_type + ' ' + token.token;
            }
        } else {
            header = {'authorization': token.token_type + ' ' + token.token};
        }
        return await wxUtil.wxRequest(url, data, method, header, dataType, responseType, isShowLoading);
    },
    wxGetAuthRequest: async (url, data = {}, guard = 'users', header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxAuthRequest(url, data, guard, 'GET', header, dataType, responseType, isShowLoading);
    },
    wxPostAuthRequest: async (url, data = {}, guard = 'users', header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxAuthRequest(url, data, guard, 'POST', header, dataType, responseType, isShowLoading);
    },
    wxPutAuthRequest: async (url, data = {}, guard = 'users', header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxAuthRequest(url, data, guard, 'PUT', header, dataType, responseType, isShowLoading);
    },
    wxPatchAuthRequest: async (url, data = {}, guard = 'users', header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxAuthRequest(url, data, guard, 'PATCH', header, dataType, responseType, isShowLoading);
    },
    wxDeleteAuthRequest: async (url, data = {}, guard = 'users', header = {}, dataType = 'json', responseType = 'text', isShowLoading = true) => {
        return await wxUtil.wxAuthRequest(url, data, guard, 'DELETE', header, dataType, responseType, isShowLoading);
    }
}
export default wxUtil;

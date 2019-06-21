let wxUtil = {
    wxSwitchTab: (url) => {
        wx.switchTab({url})
    },
    wxNavigateTo: (url) => {
        wx.navigateTo({url})
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
    wxRequest: async (url, data = {}, method = 'GET', header = {}, dataType = 'json', responseType = 'text') => {
        wxUtil.wxShowLoading('加载中...');
        if (header instanceof Object && Object.keys(header).length > 0) {
            if (header['content-type'] === undefined || !header['content-type']) {
                header['content-type'] = 'application/json';
            }
        } else {
            header = {'content-type': 'application/json'};
        }
        console.log({url, data, method, header, dataType, responseType});
        let response = await new Promise((resolve, reject) => {
            // resolve表示将状态变成成功完成
            // reject表示将状态变成失败完成
            wx.request({
                url, data, method, header, dataType, responseType, success: (data) => {
                    resolve(data);
                }, fail: (data) => {
                    reject(data);
                }
            });
        });
        wxUtil.wxHideLoading();
        console.log(response);
    },
    wxPostRequest: async (url, data) => {
        return await this.wxRequest(url, data, 'POST');
    },
    wxPutRequest: (url, data) => {
        this.wxRequest(url, data, 'PUT');
    },
    wxPatchRequest: (url, data) => {
        this.wxRequest(url, data, 'PATCH');
    },
    wxDeleteRequest: (url, data) => {
        this.wxRequest(url, data, 'DELETE');
    }
}
export default wxUtil;

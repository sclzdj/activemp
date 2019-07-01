import wxUtil from '@/util/wx'

const UPLOAD_API_DEMAIN = 'http://15233xe404.iask.in/api/upload'

let uploadUtil = {
    upload: async (tempFilePath, formData = {}, handle,name = 'file', isShowLoading = false) => {
        if (isShowLoading) wxUtil.wxShowLoading('上传中...');
        let response = await new Promise((resolve, reject) => {
            const uploadTask=wx.uploadFile({
                url: UPLOAD_API_DEMAIN,
                filePath: tempFilePath,
                name: name,
                formData: formData,
                success: (data) => {
                    resolve(data);
                },
                fail: (data) => {
                    reject(data);
                }
            })
            uploadTask.onProgressUpdate((res) => {
                handle(res.progress);
            })
        });
        if (isShowLoading) wxUtil.wxHideLoading();
        response.data = JSON.parse(response.data);
        return response;
    },

    image: async (sizeType = ['original', 'compressed'], sourceType = ['album', 'camera']) => {
        let res = await new Promise((resolve, reject) => {
            wx.chooseImage({
                count: 1,
                sizeType: sizeType,
                sourceType: sourceType,
                success: (data) => {
                    resolve(data);
                },
                fail: (data) => {
                    reject(data);
                }
            })
        });
        return res.tempFilePaths[0];
    }
}

export default uploadUtil;
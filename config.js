var host = '19322494.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,
        // 登录地址，用于建立会话
        loginUrl: `https://${host}/login`,
        // 测试的请求地址，用于测试会话
        requestUrl: `https://${host}/user`,
        // 测试的信道服务地址
        tunnelUrl: `https://${host}/tunnel`,
    },
    s3_storage_url : "https://s3-ap-southeast-1.amazonaws.com/",
    tencent_storage_url : "http://videolist-10081573.video.myqcloud.com/"

    
};

module.exports = config;
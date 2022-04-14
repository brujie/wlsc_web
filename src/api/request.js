const axios = require('axios');
if(process.env.NODE_ENV === "production"){
    // 线上环境
    // axios.defaults.baseURL = 'https://collection.chinaso.com/collection-app/homepage'
    axios.defaults.baseURL = '/api'
} else {
    axios.defaults.baseURL = '/api'
}
// 默认携带Cookie
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    // 设置请求头
    if (sessionStorage.getItem('token')) {
        config.headers.token = sessionStorage.getItem('token');
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    if (error.response.status == 500) {
        console.log('服务器错误!')
    }
    return Promise.reject(error);
});

function server(method, url, data, config) {
    return axios({
        url,
        method,
        params: method === 'GET' ? data : null,
        data: method === 'POST' ? data : null,
        timeout: 5000,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
    });
}


function requestAll(fnArr) {
    axios.all(...fnArr)
        .then(axios.spread(function (acct, perms) {
            // 两个请求现在都执行完成
        }));
}

function fileDownload(url, params) {
    if (!url) return;
    return axios.get(
            url, {
                params,
                responseType: 'blob',
            }
        )
        .then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            let fileName = res.headers['content-disposition'].split('filename=');
            link.setAttribute('download', decodeURI(fileName[1]));
            document.body.appendChild(link);
            link.click();
        })
        .catch(er => {
            console.error(er);
        });
}


export default {
    httpGet: (url, data) => server('GET', url, data),
    httpPost: (url, data) => server('POST', url, data),
    fileDownload
}
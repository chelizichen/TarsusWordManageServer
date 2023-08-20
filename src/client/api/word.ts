import HTTPRequest from '@/utils/axios';

export function getWordList(data) {
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data: data
    })
}


export function getTranslateList(data) {
    return HTTPRequest({
        url: "WordServerInf/getTranslateList",
        method: "post",
        data
    })
}


export function delWordById(data) {
    return HTTPRequest({
        url: "WordServerInf/delWordById",
        method: "post",
        data
    })
}


export function saveWord(data) {
    const req = {
        'data': data,
        "interFace": "word",
        "method": "saveWord",
        "proxy": "WordNodeServer",
        "request": "Word",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data:req
    })
}


export function saveTranslate(data) {
    return HTTPRequest({
        url: "WordServerInf/saveTranslate",
        method: "post",
        data
    })
}
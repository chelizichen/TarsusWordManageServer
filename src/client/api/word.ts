import HTTPRequest from '@/utils/axios';

export function getWordList(data) {
    const req = {
        'data': data,
        "interFace": "word",
        "method": "getWordList",
        "proxy": "WordNodeServer",
        "request": "getWordListReq",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data: req
    })
}


export function getTranslateList(data) {
    const req = {
        'data': data,
        "interFace": "word",
        "method": "getWordList",
        "proxy": "WordNodeServer",
        "request": "getWordListReq",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "WordServerInf/getTranslateList",
        method: "post",
        data:req
    })
}


export function delWordById(data) {
    const req = {
        'data': data,
        "interFace": "word",
        "method": "delWordById",
        "proxy": "WordNodeServer",
        "request": "queryIdReq",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data:req
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
    const req = {
        'data': data,
        "interFace": "word",
        "method": "saveTranslate",
        "proxy": "WordNodeServer",
        "request": "WordTranslate",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data:req
    })
}

export function getTranslateListById(data){
    const req = {
        'data': data,
        "interFace": "word",
        "method": "getTranslateListById",
        "proxy": "WordNodeServer",
        "request": "queryIdReq",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data:req
    })
}

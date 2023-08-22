import HTTPRequest from '@/utils/axios';

export function savePlan(data) {
    const req = {
        'data': data,
        "interFace": "plan",
        "method": "savePlan",
        "proxy": "WordNodeServer",
        "request": "PlanDetail",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data: req
    })
}

export function savePlanWords(data) {
    const req = {
        'data': data,
        "interFace": "plan",
        "method": "savePlanWords",
        "proxy": "WordNodeServer",
        "request": "PlanWords",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data: req
    })
}


export function getPlansByUser(data){
    const req = {
        'data': data,
        "interFace": "plan",
        "method": "getPlansByUser",
        "proxy": "WordNodeServer",
        "request": "queryIdReq",
        "timeout":"60000"
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data: req
    })
}

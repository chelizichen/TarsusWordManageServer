import HTTPRequest from '@/utils/axios';
import {getUserListReq} from "@/dto/User";

function beforeInvoke(method,request,data){
    const req = {
        interFace: "user",
        proxy: "UserServer",
        data,
        method,
        timeout:"60000",
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data: req
    })
}

export function getUserList(data) {
    return beforeInvoke(getUserList.name,getUserListReq.name,data)
}

export function getUserById(data) {
    const req = {
        'data': data,
        "interFace": "user",
        "method": "getUserById",
        "proxy": "UserServer",
        "request": "queryIdReq",
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

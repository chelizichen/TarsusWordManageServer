import HTTPRequest from '@/utils/axios';
import {getUserListReq, queryIdReq} from "@/dto/User";

function beforeInvoke(method,request,data){
    const req = {
        interFace: "record",
        proxy: "RecordServer",
        data,
        method,
        request,
        timeout:"60000",
    }
    return HTTPRequest({
        url: "/proxy/invoke",
        method: "post",
        data: req
    })
}

export function getUserRecord(data) {
    return beforeInvoke(getUserRecord.name,queryIdReq.name,data)
}

export class Record {
    public id: number;
    public create_time: string;
    public is_register: string;
    public user_id: string;

};

export class queryIdReq {
    public id: number;

};

export class getUserRecordRes {
    public user_id: number;
    public data: Array<Record>;
    public code: number;
    public total: number;
    public message: string;

};

export class baseRes {
    public code: number;
    public message: string;

};

export class setRecordReq {
    public user_id: number;
    public record_time: string;


};

export class getCurrRecordLenRes {
    public record_length: number;
    public user_name: number;
    public code: number;
    public message: number;

};

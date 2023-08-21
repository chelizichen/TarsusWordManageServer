
export class User {
    public id: number;
    public username: string;
    public password: string;
    public email: string;
    public phone: string;
    public create_time: string;
    public update_time: string;


};

export class queryIdReq {
    public id: number;

};

export class queryIdsReq {
    public ids: Array<number>;


};

export class batchSetUserReq {
    public ids: Array<number>;
    public info: User;


};

export class getUserListReq {
    public keyword: string;
    public page: number;
    public size: number;
    public start_time: string;
    public end_time: string;


};

export class getUserListRes {
    public code: number;
    public message: string;
    public list: Array<User>;
    public total: number;


};

export class baseRes {
    public code: number;
    public message: string;


};

export class getUserByIdRes {
    public code: number;
    public message: string;
    public data: User;


};

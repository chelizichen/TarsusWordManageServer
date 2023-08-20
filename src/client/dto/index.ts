export class Word {
    public id: number;
    public en_name: string;
    public create_time: string;
    public own_mark: string;
    public type: string;
    public total_trans:number
};

export class WordTranslate {
    public id: number;
    public cn_name: string;
    public en_type: string;
    public own_mark: string;
    public create_time: string;
    public word_id: number
};


export class getTranslateListReq {
    public desc: string;
    public keyword: string;
    public page: number;
    public size: number;
    public start_time: string;
    public end_time: string;
};
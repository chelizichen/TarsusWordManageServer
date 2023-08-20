export class Word {
    public id: number;
    public en_name: string;
    public create_time: string;
    public own_mark: string;
    public type: string;
};

export class WordTranslate {
    public id: number;
    public cn_name: string;
    public en_type: string;
    public own_mark: string;
    public create_time: string;
    public word_id: number;
};


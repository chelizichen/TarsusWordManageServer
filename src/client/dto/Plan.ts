import {User} from "@/dto/User";

export class PlanDetail{
    public id : number;
    public user_id : string;
    public is_mark : string;
    public plan_start_time : string;
    public plan_end_time : string;
    public create_time : string;
};
export class PlanWords{
    public word_ids : string;
    public mark_date : string;
    public is_mark : number;
    public user_id : string;
    public plan_id : string;
    public id : number;
};
export class getUserPlanByIdRes{
    public user : User;
    public data : Array<PlanWords>;
    public code : number;
    public total : number;
    public message : string;
};
export class getPlanDetailByIdRes{
    public data : PlanDetail;
    public code : number;
    public message : string;
};
export class getUserPlansRes{
    public data : Array<PlanDetail>;
    public code : number;
    public message : string;
    public total : number;
};
export class getPlanWordsByIdRes{
    public data : PlanWords;
    public code : number;
    public message : string;
};

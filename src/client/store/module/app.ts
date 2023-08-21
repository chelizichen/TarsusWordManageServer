import { defineStore } from "pinia"

let app = defineStore('app',{
    state:()=>({
        RemindWordVisable:false,
        RemindTranslateVisable:false,
        TranslatesList:[],
        TranslatesTotal:0,
        TranslatesWordId:0,
        TranslatesWord:'',


    }),
    actions:{
        setRemindWordVisable(bool:boolean){
            this.RemindWordVisable = bool
        },
        setRemindTranslateVisable(bool:boolean,data,word){
            this.RemindTranslateVisable = bool
            if(!bool){
                return;
            }
            if(data.code){
                return
            }
            this.TranslatesList = data.list;
            this.TranslatesTotal = data.total;
            this.TranslatesWordId = word.id;
            this.TranslatesWord = word.word
            console.log(this.TranslatesWord)
            console.log(this.TranslatesWordId)
        }
    }
})

export default app
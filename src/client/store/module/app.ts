import { defineStore } from "pinia"

let app = defineStore('app',{
    state:()=>({
        RemindWordVisable:false,
    }),
    actions:{
        setRemindWordVisable(bool:boolean){
            this.RemindWordVisable = bool
        }
    }
})

export default app
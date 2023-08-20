export class ret {
  public code:number;
  public message:string;
  static success<T>(data: T) {
    return {
      code:200,
      msg:"ok",
      data,
    };
  }
  static error<T>(code:number,message:string){
    let $ret = new ret()
    $ret.code = code;
    $ret.message = message;
    return $ret;
  }
}

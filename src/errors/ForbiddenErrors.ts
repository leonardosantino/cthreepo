export default class ForbiddenErros extends Error{

  private menssage: string;
  private errors: any;
  
  constructor(menssage: string){
    super(menssage);
    this.menssage = menssage;
  }
}
import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";
  name = "Vagner avalo";
  telefone = "(11) 99858-7632";
  cpf = "1234567893";
  idade = 38;
  email = "nome@google.com";
  instagram = "https://www.google.com";
  linkedin = "https://www.xbox.com";

  visible = true;

  trocarDiv(){
    this.visible = !this.visible;
    
    /*this.visible = !this.visible;
      if(this.visible == true){
          this.visible = false;
        }
        else   {
          this.visible = true;
        }*/ 
  }

  alterarValores(){
    this.nome = "celena";
    this.telefone = "iphone";
    this.cpf = "0136547895";
    this.idade  = 26;
    this.email = "yona@lomas.com";
  }
}

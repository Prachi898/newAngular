import { Component } from '@angular/core';

@Component({

    selector:'Child',
    templateUrl: 'childdemo.html'
})

export class ChildComponent{
    textval=false;
  ename;
 eid;
 psw;
 city;
 ctn;
 
 password=String;
 
 country=String;



onClickEvent(event){
    this.textval=!this.textval;
}
}
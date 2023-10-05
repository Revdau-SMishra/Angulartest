import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
componentName = 'Card';
btnDisabled = true;
item='';
card:any=[];
constructor() {
setTimeout(() => {
  this.btnDisabled = false;
}, 2000);
}
getItem(e:any){
  this.item = e.target.value;
  console.log(e.target.value)
}
addToCard(){
  this.card.push(this.item);
  this.item= '';
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  <h3>Cunter : {{counter}}</h3>
<button (click)="increasteBy(1)">+1</button>
<button (click)="resetear()">Reset</button>
<button (click)="increasteBy(-1)">-1</button>
`

})
export class CounterComponent{
  public counter=10;

  increasteBy(value: number):void{
    this.counter+=value;
  }

  resetear():void{
    this.counter=10;
  }

}

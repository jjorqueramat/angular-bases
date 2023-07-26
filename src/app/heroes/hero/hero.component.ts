import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string='ironman';
  public age: number=45;

  get capitalizeName():String{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return `${this.name}-${this.age}`;
  }

  changeHero():void{
       this.name="Thor";
  }
  changeAge():void{
    this.age=60;
  }
  resetForm():void{
    this.name='ironman';
    this.age=45;

  }

}

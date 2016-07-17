import { Component } from '@angular/core';
import '../../public/css/styles.css';

import { Hero } from './Hero';
import { Biller } from './Biller';

//default
const HEROES = ["煎饼侠", "煎饼果子侠", "烧饼侠", "烙饼侠"];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: any[] = [];
  heroName: string;
  billForm: any;
  result: string;

  constructor() {
    for (let i = 0; i < HEROES.length; i++) {
        this.heroes.push(new Hero(HEROES[i]));
    }
  }


  addHero() {
    if (this.heroName === "") {
        alert("enter name for our hero!");
        return;
    }
    this.heroes.push(new Hero(this.heroName));
  }

  deleteHero(i: number) {
    this.heroes.splice(i, 1);
  }

  calc(formElmt:any) {
    if (!formElmt.form.valid) {
        this.result = "你输入的这是啥呀？What are u doing。。"
        window.location.href = window.location.href + "#result";
        return;
    }

    let neg = new Biller().bill(this.heroes);
    let r = "";
    if (neg.length === 0) {
        console.log("yay!!");
        r += "Yay, 没毛事！"
    } else {
        console.log("要算账了！！！shit!");
        for (let l = 0; l < neg.length; l++) {
            r += neg[l].name + " should pay\n" + neg[l].to + "\n\n";
            console.log(neg[l].name + " shoud pay: " + neg[l].to);
        }
    }
    this.result = r;
    window.location.href = window.location.href + "#result";
  }


}

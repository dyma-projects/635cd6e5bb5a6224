import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public result = 0;

  public decreaseResult() {
    this.result--;
  }

  public increaseResult() {
    this.result++;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent {
  @Input()
  public count: number;

  @Output()
  private decreaseCount = new EventEmitter();

  @Output()
  private increaseCount = new EventEmitter();

  public onDecreaseCount(): void {
    this.count--;
    this.decreaseCount.emit();
  }

  public onIncreaseCount(): void {
    this.count++;
    this.increaseCount.emit();
  }
}

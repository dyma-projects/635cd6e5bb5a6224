import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css'],
})
export class Exercice2Component {
  @ViewChild('myInput')
  public input: ElementRef<HTMLInputElement>;

  public valeur: string;

  public updateValue() {
    this.valeur = this.input.nativeElement.value;
  }
}

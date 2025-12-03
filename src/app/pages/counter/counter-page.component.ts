import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})

export class CounterPageComponent {
  counter = 10;
  counterSigal = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    this.counterSigal.update((curret) => curret + value);
  }

  resetCounter(): void {
    this.counter = 0;
    this.counterSigal.set(0);
  }
}

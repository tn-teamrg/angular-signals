import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-writable-signals',
  standalone: true,
  imports: [],
  templateUrl: './writable-signals.component.html',
  styleUrl: './writable-signals.component.css'
})
export class WritableSignalsComponent {
  // * NOTE: 1. signal creatoin
  value = signal(789);

  constructor() {
    // * NOTE: 2. replace value
    setTimeout(() => {
      this.value.set(123123);
    }, 3000);

    // * NOTE: 3. update value
    setInterval(() => {
      this.value.update(v => v + 1);
    }, 3000);
  }
}

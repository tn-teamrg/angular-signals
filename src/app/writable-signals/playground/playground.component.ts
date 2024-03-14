import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css'
})
export class PlaygroundComponent {
  value = signal<number>(0);

  reset() {
    this.value.set(0);
  }

  add() {
    this.value.update((currentVal) => currentVal + 1);
  }

  multiply() {
    this.value.update((currentVal) => currentVal * 2);
  }
}

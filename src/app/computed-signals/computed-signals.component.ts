import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  standalone: true,
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css'
})
export class ComputedSignalsComponent {
  value = signal<number>(0);
  isPrime = computed<boolean>(() => isPrime(this.value()));

  reset() {
    this.value.set(0);
  }

  add() {
    this.value.update((currentValue) => currentValue + 1);
  }

  multiply() {
    this.value.update((currentValue) => currentValue * 2);
  }
}

function isPrime(num: number): boolean {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

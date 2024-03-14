import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  // * NOTE: 1. creating signal
  value = signal(123);

  ngOnInit(): void {
  // * NOTE: 2. reading signal
    console.info(`[INFO] -- signal value===${this.value()}`);
  }

}

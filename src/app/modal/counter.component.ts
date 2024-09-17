import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  template: `
    @if (count() === 0) {
      <button mat-button (click)="increment()">Click Here!</button>
    } @else {
      <button mat-button (click)="increment()">{{ count() }} Clicks!</button>
    }
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton],
  styles: [``],
})
export class CounterComponent {
  readonly count = signal(0);

  increment() {
    this.count.update((c) => c + 1);
  }
}

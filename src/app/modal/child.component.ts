import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

@Component({
  template: `<div matRipple
    >Hi, {{ data.name }}. I'm lazy loaded child component.</div
  >`,
  standalone: true,
  imports: [MatRippleModule],
  styles: [
    `
      div {
        padding: 24px;
        cursor: pointer;
      }
    `,
  ],
})
export class ChildComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: { name: string }) {}
}

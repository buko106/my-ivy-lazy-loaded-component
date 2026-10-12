import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

@Component({
  template: `<div matRipple
    >Hi, {{ data.name }}. I'm lazy loaded child component.</div
  >`,
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
  readonly data = inject<{ name: string }>(MAT_DIALOG_DATA);
}

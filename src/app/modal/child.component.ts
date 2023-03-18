import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `<div>Hi, {{ data.name }}. I'm lazy loaded child component.</div>`,
  styles: [
    `
      div {
        padding: 24px;
      }
    `,
  ],
})
export class ChildComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: { name: string }) {}
}

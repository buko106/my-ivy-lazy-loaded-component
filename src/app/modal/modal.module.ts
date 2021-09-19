import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ChildComponent],
  imports: [CommonModule],
})
export class ModalModule {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly ChildComponent = ChildComponent;
}

import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly injector: Injector,
    private readonly matDialog: MatDialog
  ) {}

  async openModal() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { ChildComponent } = await import('./modal/child.component');

    const ref = this.matDialog.open(ChildComponent, {
      data: { name: 'buko106' },
      panelClass: 'my-mat-dialog-pane',
    });
  }
}

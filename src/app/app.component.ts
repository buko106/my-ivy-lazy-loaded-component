import { Component, Injector, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly injector = inject(Injector);
  private readonly matDialog = inject(MatDialog);

  async openModal() {
    const { ChildComponent } = await import('./modal/child.component');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ref = this.matDialog.open(ChildComponent, {
      data: { name: 'buko106' },
      panelClass: 'my-mat-dialog-pane',
    });
  }

  async openCounterModal() {
    const { CounterComponent } = await import('./modal/counter.component');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ref = this.matDialog.open(CounterComponent, {});
  }
}

import { Component, Injector, ɵcreateInjector as createInjector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly injector: Injector, private readonly matDialog: MatDialog) {}

  async openModal() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { ModalModule } = (await import('./modal/modal.module'));

    const injector = createInjector(ModalModule, this.injector);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { ChildComponent } = injector.get(ModalModule);

    this.matDialog.open(ChildComponent, {data: {name: 'buko106'}});
  }
}

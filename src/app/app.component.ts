import { Component, Compiler, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly compiler: Compiler, private readonly injector: Injector, private readonly matDialog: MatDialog) {}

  async openModal() {
    const { ModalModule } = (await import('./modal/modal.module'));
    const moduleFactory = await this.compiler.compileModuleAsync(ModalModule);
    const elementModuleRef = moduleFactory.create(this.injector);
    const { ChildComponent } = elementModuleRef.instance;
    this.matDialog.open(ChildComponent, {data: {name: 'buko106'}});
  }
}

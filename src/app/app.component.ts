import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChildComponent } from './component/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly matDialog: MatDialog) {}

  openModal() {
    this.matDialog.open(ChildComponent);
  }
}

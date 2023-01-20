import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeporteComponent } from 'src/app/components/dialog-deporte/dialog-deporte.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  nombre = '';
  deporte = '';

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDeporteComponent, {
      data: { nombre: this.nombre, deporte: this.deporte },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.deporte = result;
    });
  }
}

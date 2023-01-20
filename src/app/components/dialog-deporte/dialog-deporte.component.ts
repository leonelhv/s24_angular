import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-deporte',
  templateUrl: './dialog-deporte.component.html',
  styleUrls: ['./dialog-deporte.component.css'],
})
export class DialogDeporteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

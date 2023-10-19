import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<any>) { }
  onNoClick() {
    this.dialogRef.close();
  }
}

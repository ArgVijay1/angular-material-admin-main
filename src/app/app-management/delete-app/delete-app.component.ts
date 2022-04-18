import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteUserComponent } from 'src/app/user/delete-user/delete-user.component';

@Component({
  selector: 'app-delete-app',
  templateUrl: './delete-app.component.html',
  styleUrls: ['./delete-app.component.css']
})
export class DeleteAppComponent implements OnInit {
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  
  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<DeleteUserComponent>) {
    if(data){
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }  
   }

   onConfirmClick():void{
     this.dialogRef.close(true);
   }

  ngOnInit(): void {
  }

}

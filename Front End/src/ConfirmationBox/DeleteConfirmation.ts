import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './Delete-confirmation.component.html',
})
export class DeleteConfirmationDialogComponent implements AfterViewInit {
  
  message: string = "";
  @ViewChild('dialogContainer') dialogContainer!: ElementRef;
  
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.message = data.message;
    }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  ngAfterViewInit(): void {
    // this.centerDialog();
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  private centerDialog(): void {
    const dialogContainerElement = this.dialogContainer.nativeElement as HTMLElement;
    const windowHeight = window.innerHeight;
    const dialogHeight = dialogContainerElement.clientHeight;
    const topMargin = Math.max(0, (windowHeight - dialogHeight) / 2);
    dialogContainerElement.style.marginTop = topMargin + 'px';
  }
}

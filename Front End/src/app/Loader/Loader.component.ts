import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MontyHallService } from '../Services/Monty-Hall.service';
import { Subscription } from 'rxjs';
import { MontyHallSimulations } from '../Modals/MontyHallSimulations';

@Component({
  selector: 'app-Loader',
  templateUrl: './Loader.component.html',
})

export class LoaderComponent implements OnInit,OnChanges {

    @Input() isLoading= false;

  constructor(private mService :MontyHallService){ 
  }

  ngOnInit() {
    
    
  }

  ngOnChanges(changes: any){
    if(changes && changes.isLoading  ){
      this.isLoading = changes.isLoading.currentValue
    }
  }

  
}
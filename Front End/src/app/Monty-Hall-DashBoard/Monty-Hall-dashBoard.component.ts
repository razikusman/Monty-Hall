import { Component, OnInit } from '@angular/core';
import { MontyHallService } from '../Services/Monty-Hall.service';
import { Subscription } from 'rxjs';
import { MontyHallSimulations } from '../Modals/MontyHallSimulations';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './Monty-Hall-dashBoard.component.html',
})

export class MontyHalldashBoardComponent implements OnInit {

    status :string | undefined
    postSubscriber = new Subscription();
    simulationResult = new MontyHallSimulations();
    isLoading =  false;

  constructor(private mService :MontyHallService){ 
  }

  ngOnInit() {
    this.status = "loading....."
    
  }

  handleEvent(e : any){
    this.showLoader()
    console.log("data" + e);
    this.postSubscriber = this.mService.Postata(Number(e.Simulations),Boolean(e.SwitchorNot)).subscribe( data => {
        this.status = "Loaded"
        console.log(data)
        this.simulationResult = data;
        this.hideLoader();
    });
  }

  showLoader() {
    this.isLoading = true
  }

  hideLoader() {
    this.isLoading = false
  }
  
}
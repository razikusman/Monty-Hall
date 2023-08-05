import { Component, OnInit } from '@angular/core';
import { MontyHallService } from '../Services/Monty-Hall.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './Monty-Hall-dashBoard.component.html',
})

export class MontyHalldashBoardComponent implements OnInit {

    postSubscriber = new Subscription();

  constructor(private mService :MontyHallService){ 
  }

  ngOnInit() {
    this.postSubscriber = this.mService.Postata().subscribe( data => {
        console.log(data)
    });
  }

  
}
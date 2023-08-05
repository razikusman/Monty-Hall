import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashBoard',
  templateUrl: './Monty-Hall-dashBoard.component.html',
})

export class MontyHalldashBoardComponent implements OnInit {

  constructor(){ 
  }

  ngOnInit() {
    
  }

  getEmployee(e: string) {

    if(e != "")
    console.log(e);
  }
}
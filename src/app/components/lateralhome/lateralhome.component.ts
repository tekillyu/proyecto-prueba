import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateralhome',
  templateUrl: './lateralhome.component.html'
})
export class LateralhomeComponent implements OnInit {
  status: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  
  clickEvent(){
      this.status = !this.status;       
  }

}

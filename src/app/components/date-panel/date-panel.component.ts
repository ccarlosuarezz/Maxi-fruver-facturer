import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-panel',
  templateUrl: './date-panel.component.html',
  styleUrls: ['./date-panel.component.css']
})
export class DatePanelComponent implements OnInit {

  public current_date: Date = new Date();

  constructor() { }
  
  ngOnInit(): void {
    setInterval(() => {this.getDate()}, 1000);
  }

  public getDate() {
    this.current_date = new Date();
  }

}

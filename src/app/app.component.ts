import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  isLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 6000);
  }

}
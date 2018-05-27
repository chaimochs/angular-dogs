import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '"Welcome to my first angular 2.0 adventure!"';
  dogName = 'Rex';
  dogWeight = 10;
  ownerName = 'Joe';
  imageUrl: string ;
  constructor() {
  this.imageUrl = this.setDogUrl();
  }
    setDogUrl() {
      const dayImg = 'https://i.ytimg.com/vi/oH_GHvcF9VM/hqdefault.jpg';
      const nightImg = 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';
        if (new Date().getHours() > 18 || new Date().getHours() < 6) {
          return nightImg;
        } else {
          return dayImg;
       }
     }
    }

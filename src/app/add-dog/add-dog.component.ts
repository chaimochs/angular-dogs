import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';


@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.scss']
})
export class AddDogComponent implements OnInit {

  title: String = 'AngularDogs';
  dog: Dog = new Dog();
  imageUrl: string;

  constructor(private dogsService: DogsService) {
    const currentDate = new Date();
    if (currentDate.getHours() > 21 && currentDate.getHours() <= 6) {
      this.imageUrl = 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';
    } else {
      this.imageUrl = 'https://i.ytimg.com/vi/oH_GHvcF9VM/hqdefault.jpg';
    }
  }

  ngOnInit() {
  }

  submitDog() {
    this.dogsService.addDog(this.dog);
  }

}

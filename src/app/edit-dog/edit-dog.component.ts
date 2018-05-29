import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.scss']
})

export class EditDogComponent implements OnInit {
  dog: Dog = new Dog();

  constructor(private dogsService: DogsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     this.dog = this.dogsService.getDog(params.id);
    });
  }

updateDog() {
  this.dogsService.showDogs()
  this.router.navigate(['/']);
}

}

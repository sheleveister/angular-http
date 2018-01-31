import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/bootstrap.css']
})
export class AppComponent {

  public cars: Cars[] = [];

  constructor(
    private carsService: CarsService,
  ) {}

  public loadCars() {
    this.carsService.getCars().subscribe((items: Cars[]) => this.cars = items);
  }

}

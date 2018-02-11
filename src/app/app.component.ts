import { Component, OnInit } from '@angular/core';
import { CarsService } from './services/cars.service';

interface Car {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/bootstrap.css']
})
export class AppComponent implements OnInit {

  public cars: Car[] = [];
  public carName: string = '';
  public colors = ['red', 'blue', 'green', 'pink', 'yellow', 'grey'];
  public appTitle;

  constructor(
    private carsService: CarsService,
  ) {}

  public ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
    console.log(this.appTitle);
    this.loadCars();
  }

  public loadCars() {
    this.carsService.getCars()
      .subscribe(
        (items: Car[]) => this.cars = items,
        (error) => alert(error)
      );
  }

  public addCar() {
    this.carsService.addCar(this.carName)
      .subscribe((car: Car) => this.loadCars());
    this.carName = '';
  }

  public getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  public setNewColor(car: Car) {
    this.carsService.changeColor(car, this.getRandomColor())
      .subscribe();
  }

  public deleteCar(car: Car) {
    this.carsService.deleteCar(car)
      .subscribe(() => {
        this.cars = this.cars.filter((c) => c.id !== car.id);
      });
  }

}

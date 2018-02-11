import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CarsService {

  constructor(
    private http: Http,
  ) {}

  public getCars() {
    const headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.http.get('http://localhost:3000/cars', { headers }).map((res: Response) => res.json());
  }

  public addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post('http://localhost:3000/cars', data).map((res: Response) => res.json());
  }

  public changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car).map((res: Response) => res.json());
  }

  public deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`).map((res: Response) => res.json());
  }

}

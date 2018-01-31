import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class CarsService {

  constructor(
    private http: Http,
  ) {}

  public getCars() {
    return this.http.get('http://localhost:3000/cars').map((res: Response) => res.json() );
  }

}

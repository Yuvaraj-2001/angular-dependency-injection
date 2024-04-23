import { Injectable } from '@angular/core';

@Injectable()
export class OptionalService {

  constructor() { }
  log(m:any){
    console.log(m);
  }
}

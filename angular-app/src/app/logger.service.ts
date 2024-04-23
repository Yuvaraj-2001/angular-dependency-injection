import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages:any[] = [];
  constructor() { }

  log(message:any){
    this.messages.push(message);
    console.log(message, this.messages);
  }
}

import { Injectable } from '@angular/core';
import { Logs } from './logs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
  useClass: LoggerService
})
export class ExperimentService implements Logs {
  messages: any[] =[];
  constructor() { }
  log(mes:any): void{
    this.messages.push(mes);
    console.log(mes + '(experiemnt)', this.messages);
  };
}

import { Injectable, Inject,  } from '@angular/core';
import { Logs } from './logs';
import { LoggerService } from './logger.service';
import { config, APP_CONFIG } from './global.token';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService implements Logs {
  messages: any[] =[];
  constructor(@Inject(APP_CONFIG) private config: config) {
      console.log("experimental logger --> APP_CONFIG", config)
   }
  log(mes:any): void{
    this.messages.push(mes);
    console.log(mes + '(experiemnt)', this.messages);
  };
}

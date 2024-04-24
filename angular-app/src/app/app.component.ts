import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service'; 
import { ExperimentService } from './experiment.service';
import { OptionalService } from './optional.service';
import { legacyLog } from './logger.legacy';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: LoggerService,
    // useClass: ExperimentService // useExisting
    useValue: legacyLog // useExisting

  }]
})
export class AppComponent {
  title = 'angular-app';
  constructor(private logger: LoggerService, private exLog: ExperimentService){
    // this.skipLog.log("Skiping App component");
    this.logger.log("App component");

    console.log(this.logger === this.exLog);
    
  }
  ngOnInit(){
    
    // console.log(this.options.log('hello'));
    // console.log("helo")
  }
}

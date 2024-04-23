import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service'; 
import { OptionalService } from './optional.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerService]
})
export class AppComponent {
  title = 'angular-app';
  constructor(@Optional() private options: OptionalService, @Self() private logger: LoggerService, @SkipSelf() private skipLog: LoggerService){
    this.skipLog.log("Skiping App component");
    this.logger.log("App component");
    
  }
  ngOnInit(){
    
    // console.log(this.options.log('hello'));
    // console.log("helo")
  }
}

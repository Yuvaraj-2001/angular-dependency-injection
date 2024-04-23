import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  constructor(private log: LoggerService){
    this.log.log('Child Component')
  }
  
}

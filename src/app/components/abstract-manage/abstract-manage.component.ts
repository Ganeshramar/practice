import { Component } from '@angular/core';

@Component({
  selector: 'app-abstract-manage',
  templateUrl: './abstract-manage.component.html',
  styleUrl: './abstract-manage.component.css'
})
export abstract class AbstractManageComponent {
  
  abstractTitle: string | undefined;

  constructor(){
    this.abstractTitle = 'Common title for abstract component!!....'
  }
  
  abstract getComponentInfo(): string;

}

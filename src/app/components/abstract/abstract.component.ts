import { Component } from '@angular/core';
import { AbstractManageComponent } from '../abstract-manage/abstract-manage.component';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css'] // Note: Use `styleUrls` (plural)
})
export class AbstractComponent extends AbstractManageComponent {
  constructor() {
    super();
    //this.abstractTitle = 'Change this one';
  }

  getComponentInfo(){
    return 'This is a title for new one';
  }
}

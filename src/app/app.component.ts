import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InactivityService } from './components/service/inactivity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testApp';
  constructor(private newTitle: Title, private inactivityServive: InactivityService) {}

  ngOnInit() {
    this.inactivityServive.startWatching();
    this.newTitle.setTitle('MySelf');
  }
}

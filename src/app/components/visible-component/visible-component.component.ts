import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visible-component',
  templateUrl: './visible-component.component.html',
  styleUrl: './visible-component.component.css',
})
export class visibleComponent {
  title: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }
}

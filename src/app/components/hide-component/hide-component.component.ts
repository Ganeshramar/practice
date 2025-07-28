import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hide-component',
  templateUrl: './hide-component.component.html',
  styleUrl: './hide-component.component.css',
})
export class hideComponent {
  query: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.query = this.route.snapshot.queryParamMap.get('ans');
  }

  form = new FormGroup({});
  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}

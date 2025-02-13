import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-treasure-component',
  templateUrl: './treasure-component.component.html',
  styleUrl: './treasure-component.component.css'
})
export class TreasureComponent {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  form = new FormGroup({  });
  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}

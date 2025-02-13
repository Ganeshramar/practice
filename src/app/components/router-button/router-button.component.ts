import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router-button',
  templateUrl: './router-button.component.html',
  styleUrl: './router-button.component.css'
})
export class RouterButtonComponent {
  @Input() label!: string;
  @Input() link!: string;
}

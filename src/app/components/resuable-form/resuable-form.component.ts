import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resuable-form',
  templateUrl: './resuable-form.component.html',
  styleUrls: ['./resuable-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }), // Access parent ControlContainer
    },
  ],
})
export class ResuableFormComponent implements OnInit, OnDestroy {
  @Input() controlKey!: string; // Ensure this input is provided
  @Input() label = '';

  private parentContainer = inject(ControlContainer);

  get parentFormGroup(): FormGroup {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    if (!this.parentFormGroup.contains(this.controlKey)) {
      this.parentFormGroup.addControl(
        this.controlKey,
        new FormGroup({
          firstName: new FormControl(''),
          lastName: new FormControl(''),
        })
      );
    }
  }

  ngOnDestroy() {
    if (this.parentFormGroup.contains(this.controlKey)) {
      this.parentFormGroup.removeControl(this.controlKey);
    }
  }
}

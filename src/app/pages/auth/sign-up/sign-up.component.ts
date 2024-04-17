import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/Shared/constants/constans';
import { OptionsForm } from '../form/form.component';

@Component({
  selector: 'app-sign-up',
  template: `<app-form [options]="options"></app-form>`,
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  options: OptionsForm = {
    id: ACTIONS.signUp,
    label: ACTIONS.signUp,
  }
}

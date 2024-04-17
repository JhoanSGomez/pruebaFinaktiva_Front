import { Component } from '@angular/core';
import { ACTIONS } from 'src/app/Shared/constants/constans';
import { OptionsForm } from '../form/form.component';

@Component({
  selector: 'app-sign-in',
  template: `<app-form [options]="options"></app-form>`,
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  options: OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn,
  }
}

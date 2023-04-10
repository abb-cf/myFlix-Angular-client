import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-registartion-form',
  templateUrl: './user-registartion-form.component.html',
  styleUrls: ['./user-registartion-form.component.scss']
})
export class UserRegistartionFormComponent {
  @Input() userData = { Username: '', Passowrd: '', Email: '', Birthday: ''}
}

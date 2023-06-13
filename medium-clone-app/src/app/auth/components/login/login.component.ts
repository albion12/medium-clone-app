import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {RouterLink} from '@angular/router'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import { BacknedErrorMessages } from 'src/app/shared/components/backendErrorMessages.component'
import {authActions} from '../../store/actions'
import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'
import { LoginRequestInterface } from '../../types/loginRequest.interface'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BacknedErrorMessages,
  ],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(authActions.login({request}))
  }
}

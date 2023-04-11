import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {RouterModule} from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),ReactiveFormsModule],
  declarations: [RegisterComponent]
})
export class AuthModule {}

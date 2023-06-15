import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {map, Observable} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'
import {AuthResponseInterface} from '../types/authResponse.interface'
import {environment} from 'src/environments/environment'
import {LoginRequestInterface} from '../types/loginRequest.interface'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  getCurrentUser():Observable<CurrentUserInterface>{
    const url = environment.apiUrl + '/user'
    return this.http.get<AuthResponseInterface>(url)
      .pipe(map(this.getUser))
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }
}

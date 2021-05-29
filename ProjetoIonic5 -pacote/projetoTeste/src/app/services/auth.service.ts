import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  hasAccess(): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }

  private readonly jwtTokenName = 'jwt_token';

  private authUser = new ReplaySubject<string | null>(1);
  public authUserObservable = this.authUser.asObservable();
  jwtHelper: any;
  httpClient: any;
  navCtrl: any;
  /*

  hasAccess(): Promise<boolean> {
    const jwt = localStorage.getItem(this.jwtTokenName);

    if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {

      return new Promise((resolve, _) => {

        this.httpClient.get(`${environment.serverURL}/authenticate`)
          .subscribe(() => {
              this.authUser.next(jwt);
              resolve(true);
            },
            err => {
              this.logout();
              resolve(false);
            });
      });

      // OR
      // this.authUser.next(jwt);
      // Promise.resolve(true);
    } else {
      this.logout();
      return Promise.resolve(false);
    }
  }

  logout(): void {
    localStorage.removeItem(this.jwtTokenName);
    this.authUser.next(null);
    this.navCtrl.navigateRoot('login', {replaceUrl: true});
  }

  login(values: { username: string, password: string }): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/login`, values, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  }

  private handleJwtResponse(jwt: string): string {
    localStorage.setItem(this.jwtTokenName, jwt);
    this.authUser.next(jwt);

    return jwt;
  }

  signup(values: { name: string, email: string, username: string, password: string }): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/signup`, values, {responseType: 'text'})
      .pipe(tap(jwt => {
        if (jwt !== 'EXISTS') {
          return this.handleJwtResponse(jwt);
        }
        return jwt;
      }));
  }



//  }

function tap(arg0: (jwt: any) => string): any {
  throw new Error('Function not implemented.');
}*/

}

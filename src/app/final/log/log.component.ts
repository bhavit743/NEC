import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  focus7;
  focus8;
  focus9;
  isCollapsed = true;
  user: SocialUser;
  loggedIn: boolean;
  access_token;

  constructor(private router: Router, private authService: SocialAuthService,private http: HttpClient,) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      // console.log(user)
      if (user.provider == 'GOOGLE') {
        var backend = 'google-oauth2'
        localStorage.setItem('image_url', user.photoUrl);
        this.get_token(backend, user.authToken);
      }
    });
  }

  signInWithGoogle(): void {
    // this.authService.initState.subscribe(() => {}, (console.error), () => {console.log('all providers are ready')});
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  get_token(backend, authToken) {
    var body = new FormData();
    body.append('grant_type', 'convert_token');
    body.append('backend', backend);
    body.append('client_id', 'fu6ScL3rInENgdOul8dJ4ZVEu9d0DJTvJTFkaY6x');
    body.append('client_secret', 'YAUfwdMJbf9pbHEO9QNJFcjaEBZZ1SatfdG7tR6chr5rb1MvcUOeCuW6o5kHwJngYJPwdqTfcK0GfDdGoOBEnL8vsGZKrndRoREomJ7jdwz5elmGy1HpS458XSbijU4J');
    body.append('token', authToken);

    this.http.post<any>("https://api3.ecell.in/django-oauth/convert-token/", body).subscribe(
      data => {
          this.access_token = data['access_token'];
          console.log(data);
          localStorage.setItem('cadash_token', this.access_token);
          localStorage.setItem('refresh_token', data['refresh_token'])
          console.log(data['access_token'])
          this.check()
      }
    );
  }

  showSwal(type) {

    Swal.fire({
        title: type,
        buttonsStyling: false,
        customClass: {
            confirmButton: "btn btn-success"
        }
    })
  }

  check() {
    var header = new HttpHeaders({
        "authorization": "Bearer " + localStorage.getItem('nec_token')
    })

    this.http.get<any>("https://api3.ecell.in/nec/check/", { headers: header }).subscribe(
      data => {
          console.log(data)
          if (data['status'] == 'success') {
              console.log('registered')
              // this.router.navigate(['home'])
              this.showSwal('Success')
          }
          else {
              this.showSwal('Not a registered account. Contact Admin')
          }
      },
      err=>{
        this.showSwal('Some error occcured. Contact Admin')
      }
    );

  }

}

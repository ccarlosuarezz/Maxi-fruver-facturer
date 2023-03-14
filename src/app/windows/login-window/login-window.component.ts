import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  public isLoad: boolean = false;

  constructor(private router: Router, private AuthService: AuthService) {}

  ngOnInit(): void {
  }

  auth() {
    this.isLoad = true;
    this.AuthService.login(this.email, this.password).subscribe((res) => {
      if(res.ok) {
        console.log(res);
        this.isLoad = false;
        this.router.navigateByUrl('/main-administrator-window');
        localStorage.setItem('token', res.token!);
      } else {
        this.isLoad = false;
        Swal.fire({
          title: res.error,
          text:res.message,
          icon:'error',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      }
    });
  }
}
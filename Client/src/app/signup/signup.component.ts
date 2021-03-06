import { Component, OnInit } from '@angular/core';
import { VmService } from "../Service/vm.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private service: VmService) { }

  ngOnInit(): void {
  }

  sendUser(username: string, email: string, password: string) {

    //Using my Backend
    this.service.Register(username, email, password).subscribe((res: any) => {
      console.log("information of new user : " + email + username + password)
      console.log(res);
      alert("User registred successfully");
      window.location.reload();
    },
      err => {
        console.log('HTTP Error', err);
        alert(JSON.stringify(err.error))
      },
      () => console.log('HTTP request completed.')
    )
  }
}

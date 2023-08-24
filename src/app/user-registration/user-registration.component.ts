import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  

  newUser = {
    username: '',
    email: '',
    password: ''
  }

  registeredUsers: any[] = [];

  constructor(private toastr: ToastrService){}

  registerUser() {

    if(this.isValidRegistration()){
      this.registeredUsers.push({...this.newUser});

      this.newUser.username = '';
      this.newUser.email = '';
      this.newUser.password = '';

      //message sucess
    this.toastr.success('Registration seccessful!', 'Success')
    } else {
      //message error
      this.toastr.error('Please fiil all fields.', 'Error')
    }
  } 

  private isValidRegistration(){
    return(
      this.newUser.username.trim() !== '' &&
      this.newUser.email.trim() !== '' &&
      this.newUser.password.trim() !== ''
    );
  }

}

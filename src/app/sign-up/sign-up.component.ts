import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}  from '@angular/fire/auth';
import { Database, set, ref, update} from '@angular/fire/database';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
    title = 'marchan';
  constructor(public auth: Auth, public database: Database) {

  

  }

   registerUser(value: any) {
    createUserWithEmailAndPassword(this.auth, value.email, value.password)
      .then((userCredential) => {
      
        const user = userCredential.user;

        set(ref(this.database, 'users/' + user.uid), {
          email: value.email,
          password: value.password
        });

        alert('user created! ');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
      });
  }
}


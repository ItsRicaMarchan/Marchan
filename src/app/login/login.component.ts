import { Component, OnInit} from '@angular/core';
import { Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Database, ref, update,onValue, remove} from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  users!: Observable<any[]>;
  constructor(public auth: Auth,public database: Database, private db: AngularFireDatabase,private router:Router) {
    this.users = db.list('/users').valueChanges();
   }
   
  ngOnInit(): void {


  }

    userlog=""
    username=""
  loginUser(value: any) {

    //login 
    const starCountRef = ref(this.database, 'users/' + value.email);
    onValue(starCountRef, (snapshot) => {
     const db = snapshot.val();  
  this.userlog = db.password;
  this.username = db.username;
  
     }); 

       this.router.navigate(['/signup'])
      
       if (this.userlog == value.password){
        const date = new Date();
    update(ref(this.database, 'users/' + value.email),{
    last_login:date
    } );
    sessionStorage.setItem('id',value.email);
    
    this.router.navigate(['/post'])
    }else{
    alert('wrong credential!');
    }
      }
    
    }
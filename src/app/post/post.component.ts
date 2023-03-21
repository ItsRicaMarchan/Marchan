import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  AngularFireDatabase } from '@angular/fire/compat/database';
import { Database,remove,ref,update, onValue, set} from '@angular/fire/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  name =  sessionStorage.getItem('id');
  data = "";
  names = "";
  sent = true;
  users!: Observable<any[]>;
  constructor(public database: Database, private FireDb: AngularFireDatabase) {
  this.users = FireDb.list('/post').valueChanges();

  const starCountRef = ref(this.database, 'users/' + this.names);
    onValue(starCountRef, (snapshot) => {
     const db = snapshot.val();  
    this.names = db.names;

});


if(this.names != ""){
this.sent = true;
}else if(this.names == ""){
  this.sent = false;
  }

}

  ngOnInit(): void {
   
  
    
  }



post = "";
uid = "";
    posted(value:any){
      this.uid = "post" + Math.floor(100000 + Math.random() * 900000);
      set(ref(this.database, 'post/' + this.uid), {   
          names: value.names,
          post: value.post,
          id: this.uid
   
         }); 
         alert('Posted!');

        this.post = "";
        }

        del(value: any){
          remove(ref(this.database, 'post/' + value));
          alert('Deleted Successfully')
        }
        logout(){
          sessionStorage.clear();
        }
       }
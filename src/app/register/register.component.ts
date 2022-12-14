import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faCoffee = faCoffee;
  registerationForm = new FormGroup({
    // client site validation
  username : new FormControl( '' , [ Validators.required ,
                                     Validators.minLength(5),
                                      Validators.maxLength(15),
                                //    Validators.pattern(' ^[A-Za-z][^0-9]* ') 
                                    ]),

  email : new FormControl('', [  Validators.required,
                                 Validators.email           ] ),


  password : new FormControl('' , [Validators.required ,
                                    Validators.min(8) ,
                                                  ]),

  password_confirmation : new FormControl( '' , [Validators.required , 
                                                 Validators.min(8)         ])
  })

  
  apiResponse:any;

  sendData(form:any){
    if(form.valid){
     this._AuthonticationService.signup(form.value).subscribe({
      next: (response) => { this.apiResponse = response.message; 
        // localStorage.setItem("userEmail", response?.email)
this._AuthonticationService.setEmail(response?.email)

       this._router.navigate (['/successfully'])  
    }, 
      
      error: (err) =>{
        console.log(err)}
       // show validation from server 
      })
    }
    else{console.log(" not valid data ")} 
    
  }

  constructor(private _AuthonticationService: AuthonticationService,private _router:Router) { }

  ngOnInit(): void {
  }

}

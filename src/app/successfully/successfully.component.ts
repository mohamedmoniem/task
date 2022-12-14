import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-successfully',
  templateUrl: './successfully.component.html',
  styleUrls: ['./successfully.component.css']
})
export class SuccessfullyComponent implements OnInit {
   
  Usermail:any;
  constructor(private  _AuthonticationService: AuthonticationService) { }

  ngOnInit(): void {
     this.Usermail= this._AuthonticationService.getEmail()
    console.log(this.Usermail)
  }

}

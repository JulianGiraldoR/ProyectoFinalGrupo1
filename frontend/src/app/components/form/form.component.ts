import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm = {
    name:'',
    email:'',
    cellNumber:'',
    subject:'',
    text:''
  }

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  form(){
    this.authService.form(this.contactForm)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/products'])//redirecciona a la ruta product-private
      },
      err=> console.log(err)
    )
  }
  

}

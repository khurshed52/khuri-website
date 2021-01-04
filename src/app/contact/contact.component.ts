import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../shared/contact.service';
declare var sal:any;
declare var Swal:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact:string = "Contact Me";
  public conImg = '../../assets/images/contact.svg';
  FormData: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private builder: FormBuilder, private _contact: ContactService, private router: Router) {
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      name: ['', Validators.required],
      email: ['',  [Validators.required, Validators.pattern(this.emailPattern)]],
      comments: ['', Validators.required],
    })

    sal({
      threshold: 1,
      once: false,
    });
  }

  onSubmit(FormData: any){
    //console.log(FormData);
    this._contact.PostMessage(FormData).subscribe(
      res=> {
        console.log(res)
      }
    );
    this.FormData.reset();
    Swal.fire({
      type: 'success',
      title: 'Thank you 😃',
      text: 'Your message has been successfully sent. I will contact you very soon!',
      timer: 2000,
      position: 'top-end',
    })
    this.router.navigate(['/home'])
  }

}

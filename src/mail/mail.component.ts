import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder,
    private service:TransferService
  ) {
     this.emailForm = this.formBuilder.group({
       from:['',[Validators.required,Validators.email]],
       to:['',[Validators.required,Validators.email]],
       cc:[''],
       bc:[''],
       subject:['',[Validators.required]],
       file:[''],
       message:['',[Validators.required]],

     })
   }

   emailForm :FormGroup

  ngOnInit() {
    this.router.navigate(['inbox'],{relativeTo:this.route})
 }


inbox(){
  // this.router.navigate(['inbox'])
   this.router.navigate(['Inbox'],{relativeTo:this.route})
}

sent(){
  // this.router.navigate(['/mail/sent'])

  this.router.navigate(['sent'],{relativeTo:this.route})


}
selectFile(e:any){

}

send(){
  let form_data = this.emailForm.value
  let newobj={
    date:new Date().toDateString(),
    from:this.emailForm.controls['from'].value,
    to:this.emailForm.controls['to'].value,
    bc:this.emailForm.controls['bc'].value,
    cc:this.emailForm.controls['cc'].value,
    message:this.emailForm.controls['message'].value,
    file:this.emailForm.controls['file'].value,
    subject:this.emailForm.controls['subject'].value,

  }
  console.log(form_data)
  let list_data =[]
  list_data.push(form_data)
  console.log(list_data)
  this.service.emailForm_list.push(newobj)

  console.log("serviceData",this.service.getData())
  this.emailForm.reset()
  this.router.navigate(['Inbox'],{relativeTo:this.route})
}



}
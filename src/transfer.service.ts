import { Injectable } from '@angular/core';

@Injectable()
export class TransferService {

  constructor() { }

  emailForm_list = []
  getData(){
    return this.emailForm_list
  }

}
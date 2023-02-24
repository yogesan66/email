import { Routes } from "@angular/router";
import { InboxComponent } from "../inbox/inbox.component";
import { MailComponent } from "../mail/mail.component";
import { SentComponent } from "../sent/sent.component";
import { AppComponent } from "./app.component";

export const routes:Routes = [
  // {path:'',component:AppComponent},
  {path:'mail',component:MailComponent,children:[
    {path:'Inbox',component:InboxComponent},
   {path:'sent',component:SentComponent}

  ]}
  // {path:'menubar',component:,children:[
    // {path:'mail',component:MailComponent}
  // ]}
]
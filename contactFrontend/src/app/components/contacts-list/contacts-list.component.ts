import { CommonModule } from '@angular/common';
import { Component, WritableSignal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {
  constructor(private _contactsService: ContactsService, private router: Router) 
  {

   }
   contacts: WritableSignal<Contact[]> = this._contactsService.contacts

   delete(contact: Contact){
     this._contactsService.deleteContact(contact);


   }
}

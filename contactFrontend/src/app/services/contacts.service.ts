import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = signal<(Contact[])>([{name: 'Hugo', email: 'hugo@gmail', phone: '123456789'}])

  constructor() { }

  addContact(newContact: Contact){
    setTimeout(() => {
      this.contacts.update(contacts => [newContact,...contacts])
    }, 1000);
  }

  deleteContact(contact: Contact){
    setTimeout(() => {
      this.contacts.update(contacts => contacts.filter(c => c !== contact))
    }, 1000);
  }
}

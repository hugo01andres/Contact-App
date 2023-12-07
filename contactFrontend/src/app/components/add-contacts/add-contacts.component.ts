import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contacts',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './add-contacts.component.html',
  styleUrl: './add-contacts.component.css'
})
export class AddContactsComponent {
  name = "";
  email = "";
  phone = "";
  constructor(private _contactsService: ContactsService, private router : Router) { }

  save(){
    const payload = {name: this.name, email: this.email, phone: this.phone};
    this._contactsService.addContact(payload);
    this.router.navigate(['/']);
  }
}

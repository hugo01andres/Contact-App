import { Routes } from '@angular/router';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: ContactsListComponent},
    {path: 'add', component: AddContactsComponent}
];

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:8080/Contacts');
  }

  getContactByTierId(id: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      'http://localhost:8080/Contacts/' + id + '/Tier'
    );
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('http://localhost:8080/Contacts/', contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>('http://localhost:8080/Contacts/', contact);
  }

  deleteContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>('http://localhost:8080/Contacts/' + id);
  }
}

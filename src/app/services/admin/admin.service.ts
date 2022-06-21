import { Admin } from './../../models/admin';
import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:5001/soul-digital-294b0/us-central1/api';
  adminUrl = `${this.baseUrl}/admin`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAdmins() {
    return this.http.get<Admin[]>(this.adminUrl, {
      headers: { Authorization: `Beader ${this.authService.userToken}` },
  });
  }

  addAdmins(admin: Admin) {
    return this.http.post(this.adminUrl, admin, {
      headers: { Authorization: `Beader ${this.authService.userToken}` },
  });
  }

  updateAdmin(admin: Admin) {
    return this.http.put(`${this.adminUrl}/${admin.uid}`, admin, {
      headers: { Authorization: `Beader ${this.authService.userToken}` },
  });
  }

  deleteAdmin(admin: Admin) {
    return this.http.delete(`${this.addAdmins}/${admin.uid}`, {
      headers: { Authorization: `Beader ${this.authService.userToken}` },
  });
  }
}

import { EMPTY, Observable } from 'rxjs';
import { AdminService } from './../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admins$: Observable<Admin[]> = EMPTY;
  constructor(private adminService: AdminService) { }

  admin: Admin = {} as Admin;

  addAdmin() {
    this.adminService.addAdmin(this.admin).subscribe(() => {
      this.admins$ = this.adminService.getAdmins();
    });
  }

  delete(admin: Admin) {
    this.adminService.delete(admin).subscribe(() => {
      this.admins$ = this.adminService.getAdmins();
    });
  }


  ngOnInit(): void {
    this.admins$ = this.adminService.getAdmins();
  }

}

import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
  companies = [{"name": "vca"}];

  constructor(private api : ApiService) {
    this.getAllCompanies();
  }
  getAllCompanies = () => {
    this.api.getAllCompanies().subscribe(
      data => {
        this.companies = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}

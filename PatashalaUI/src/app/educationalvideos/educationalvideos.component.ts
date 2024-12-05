import { Component } from '@angular/core';
import {ApiService } from '.././api.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-educationalvideos',
  templateUrl: './educationalvideos.component.html',
  styleUrls: ['./educationalvideos.component.css']
})
export class EducationalvideosComponent {
  videos: any[] = [];
  constructor(private apiService: ApiService, public router: Router) { }
  
  ngOnInit(): void {
    this.apiService.getVideoList().subscribe(
      (data) => {
        console.log('API Response:', data);  
        this.videos = data;  
      },
      (error) => {
        console.error('Error fetching video list', error);
      }
    );
  }
}

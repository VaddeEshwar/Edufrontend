import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: any = [];
  imageId:any[]=[];
  currentPage: number = 0;
  Imgslst: any[] = [];
  folders: { [key: string]: any[] } = {}; // Object to hold images grouped by folder
  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
  }
  ngOnInit(){
    this.apiService.GetImages().subscribe({
      next: (data: any) => {
        data.forEach((image: any) => {
          const imagePath = 'assets/img' + image.folder + image.imageName;
          const imageDescription = image.imageDescription;
          console.log('Image Path:', imagePath); 
          this.Imgslst.push({ Image: imagePath, ImageDescription: imageDescription });
        });
        this.currentPage++;
      },
      error: (error: any) => {
        console.error('Error fetching images', error);
      }
    });
}
}
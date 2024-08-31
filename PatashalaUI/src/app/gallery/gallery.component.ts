import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  imagesByFolder: Array<{ imageId: number, imageUrl: string, imageDescription: string }> = [];
  folders: string[] = ['TalkWithDirector','CollectiveAchievments','Courtesy_visit_to_meet','motherday','SRNagarBranchLaunch', 'TeamPics', 'HimayathnagarBranchLaunch','Bridgemeet','BhavansEvent','CollegeVisits','CorporateOffice','Seminar']; // List of folder names

  selectedFolder: string = this.folders[0]; // Default to the first folder


  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadImages(this.selectedFolder);
  }

  loadImages(folder: string) {
    this.apiService.getFacultyImages(1, folder).subscribe(
      (data: any) => {
        this.imagesByFolder = data.map((item: any) => ({
          imageId: item.imageId,
          imageUrl: item.imagesUrl,
          imageDescription: item.imageDescription
        }));
        console.log(`Images from ${folder}:`, this.imagesByFolder);
      },
      (error: any) => {
        console.error(`Error fetching images from ${folder}:`, error);
      }
    );
  }

  onFolderChange(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      this.selectedFolder = target.value;
      this.loadImages(this.selectedFolder);
    }
  }
}
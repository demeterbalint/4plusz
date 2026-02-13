import {Injectable} from '@angular/core';
import {ProjectService} from './project.service';
import {imageMap} from '../image-map';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {

  images: string[] = Object.values(imageMap).flat().filter(img => img.includes('home'));

  constructor(private projectService: ProjectService) {
  }


  getHomePageImages(): string[] {
    return this.images;
  }
}

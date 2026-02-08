import { Injectable } from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {

  constructor(private projectService: ProjectService) { }

  getHomePageProjects(): Project[] {
    return this.projectService.getProjects().filter(project => project.slug === 'home');
  }
}

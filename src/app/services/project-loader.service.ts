import { Injectable } from '@angular/core';
import {ProjectService} from './project.service';
import {Project} from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {

  homePageProjectSlugs: string[] = ['test slug', '2 test slug']

  constructor(private projectService: ProjectService) { }

  getHomePageProjects(): Project[] {
    return this.projectService.getProjects().filter(project => this.homePageProjectSlugs.includes(project.slug));
  }
}

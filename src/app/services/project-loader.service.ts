import { Injectable } from '@angular/core';
import {ProjectService} from './project.service';
import {ProjectModel} from '../models/project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {

  homePageProjectSlugs: string[] = ['test slug', '2 test slug']

  constructor(private projectService: ProjectService) { }

  getHomePageProjects(): ProjectModel[] {
    return this.projectService.getProjects().filter(project => this.homePageProjectSlugs.includes(project.slug));
  }
}

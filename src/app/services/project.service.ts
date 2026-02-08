import {Injectable} from '@angular/core';
import {Project} from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {
  }

  private projects: Project[] = [
    {
      name: "TEST NAME",
      slug: "test slug",
      shortDescription: "test short description",
      longDescription: "test long description",
      additionalInfo: "test additional information",
      images: ["test image 1", "test image 2"]
    },
    {
      name: "TEST2 NAME",
      slug: "test2 slug",
      shortDescription: "test2 short description ",
      longDescription: "test2 long description  ",
      additionalInfo: "test2 additional information",
      images: ["test2 image 1", "test2 image 2"]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}

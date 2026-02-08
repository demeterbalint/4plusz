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
      name: "",
      slug: "",
      shortDescription: "",
      longDescription: "",
      additionalInfo: "",
      images: ["", ""]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}

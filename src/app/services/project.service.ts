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
      slug: "test slug",
      name: {
        hu: "TESZT NÉV",
        en: "TEST NAME"
      },
      shortDescription: {
        hu: "teszt rövid leírás",
        en: "test short description"
      },
      longDescription: {
        hu: "teszt hosszú leírás",
        en: "test long description"
      },
      additionalInfo: {
        hu: "teszt egyéb információ",
        en: "test additional information"
      },
      images: ["test image 1", "test image 2"]
    },
    {
      slug: "2 test slug",
      name: {
        hu: "2 TESZT NÉV",
        en: "2 TEST NAME"
      },
      shortDescription: {
        hu: "2 teszt rövid leírás",
        en: "2 test short description"
      },
      longDescription: {
        hu: "2 teszt hosszú leírás",
        en: "2 test long description"
      },
      additionalInfo: {
        hu: "2 teszt egyéb információ",
        en: "2 test additional information"
      },
      images: ["2 test image 1", "2 test image 2"]
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}

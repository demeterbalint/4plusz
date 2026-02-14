import {ProjectModel} from './project-model';

export interface ProjectListModel {
  title: {
    hu: string,
    en: string
  },
  projects: ProjectModel[]
}

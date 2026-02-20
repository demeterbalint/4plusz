import {ProjectModel} from './project-model';
import {ProjectListItemModel} from './project-list-item-model';

export interface ProjectListModel {
  title: {
    hu: string,
    en: string
  },
  projects: ProjectListItemModel[]
}

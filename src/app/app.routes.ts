import { Routes } from '@angular/router';
import {StudioComponent} from './components/studio/studio.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {PublicationsComponent} from './components/publications/publications.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomepageComponent} from './components/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent  },
  { path: 'studio', component: StudioComponent  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'contact', component: ContactComponent }
];

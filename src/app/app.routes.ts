import { Routes } from '@angular/router';
import {StudioComponent} from './components/studio/studio.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {PublicationsComponent} from './components/publications/publications.component';
import {ContactComponent} from './components/contact/contact.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {ProjectListsComponent} from './components/project-lists/project-lists.component';
import {ProjectReferenceWorksComponent} from './components/project-reference-works/project-reference-works.component';
import {ProjectPageComponent} from './components/project-page/project-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent  },
  { path: 'studio', component: StudioComponent  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:slug', component: ProjectPageComponent },
  { path: 'projects/public-buildings', component: ProjectListsComponent, data: { category: 'public-buildings' } },
  { path: 'projects/religious-buildings', component: ProjectListsComponent, data: { category: 'religious-buildings' } },
  { path: 'projects/residential-buildings', component: ProjectListsComponent, data: { category: 'residential-buildings' }},
  { path: 'projects/historical-buildings', component: ProjectListsComponent, data: { category: 'historical-buildings' } },
  { path: 'projects/conceptual-designs', component: ProjectListsComponent, data: { category: 'conceptual-designs' } },
  { path: 'projects/reference-works', component: ProjectReferenceWorksComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'contact', component: ContactComponent }
];

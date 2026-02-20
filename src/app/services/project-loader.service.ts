import {Injectable} from '@angular/core';
import {ProjectService} from './project.service';
import {ProjectListModel} from '../models/project-list-model';
import {ProjectModel} from '../models/project-model';
import {HomepageProjectModel} from '../models/homepage-project-model';
import {imageMap} from '../image-map';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoaderService {

  constructor(private projectService: ProjectService) {}

  getHomepageProjects(): HomepageProjectModel[] {
    const projects = this.projectService.getProjects();

    const raday = projects.find(p => p.slug === 'raday-house')!;
    const csomor = projects.find(p => p.slug === 'csomor-church')!;
    const fasor = projects.find(p => p.slug === 'fasor-church')!;
    const kapy = projects.find(p => p.slug === 'kapy')!;
    const budaors = projects.find(p => p.slug === 'budaors-church')!;
    const ujpest = projects.find(p => p.slug === 'ujpest-parish-church')!;
    const rezhaz = projects.find(p => p.slug === 'keresztur-restaurant-office')!;

    return [
      { project: raday, image: raday.images.find(i => i.includes('02'))! },
      { project: raday, image: raday.images.find(i => i.includes('05'))! },
      { project: csomor, image: csomor.images.find(i => i.includes('16'))! },
      { project: fasor, image: fasor.images.find(i => i.includes('12'))! },
      { project: kapy, image: kapy.images.find(i => i.includes('main'))! },
      { project: budaors, image: budaors.images.find(i => i.includes('01'))! },
      { project: ujpest, image: ujpest.images.find(i => i.includes('11'))! },
      { project: fasor, image: fasor.images.find(i => i.includes('press'))! },
      { project: ujpest, image: ujpest.images.find(i => i.includes('04'))! },
      { project: budaors, image: budaors.images.find(i => i.includes('home'))! },
      { project: rezhaz, image: rezhaz.images.find(i => i.includes('04'))! },
      { project: budaors, image: budaors.images.find(i => i.includes('23'))! },
      { project: fasor, image: fasor.images.find(i => i.includes('13'))! },
      { project: csomor, image: csomor.images.find(i => i.includes('11'))! },
      { project: raday, image: raday.images.find(i => i.includes('press'))! },
      // stb
    ];
  }

  private categoryImageKeyMap: Record<string, string> = {
    'public-buildings': 'public',
    'religious-buildings': 'religious',
    'historical-buildings': 'historical',
    'residential-buildings': 'residential',
    'conceptual-designs': 'conceptual'
  };

  private getCategoryImage(project: ProjectModel, category: string): string {
    const key = this.categoryImageKeyMap[category];

    return imageMap[project.slug].find(img => img.includes(key))!
  }

  private filterProjectsByCategory(categoryKey: string): ProjectModel[] {
    return this.projectService.getProjects()
      .filter(project => project.images.some(img => img.includes(categoryKey)));
  }

  /*//slugs for project-types
  publicBuildingSlugs: string[] = ['raday-house', 'ujpest-parish-church', 'fasor-church', 'keresztur-restaurant-office', 'vac-high-school', 'budaors-church', 'csomor-ichurch',
    'tihany-granary', 'godollo-lyceum', 'ujlak-swimming-facility', 'bicske-swimming-facility', 'pesthidegkut-church', 'csipkebokor-kindergarten', 'geo-log-office', 'hetszinvirag-kindergarten']

  religiousBuildingSlugs: string[] = ['fasor-church', 'budaors-church', 'csomor-church', 'raday-house', 'ujpest-parish-church', 'pesthidegkut-church',
    'kulso-kelenfold-church', 'albertfalva-church', 'pecsely-chapel']

  residentialBuildingSlugs: string[] = ['kapy', 'hubay-garden', 'family-house-3', 'family-house-1', 'family-house-4', 'family-house-2', 'family-house-5']

  historicalBuildingSlugs: string[] = ['fasor-church', 'tihany-granary', 'ujpest-parish-church', 'csipkebokor-kindergarten']

  conceptualDesignSlugs: string[] = ['godollo-lyceum', 'vac-high-school', 'pesthidegkut-church', 'pecsely-chapel', 'kulso-kelenfold-church', 'ujlak-swimming-facility',
  'geo-log-office', 'family-house-3', 'family-house-1', 'albertfalva-church', 'weores-sandor-theatre']*/

  //methods for project-types
  getPublicBuildings(): ProjectListModel {
    const category = 'public-buildings';
    const projects = this.filterProjectsByCategory('public')
      .map(project => ({
        project,
        image: this.getCategoryImage(project, category)
      }));

    return {
      title: {
        hu: 'Középületek',
        en: 'Public\nBuildings'
      },
      projects
    };
  }

  getReligiousBuildings(): ProjectListModel {
    const category = 'religious-buildings';
    const projects = this.filterProjectsByCategory('religious')
      .map(project => ({
        project,
        image: this.getCategoryImage(project, category)
      }));

    return {
      title: {
        hu: 'Szakrális\népületek',
        en: 'Religious\nBuildings'
      },
      projects
    };
  }

  getResidentialBuildings(): ProjectListModel {
    const category = 'residential-buildings';
    const projects = this.filterProjectsByCategory('residential')
      .map(project => ({
        project,
        image: this.getCategoryImage(project, category)
      }));

    return {
      title: {
        hu: 'Lakóépületek',
        en: 'Residential\nBuildings'
      },
      projects
    };
  }

  getHistoricalBuildings(): ProjectListModel {
    const category = 'historical-buildings';
    const projects = this.filterProjectsByCategory('historical')
      .map(project => ({
        project,
        image: this.getCategoryImage(project, category)
      }));

    return {
      title: {
        hu: 'Műemlékek',
        en: 'Historical\nBuildings'
      },
      projects
    };
  }

  getConceptualDesigns(): ProjectListModel {
    const category = 'conceptual-designs';
    const projects = this.filterProjectsByCategory('conceptual')
      .map(project => ({
        project,
        image: this.getCategoryImage(project, category)
      }));

    return {
      title: {
        hu: 'Tervek',
        en: 'Conceptual\nDesigns'
      },
      projects
    };
  }

  getProjectBySlug(slug: string): ProjectModel {
    return this.projectService.getProjects().find(project => project.slug === slug)!;
  }

  getMainImage(project: ProjectModel) {
    return imageMap[project.slug].find(img => img.includes('main'))!;
  }
}

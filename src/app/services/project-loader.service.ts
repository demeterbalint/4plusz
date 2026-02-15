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

  constructor(private projectService: ProjectService) {

  }

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
      { project: raday, image: imageMap[raday.slug].find(i => i.includes('02'))! },
      { project: raday, image: imageMap[raday.slug].find(i => i.includes('05'))! },
      { project: csomor, image: imageMap[csomor.slug].find(i => i.includes('16'))! },
      { project: fasor, image: imageMap[fasor.slug].find(i => i.includes('12'))! },
      { project: kapy, image: imageMap[kapy.slug].find(i => i.includes('main'))! },
      { project: budaors, image: imageMap[budaors.slug].find(i => i.includes('01'))! },
      { project: ujpest, image: imageMap[ujpest.slug].find(i => i.includes('11'))! },
      { project: fasor, image: imageMap[fasor.slug].find(i => i.includes('press'))! },
      { project: ujpest, image: imageMap[ujpest.slug].find(i => i.includes('04'))! },
      { project: budaors, image: imageMap[budaors.slug].find(i => i.includes('home'))! },
      { project: rezhaz, image: imageMap[rezhaz.slug].find(i => i.includes('04'))! },
      { project: budaors, image: imageMap[budaors.slug].find(i => i.includes('23'))! },
      { project: fasor, image: imageMap[fasor.slug].find(i => i.includes('13'))! },
      { project: csomor, image: imageMap[csomor.slug].find(i => i.includes('11'))! },
      { project: raday, image: imageMap[raday.slug].find(i => i.includes('press'))! },
      // stb
    ];
  }

  //slugs for project-types
  publicBuildingSlugs: string[] = ['raday-house', 'ujpest-parish-church', 'fasor-church', 'keresztur-restaurant-office', 'vac-high-school', 'budaors-church', 'csomor-ichurch',
    'tihany-granary', 'godollo-lyceum', 'ujlak-swimming-facility', 'bicske-swimming-facility', 'pesthidegkut-church', 'csipkebokor-kindergarten', 'geo-log-office', 'hetszinvirag-kindergarten']

  religiousBuildingSlugs: string[] = ['fasor-church', 'budaors-church', 'csomor-church', 'raday-house', 'ujpest-parish-church', 'pesthidegkut-church',
    'kulso-kelenfold-church', 'albertfalva-church', 'pecsely-chapel']

  residentalBuildingSlugs: string[] = ['kapy', 'hubay-garden', 'family-house-3', 'family-house-1', 'family-house-4', 'family-house-2', 'family-house-5']

  historicalBuildingSlugs: string[] = ['fasor-church', 'tihany-granary', 'ujpest-parish-church', 'csipkebokor-kindergarten']

  conceptualDesignSlugs: string[] = ['godollo-lyceum', 'vac-high-school', 'pesthidegkut-church', 'pecsely-chapel', 'kulso-kelenfold-church', 'ujlak-swimming-facility',
  'geo-log-office', 'family-house-3', 'family-house-1', 'albertfalva-church', 'weores-sandor-theatre']

  //methods for project-types
  getPublicBuildings(): ProjectListModel {
    return {
      title: {
        hu: 'Középületek',
        en: 'Public\nBuildings'
      },
      projects: this.projectService.getProjects().filter(project => this.publicBuildingSlugs.includes(project.slug))
    }
  }

  getReligiousBuildings() {
    return {
      title: {
        hu: 'Szakrális\népületek',
        en: 'Religious\nBuildings'
      },
      projects: this.projectService.getProjects().filter(project => this.religiousBuildingSlugs.includes(project.slug))
    }
  }

  getResidentalBuildings() {
    return {
      title: {
        hu: 'Lakóépületek',
        en: 'Residental\nBuildings'
      },
      projects: this.projectService.getProjects().filter(project => this.residentalBuildingSlugs.includes(project.slug))
    }
  }

  getHistoricalBuildings() {
    return {
      title: {
        hu: 'Műemlékek',
        en: 'Historical\nBuildings'
      },
      projects: this.projectService.getProjects().filter(project => this.historicalBuildingSlugs.includes(project.slug))
    }
  }

  getConceptualDesigns() {
    return {
      title: {
        hu: 'Tervek',
        en: 'Conceptual\nDesigns'
      },
      projects: this.projectService.getProjects().filter(project => this.conceptualDesignSlugs.includes(project.slug))
    }
  }


}

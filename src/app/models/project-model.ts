export interface ProjectModel {
  slug: string,
  name: {
    hu: string,
    en: string
  },
  gridShort: {
    hu: string,
    en: string
  },
  projectTypeName: {
    hu: string,
    en: string
  }
  shortDescription: {
    hu: string,
    en: string
  },
  longDescription: {
    hu: string[],
    en: string[]
  },
  additionalInfo: {
    hu: string[],
    en: string[]
  },
  images: string[]
}

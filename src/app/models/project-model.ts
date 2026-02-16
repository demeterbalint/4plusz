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
  architects: {
    hu: string,
    en: string
  },
  location: {
    hu: string,
    en: string
  },
  year: {
    hu: string,
    en: string
  },
  photographers?: {
    hu: string,
    en: string
  },
  images: string[]
}

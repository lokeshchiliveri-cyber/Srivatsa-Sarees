
export interface SareeCollection {
  id: string;
  name: string;
  price: string;
  image: string;
  type: 'Kanchipuram' | 'Gadwal' | 'Pochampally' | 'Uppada';
  description: string;
}

export enum SectionType {
  HERO = 'hero',
  COLLECTION = 'collection',
  HERITAGE = 'heritage',
  CONTACT = 'contact'
}

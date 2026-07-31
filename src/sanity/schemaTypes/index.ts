import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { aboutPage } from './aboutPage'
import { financing } from './financing'
import { testimonial } from './testimonial'
import { galleryImage } from './galleryImage'
import { faq } from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, aboutPage, financing, testimonial, galleryImage, faq],
}

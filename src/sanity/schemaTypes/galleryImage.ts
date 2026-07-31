import { defineField, defineType } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cabinets', value: 'cabinets' },
          { title: 'Countertops', value: 'countertops' },
          { title: 'LVP Flooring', value: 'lvp-flooring' },
          { title: 'Hardwood Flooring', value: 'hardwood-flooring' },
          { title: 'Showroom', value: 'showroom' },
          { title: 'Completed Projects', value: 'completed-projects' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: { title: 'caption', media: 'image', subtitle: 'category' },
  },
})

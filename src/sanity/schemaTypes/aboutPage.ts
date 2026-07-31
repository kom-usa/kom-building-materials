import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Page Heading',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      description: 'Main paragraph shown at the top of the About page',
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'values',
      title: 'Our Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'body', title: 'Body', type: 'text', rows: 3 },
          ],
          preview: {
            select: { title: 'heading' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Us' }),
  },
})

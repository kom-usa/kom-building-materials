import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Cabinets', value: 'cabinets' },
          { title: 'Countertops', value: 'countertops' },
          { title: 'Flooring', value: 'flooring' },
          { title: 'Financing', value: 'financing' },
          { title: 'Delivery & Pickup', value: 'delivery' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
  },
})

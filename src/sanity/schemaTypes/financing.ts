import { defineField, defineType } from 'sanity'

export const financing = defineType({
  name: 'financing',
  title: 'Financing',
  type: 'document',
  fields: [
    defineField({
      name: 'partnerName',
      title: 'Financing Partner Name',
      type: 'string',
      description: 'Name of the financing company',
    }),
    defineField({
      name: 'partnerLogo',
      title: 'Partner Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
      rows: 3,
      description: 'Shown at the top of the Financing page',
    }),
    defineField({
      name: 'terms',
      title: 'Key Terms / Highlights',
      type: 'text',
      rows: 4,
      description: 'e.g. 0% for 12 months, no prepayment penalty, etc.',
    }),
    defineField({
      name: 'applyUrl',
      title: 'Apply Now Link',
      type: 'url',
      description: 'Link to the financing application (if applicable)',
    }),
    defineField({
      name: 'faqs',
      title: 'Financing FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Financing' }),
  },
})

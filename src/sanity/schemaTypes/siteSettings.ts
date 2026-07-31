import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'showroomHours',
      title: 'Showroom Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'days', title: 'Days', type: 'string', placeholder: 'Mon–Fri' },
            { name: 'hours', title: 'Hours', type: 'string', placeholder: '9am – 6pm' },
          ],
          preview: {
            select: { title: 'days', subtitle: 'hours' },
          },
        },
      ],
    }),
    defineField({
      name: 'announcementBar',
      title: 'Announcement Bar Text',
      type: 'string',
      description: 'Text shown in the bar at the top of every page',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})

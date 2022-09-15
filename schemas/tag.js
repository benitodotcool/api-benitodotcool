import { ThLargeIcon } from '@sanity/icons'

export default {
  name: 'tag',
	title: 'Tag',
  type: 'document',
  icon: ThLargeIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     startingDate: 'startingDate'
  //   },
  //   prepare(selection) {
  //     const { title, startingDate } = selection

  //     return {
  //       title: title,
  //       subtitle: startingDate
  //     }
  //   }
  // }
}
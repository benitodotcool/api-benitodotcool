import { ThListIcon } from '@sanity/icons'

export default {
  name: 'category',
	title: 'Category',
  type: 'document',
  icon: ThListIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'tag'}
          ],
          validation: Rule => Rule.required()
        }
      ],
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
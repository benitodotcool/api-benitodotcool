import S from '@sanity/desk-tool/structure-builder'
import { ThLargeIcon } from '@sanity/icons'

// prettier-ignore
export const tags = S.listItem()
  .title('Tags')
  .icon(ThLargeIcon)
  .schemaType('tag')
  .child(
    S.documentTypeList('tag')
  )
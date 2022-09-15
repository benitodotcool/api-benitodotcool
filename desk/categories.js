import S from '@sanity/desk-tool/structure-builder'
import { ThListIcon } from '@sanity/icons'

// prettier-ignore
export const categories = S.listItem()
  .title('Categories')
  .icon(ThListIcon)
  .schemaType('category')
  .child(
    S.documentTypeList('category')
  )
import { defineDocumentType, makeSource, type ComputedFields } from 'contentlayer/source-files'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `notes/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Note],
})

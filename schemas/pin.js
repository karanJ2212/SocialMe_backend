export default {
  name: 'pin',
  type: 'document',
  title: 'Pin',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      name: 'destination',
      type: 'url',
      title: 'Destination',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      type: 'string',
      title: 'UserId',
    },
    {
      name: 'postedBy',
      type: 'postedBy',
      title: 'PosetedBy',
    },
    {
      name: 'save',
      type: 'array',
      of: [{type: 'save'}],
      title: 'Save',
    },
    {
      name: 'comments',
      type: 'array',
      of: [{type: 'save'}],
      title: 'Comments',
    },
  ],
}

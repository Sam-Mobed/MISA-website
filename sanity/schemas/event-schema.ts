const event = {
    name: 'event',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'name_en',
            title: 'Name (en)',
            type: 'string'
        },
        {
            name: 'name_fa',
            title: 'Name (fa)',
            type: 'string'
        },
        {
            name: 'datetime',
            title: 'Date and Time',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'cost',
            title: 'Cost',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'content_en',
            title: 'Content (en)',
            type: 'string'
        },
        {
            name: 'content_fa',
            title: 'Content (fa)',
            type: 'string',
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'links_slug',
            title: 'Links Slug',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'is_there_space_left',
            title: 'Is there space left for reservation?',
            type: 'boolean',
        },
        {
            name: 'is_there_waitlist',
            title: 'Is there a waitlist?',
            type: 'boolean',
        },
        {
            name: 'waitlist_link',
            title: 'Waitlist Link',
            type: 'string',
        },
    ],
};

export default event;
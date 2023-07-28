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
            name: 'name-fa',
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
            type: 'array',
            of: [{ type: "block" }],
        },
        {
            name: 'content_fa',
            title: 'Content (fa)',
            type: 'array',
            of: [{ type: "block" }],
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{type: 'string'}]
        }
    ],
};

export default event;
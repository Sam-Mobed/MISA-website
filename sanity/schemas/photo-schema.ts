const photo = {
    name: 'photo',
    title: 'Photos',
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
            name: 'date_en',
            title: 'Date (en)',
            type: 'string'
        },
        {
            name: 'date_fa',
            title: 'Date (fa)',
            type: 'string'
        },
        {
            name: 'location_en',
            title: 'Location (En)',
            type: 'string'
        },
        {
            name: 'location_fa',
            title: 'Location (Fa)',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
    ],
};

export default photo;
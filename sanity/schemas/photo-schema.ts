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
            name: 'name-fa',
            title: 'Name (fa)',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
        {
            name: 'location',
            title: 'Location',
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
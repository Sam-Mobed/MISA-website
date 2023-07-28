const member = {
    name: 'member',
    title: 'Members',
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
            name: 'degree&major_en',
            title: 'Degree and Major (en)',
            type: 'string'
        },
        {
            name: 'degree&major_fa',
            title: 'Degree and Major (fa)',
            type: 'string'
        },
        {
            name: 'start&finishDates',
            title: 'Start and Finish Dates',
            type: 'string'
        },
        {
            name: 'role_en',
            title: 'Role (en)',
            type: 'string'
        },
        {
            name: 'role_fa',
            title: 'Role (fa)',
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

export default member;
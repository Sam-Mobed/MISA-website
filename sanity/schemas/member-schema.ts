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
            name: 'name_fa',
            title: 'Name (fa)',
            type: 'string'
        },
        {
            name: 'degree_major_en',
            title: 'Degree and Major (en)',
            type: 'string'
        },
        {
            name: 'degree_major_fa',
            title: 'Degree and Major (fa)',
            type: 'string'
        },
        {
            name: 'start_finishDates',
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
            name: 'card_image',
            title: 'Card Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'person_image',
            title: 'Person Image',
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
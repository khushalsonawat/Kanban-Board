import { v4 as uuid } from "uuid";

export const initialData = [
    {
        title: "To Do",
        id: uuid(),
        column: 0,
        tasks: [{
            taskText: "Helpdesk Call AA999",
            columnNumber: 0,
            id: uuid(),
        },
        {
            taskText: "Helpdesk Call BB999",
            columnNumber: 0,
            id: uuid(),
        }
        ]

    },
    {
        title: "Development",
        id: uuid(),
        column: 1,
        tasks: [{
            taskText: "Helpdesk Call CC999",
            columnNumber: 1,
            id: uuid(),
        },
        {
            taskText: "Helpdesk Call DD999",
            columnNumber: 1,
            id: uuid(),
        }
        ]
    },
    {
        title: "Testing",
        id: uuid(),
        column: 2,
        tasks: [{
            taskText: "Helpdesk Call EE999",
            columnNumber: 2,
            id: uuid(),
        }
        ]
    },
    {
        title: "Done",
        id: uuid(),
        column: 3,
        tasks: [{
            taskText: "Helpdesk Call FF999",
            columnNumber: 3,
            id: uuid(),
        },
        {
            taskText: "Helpdesk Call GG999",
            columnNumber: 3,
            id: uuid(),
        }]
    }
]

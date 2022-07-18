import { v4 as uuid } from "uuid";

export const initialData = [
    {
        title: "To Do",
        id: uuid(),
        column: 0,
        tasks: [{
            id: uuid(),
            taskText: "Helpdesk Call AA999",
            columnNumber: 0,
            label: {
                title: "CP",
                color: "#0079bf",
            }
        },
        {
            id: uuid(),
            taskText: "Helpdesk Call BB999",
            columnNumber: 0,
            label: {
                title: "CP",
                color: "#0079bf",
            }
        }
        ]

    },
    {
        title: "Development",
        id: uuid(),
        column: 1,
        tasks: [{
            id: uuid(),
            taskText: "Helpdesk Call CC999",
            columnNumber: 1,
            label: {
                title: "Fault",
                color: "#eb5a46",
            }
        },
        {
            id: uuid(),
            taskText: "Helpdesk Call EE999",
            columnNumber: 2,
            label: {
                title: "CP",
                color: "#0079bf",
            }
        }
        ]
    },
    {
        title: "Testing",
        id: uuid(),
        column: 2,
        tasks: [
            {
                id: uuid(),
                taskText: "Helpdesk Call DD999",
                columnNumber: 1,
                label: {
                    title: "Fault",
                    color: "#eb5a46",
                }
            }
        ]
    },
    {
        title: "Done",
        id: uuid(),
        column: 3,
        tasks: [{
            id: uuid(),
            taskText: "Helpdesk Call GG999",
            columnNumber: 3,
            label: {
                title: "Fault",
                color: "#eb5a46",
            }
        },
        {
            id: uuid(),
            taskText: "Helpdesk Call FF999",
            columnNumber: 3,
            label: {
                title: "CP",
                color: "#0079bf",
            }
        }
        ]
    }
]

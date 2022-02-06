import images from "./images"

const data = {
    user: {
        name: 'Prasun',
        img: images.user
    },
    summary: [
        {
            title: 'Society',
            subtitle: 'Total Society',
            value: '150',
            percent: (150*100/300).toFixed(0)
        },
        {
            title: 'User',
            subtitle: 'Total User',
            value: '22000',
            percent: (22000*100/30000).toFixed(0)
        },
        {
            title: 'Covid',
            subtitle: 'Total Covid Patient',
            value: '2078',
            percent: (2078*100/30000).toFixed(0)
        },
        {
            title: 'Recovered',
            subtitle: 'Total Recovered',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Covid Patient',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [2500, 1200, 1300, 1280, 1100, 2120, 3100, 790, 600, 1120, 2500, 3500]
    }
}



export default data
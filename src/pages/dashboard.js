import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/dashboard-wrapper';
import Box from '../components/box/box';
import SummaryBox from '../components/summary-box/summary-box';
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Dashboard() {

    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="row">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <Box>
                            <RevenueByMonthsChart />
                        </Box>
                    </div>

                </div>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <DoughnutChart />
            </DashboardWrapperRight>
        </DashboardWrapper>
    );
}

export default Dashboard;

const DoughnutChart = () => {
    const data = {
        labels: ['Covid', 'Asthma', 'Diptheria', 'Chickenpox', 'Giardiasis'],
        datasets: [
            {
                label: '',
                data: [25, 24, 25, 25, 23],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                    'rgba(232,211,6,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,255,1)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }
    
        ]
    }
    
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Doughnut Chart',
                color: 'blue',
                font: {
                    size: 34
                },
                padding: {
                    top: 30,
                    bottom: 30
                },
                responsive: true,
                animation: {
                    animateScale: true,
                    color: true
                }
            }
        }
    }
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

const RevenueByMonthsChart = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.orange,
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Cases',
                data: data.revenueByMonths.data
            }
        ]
    }
    return (
        <>
            <div className="title mb">
                Covid Cases by Month
            </div>
            <div>
                <Bar options={chartOptions} width={`100%`} data={chartData} height={`300px`} />
            </div>
        </>
    )
}
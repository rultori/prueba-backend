import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

interface Props {
    products: any[],
}

export const ChartTopSellingProducts: FC<Props> = ({ products }) => {
    const data = {
        labels: products.map((product: any) => product.attributes.title),
        datasets: [
            {
                label: 'Cantidad vendida',
                data: products.map((product: any) => {
                    return product.attributes.qty;
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
        <Bar height="100px" data={data} />
    )
}

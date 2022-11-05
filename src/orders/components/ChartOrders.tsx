import { Container } from '@nextui-org/react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { FC } from 'react';
import { Line } from 'react-chartjs-2'
import { OrderMini } from '../../interfaces';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const optionsQuantity = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Cantidad de productos vendidos en el periodo',
        },
    },
};

export const optionsTotal = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Monto total de ventas en el periodo',
        },
    },
};

interface Props {
    orders: OrderMini[],
}

export const ChartOrders: FC<Props> = ({ orders }) => {
    const dataQuantity = {
        labels: orders.map((order: OrderMini) => 'Orden #' + order.id),
        datasets: [
            {
                label: 'Cantidad productos',
                data: orders.map((order: OrderMini) => {
                    return String(order.attributes.products_count)
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const dataTotal = {
        labels: orders.map((order: OrderMini) => 'Orden #' + order.id),
        datasets: [

            {
                label: 'Monto total',
                data: orders.map((order: OrderMini) => {
                    return order.attributes.total
                }),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <Container display="flex" css={{ flexDirection: 'row' }}>
                <Line height='100px' options={optionsQuantity} data={dataQuantity} />
                <Line height='100px' options={optionsTotal} data={dataTotal} />
            </Container>
        </>
    )
}

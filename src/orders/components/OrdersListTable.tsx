import { Button, Table, Tooltip } from '@nextui-org/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderMini } from '../../interfaces'

interface Props {
    orders: OrderMini[],
    currency: string,
}

export const OrdersListTable: FC<Props> = ({ orders, currency }) => {
    const navigate = useNavigate()

    const viewDetails = (id: number) => {
        navigate(`/orders/${id}`)
    }

    return (
        <Table
            aria-label="Orders list"
            css={{
                height: "auto",
                minWidth: "100%",
            }}
            selectionMode="single"
        >
            <Table.Header>
                <Table.Column>ID</Table.Column>
                <Table.Column>Cantidad de productos</Table.Column>
                <Table.Column>Fecha de creación</Table.Column>
                <Table.Column>Fecha de actualización</Table.Column>
                <Table.Column>Monto total</Table.Column>
                <Table.Column>Moneda</Table.Column>
                <Table.Column>Acciones</Table.Column>
            </Table.Header>
            <Table.Body>
                {
                    orders.map((order: OrderMini) => (
                        <Table.Row key={order.id}>
                            <Table.Cell>{order.id}</Table.Cell>
                            <Table.Cell>{order.attributes.products_count}</Table.Cell>
                            <Table.Cell>{order.attributes.created_date}</Table.Cell>
                            <Table.Cell>{order.attributes.last_update}</Table.Cell>
                            <Table.Cell>{order.attributes.total}</Table.Cell>
                            <Table.Cell>{currency}</Table.Cell>
                            <Table.Cell>
                                <Tooltip content="Ver detalle de la orden">
                                    <Button size="xs" color="secondary" onClick={() => viewDetails(parseInt(order.id))}>Ver detalle</Button>
                                </Tooltip>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

import { Button, Container, Table, Text } from '@nextui-org/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    product: any,
    setShowModal: any
}

export const OrdersPerProductListTable: FC<Props> = ({ product, setShowModal }) => {
    const navigate = useNavigate()

    const handleClick = (e: any) => {
        setShowModal(false)
        navigate(`/orders/${e}`)
    }
    
    return (
        <div style={{ marginTop: 20 }}>
            <Text h3>Órdenes en las que aparece el producto</Text>
            {
                <Table key={product.id}>
                    <Table.Header>
                        <Table.Column align="center">ID Orden</Table.Column>
                        <Table.Column align="center">Cantidad</Table.Column>
                        <Table.Column align="center">Acciones</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            product.attributes.orders.map((order: any) => (
                                <Table.Row key={order.id}>
                                    <Table.Cell><Text weight='bold'>{order.id}</Text></Table.Cell>
                                    <Table.Cell>{order.qty}</Table.Cell>
                                    <Table.Cell css={{ display: 'flex', justifyContent: 'center' }}><Button size="xs" onClick={() => handleClick(order.id)}>Ver detalles</Button></Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            }
        </div>
    )
}

import { Table } from '@nextui-org/react'
import { FC } from 'react'

interface Props {
    response: any
}

export const OrderDetailsTable: FC<Props> = ({ response }) => {
    return (
        <Table
            aria-label="Order details"
            css={{
                height: "auto",
                minWidth: "100%",
            }}
            selectionMode="single"
            striped
        >
            <Table.Header>
                <Table.Column>
                    Propiedad
                </Table.Column>
                <Table.Column>
                    Valor
                </Table.Column>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>ID de Orden</Table.Cell>
                    <Table.Cell>{response!.data.data.id}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>ID de Usuario</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.user_id}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Código de orden</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.order_code}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Calle</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.street_name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Colonia</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.address}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Ciudad</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.city}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Estado</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.state}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Código postal</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.zip_code}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Fecha de creacion</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.create_date}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Fecha de actualizacion</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.last_update}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Estado de pago</Table.Cell>
                    <Table.Cell>{(response!.data.data.attributes.paid === '1') ? 'Pagado' : 'No pagado'}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Teléfono</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.phone}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Cantidad de productos</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.products_count}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Subtotal</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.subtotal}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Descuento</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.discount}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Total</Table.Cell>
                    <Table.Cell>{response!.data.data.attributes.total}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

import { FC } from 'react'
import { Button, Table, Text } from '@nextui-org/react'

interface Props {
    products: any[],
    setActiveProduct: any,
    setShowModal: any,
}

export const TopSellingProductsListTable: FC<Props> = ({ products, setActiveProduct, setShowModal }) => {

    const handleClick = (e: any) => {
        setShowModal(true)
        setActiveProduct(e)
    }
    return (
        <Table
            aria-label="Example table with static content"
            css={{
                height: "auto",
                minWidth: "100%",
            }}
        >
            <Table.Header>
                <Table.Column>ID</Table.Column>
                <Table.Column>Nombre del producto</Table.Column>
                <Table.Column>Cantidad vendida</Table.Column>
                <Table.Column>Ordenes</Table.Column>
            </Table.Header>
            <Table.Body>
                {
                    products.map((product: any) => (
                        <Table.Row key={product.id}>
                            <Table.Cell><Text weight='bold'>{product.id}</Text></Table.Cell>
                            <Table.Cell>{product.attributes.title}</Table.Cell>
                            <Table.Cell>{product.attributes.qty}</Table.Cell>
                            <Table.Cell>
                                <Button size="sm" color="secondary" onClick={() => handleClick(product)}>Ver ordenes</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

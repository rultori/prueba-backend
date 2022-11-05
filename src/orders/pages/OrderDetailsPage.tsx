import { Container, Loading, Spacer, Table } from "@nextui-org/react";
import { useParams } from "react-router-dom"
import { useAxios } from "../../hooks";
import { OrderDetailsTable } from "../components";

export const OrderDetailsPage = () => {
    let { id } = useParams()

    const { response, loading, error, sendData } = useAxios({
        method: 'GET',
        url: `orders/${id}`
    });

    return (
        <div>
            {
                loading ? <Container display="flex" css={{ justifyContent: 'center', alignContent: 'center', minHeight: '60vh' }}><Loading /></Container> : (
                    <>
                        {
                            error ? <h1>Hubo un error inesperado, vuelve a intentarlo</h1> : (
                                <div style={{ marginTop: '20px' }}>
                                    <OrderDetailsTable response={response} />
                                    <Spacer y={2}/>
                                    <Table>
                                        <Table.Header>
                                            <Table.Column>
                                                Productos
                                            </Table.Column>
                                        </Table.Header>
                                        <Table.Body>
                                            {
                                                response?.data?.data.relationships.products.data.map((product: any) => (
                                                    <Table.Row key={product.id}>
                                                        <Table.Cell>
                                                            {product.id}
                                                        </Table.Cell>
                                                    </Table.Row>
                                                ))
                                            }
                                        </Table.Body>
                                    </Table>
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

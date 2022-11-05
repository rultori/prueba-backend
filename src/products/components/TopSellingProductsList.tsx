import { Button, Container, FormElement, Grid, Loading, Modal, Text } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';
import { useAxios } from '../../hooks';
import { ChartTopSellingProducts, OrdersPerProductListTable, TopSellingProductsListTable } from '.';
import { DateRangeFilter } from '../../ui/components';

interface Params {
    start_date: string | null,
    end_date: string | null,
    sort: string | null,
}

export const TopSellingProductsList = () => {
    const [params, setParams] = useState({ start_date: null, end_date: null, sort: null } as Params)
    const [activeProduct, setActiveProduct] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const { response, loading, error, sendData } = useAxios({
        method: 'GET',
        url: `products/topselling`,
        params: params,
    });

    const handleStartDateChange = (e: ChangeEvent<FormElement>) => setParams({ ...params, start_date: e.target.value ? e.target.value : null })
    const handleEndDateChange = (e: ChangeEvent<FormElement>) => setParams({ ...params, end_date: e.target.value ? e.target.value : null })
    const handleApply = () => sendData()


    return (
        <Container>
            <Text h1>Los {(response && response?.data.data.length) || 5} productos más vendidos</Text>
            <Grid.Container gap={2}>
                <DateRangeFilter
                    startDate={params.start_date}
                    endDate={params.end_date}
                    xs={6}
                    handleEndDateChange={handleEndDateChange}
                    handleStartDateChange={handleStartDateChange}
                />
                <Grid xs={3} css={{ display: 'flex', alignItems: 'end' }}>
                    <Button onClick={handleApply}>Aplicar</Button>
                </Grid>
            </Grid.Container>
            {
                loading ? <Container display="flex" css={{ justifyContent: 'center', alignContent: 'center', minHeight: '60vh' }}><Loading /></Container> : (
                    <>
                        {
                            error ? <Text>Ocurrió un error inesperado, vuelve a intentar</Text> : (
                                <>
                                    <Modal width="800px" open={showModal} onClose={() => setShowModal(false)}>
                                        {
                                            activeProduct && <OrdersPerProductListTable product={activeProduct} setShowModal={setShowModal} />
                                        }
                                    </Modal>
                                    <ChartTopSellingProducts products={response!.data.data} />
                                    <TopSellingProductsListTable
                                        products={response!.data.data}
                                        setActiveProduct={setActiveProduct}
                                        setShowModal={setShowModal}
                                    />
                                </>
                            )
                        }
                    </>
                )
            }
        </Container>
    )
}

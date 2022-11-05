import { Button, Container, FormElement, Grid, Loading, Text } from '@nextui-org/react'
import { ChangeEvent, FC, useState } from 'react'
import { OrdersListTable } from '.'
import { useAxios } from '../../hooks'
import { CurrencyRadioFilter, DateRangeFilter } from '../../ui/components'
import { numberToCurrency } from '../../utils'
import { ChartOrders } from './ChartOrders'

interface Params {
    start_date: string | null,
    end_date: string | null,
    currency: string,
}

export const OrdersList: FC = () => {
    const [params, setParams] = useState({ start_date: null, end_date: null, currency: 'MXN' } as Params)

    const { response, loading, error, sendData } = useAxios({
        method: 'GET',
        url: `orders/list_record`,
        params: params,
    });


    const handleStartDateChange = (e: ChangeEvent<FormElement>) => {
        const { value } = e.target
        setParams({ ...params, start_date: value ? value : null })
    }

    const handleEndDateChange = (e: ChangeEvent<FormElement>) => {
        const { value } = e.target
        setParams({ ...params, end_date: value ? value : null })
    }

    const handleCurrencyChange = (e: string) => setParams({ ...params, currency: e })

    const handleApply = () => {
        sendData()
    }

    return (
        <div>
            <Grid.Container gap={2}>
                <DateRangeFilter
                    startDate={params.start_date}
                    endDate={params.end_date}
                    xs={12}
                    sm={4}
                    handleEndDateChange={handleEndDateChange}
                    handleStartDateChange={handleStartDateChange}
                />
                <CurrencyRadioFilter xs={12} sm={3} handleCurrencyChange={handleCurrencyChange} />
                <Grid xs={12} sm={3} css={{ display: 'flex', alignItems: 'end' }}>
                    <Button onClick={handleApply} css={{ '@xs': { width: '100%' }, '@sm': { width: 'fit-content' } }}>Aplicar</Button>
                </Grid>
            </Grid.Container>
            {
                loading ?
                    (<Container display="flex" css={{ justifyContent: 'center', alignContent: 'center', minHeight: '60vh' }}><Loading /></Container>)
                    :
                    (
                        <>
                            {
                                error ? (<p>Error inesperado, vuelva a intentar</p>) : (
                                    response!.data.data.length > 0 ? (
                                        <>
                                            <Container>
                                                <ChartOrders orders={response!.data.data} />
                                            </Container>
                                            <Text h2>Total del periodo: {numberToCurrency(response!.data.meta.total_amount, response!.data.meta.currency)}</Text>
                                            <OrdersListTable orders={response!.data.data} currency={response!.data.meta.currency} />
                                        </>
                                    ) : (
                                        <p>No hay ordenes</p>
                                    )
                                )
                            }
                        </>
                    )
            }
        </div>
    )
}

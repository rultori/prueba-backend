import { Grid, GridProps, Radio } from '@nextui-org/react'
import { FC } from 'react'

interface Props extends GridProps {
    handleCurrencyChange: (e: string) => void,
}

export const CurrencyRadioFilter: FC<Props> = ({ handleCurrencyChange, xs, sm, md }) => {
    return (
        <Grid xs={xs} sm={sm} md={md} css={{ alignContent: 'end' }}>
            <Radio.Group orientation="horizontal" label="Moneda" defaultValue="MXN" onChange={handleCurrencyChange} >
                <Radio value="MXN" color="primary">
                    MXN
                </Radio>
                <Radio value="USD" color="primary">
                    USD
                </Radio>
                <Radio value="EUR" color="primary">
                    EUR
                </Radio>
            </Radio.Group>
        </Grid>
    )
}

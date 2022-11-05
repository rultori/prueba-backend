import { Grid, Radio } from '@nextui-org/react'
import { FC } from 'react'

interface Props {
    handleCurrencyChange: (e: string) => void,
    xs?: number,
}

export const CurrencyRadioFilter: FC<Props> = ({ handleCurrencyChange, xs }) => {
    return (
        <Grid xs={xs} css={{alignContent: 'end'}}>
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

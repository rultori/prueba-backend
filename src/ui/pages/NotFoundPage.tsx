import { Text } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
    return (
        <>
            <Text h1 css={{ textAlign: 'center' }}>404</Text>
            <Text h2 css={{ textAlign: 'center' }}>Parece que la página a la que intentas acceder no existe</Text>
            <Link to="/" style={{ display: 'block', textAlign: 'center' }}>Ir a la página de inicio</Link>
        </>
    )
}

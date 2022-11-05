import { Navbar as NUINavbar, Text } from '@nextui-org/react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <NUINavbar variant="sticky" css={{ zIndex: 999 }}>
            <NUINavbar.Brand>
                <NavLink to="/" style={{ display: 'flex' }}>
                    <Text css={{
                        fontWeight: 800,
                        fontSize: 20,
                        marginRight: 5,
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}>Mi tienda</Text>
                    <Text css={{
                        fontWeight: 800,
                        fontSize: 20,
                        color: '$gray600',
                    }}>| Admin</Text>
                </NavLink>
            </NUINavbar.Brand>
            <NUINavbar.Content>
                <Link to="/products/topselling">
                    <Text h5>Productos más vendidos</Text>
                </Link>
                <Link to="/orders">
                    <Text h5>Ordenes</Text>
                </Link>
            </NUINavbar.Content>
        </NUINavbar >
    )
}

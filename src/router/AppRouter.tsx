
import { Container, Spacer } from '@nextui-org/react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { OrderDetailsPage, OrdersPage } from '../orders/pages'
import { TopSellingProductsPage } from '../products/pages'
import { Navbar } from '../ui/components'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            {/* <Sidebar /> */}
            <Container>
                <Routes>
                    <Route path="/" element={<Navigate to="/products" />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="orders/:id" element={<OrderDetailsPage />} />
                    <Route path="products" element={<Navigate to="/products/topselling" />} />
                    <Route path="products/topselling" element={<TopSellingProductsPage />} />
                </Routes>
            </Container>
            <Spacer y={2} />
        </>
    )
}

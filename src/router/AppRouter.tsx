
import { Container, Spacer } from '@nextui-org/react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { OrderDetailsPage, OrdersPage } from '../orders/pages'
import { TopSellingProductsPage } from '../products/pages'
import { Navbar } from '../ui/components'
import { NotFoundPage } from '../ui/pages'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/" element={<Navigate to="/products" />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="orders/:id" element={<OrderDetailsPage />} />
                    <Route path="products" element={<Navigate to="/products/topselling" />} />
                    <Route path="products/topselling" element={<TopSellingProductsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Container>
            <Spacer y={2} />
        </>
    )
}

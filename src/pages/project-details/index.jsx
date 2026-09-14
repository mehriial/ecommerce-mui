import Header from "@/components/app/header/Header.jsx";
import Footer from "@/components/app/footer/Footer.jsx";
import Breadcrumb from "@/components/app/Products/breadcrumb/Breadcrumb.jsx";
import NotificationBar from "@/components/app/notification-bar/NotificationBar.jsx";
import {Box, Container} from "@mui/material";
import {ProductFilter} from "@/components/app/Products/product-filter/ProductFilter.jsx";
import {ProductList} from "@/components/app/Products/product-list/ProductList.jsx";

function ProductDetail() {

    return (
        <>
            <NotificationBar/>
            <Header/>
            <Breadcrumb/>

            <Container className='container'>
                <Box sx={{
                    maxWidth: "1200px",
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: 5,
                    margin: '40px auto',
                }}>

                    <ProductFilter/>
                    <ProductList/>
                </Box>

            </Container>

            <Footer/>

        </>
    )
}

export default ProductDetail
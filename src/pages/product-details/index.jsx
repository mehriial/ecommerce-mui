import {
    Box,
    Container,
} from "@mui/material";
import Header from "@/components/app/header/Header.jsx";
import Footer from "@/components/app/footer/Footer.jsx";
import NotificationBar from "@/components/app/notification-bar/NotificationBar.jsx";
import SimilarProduct from "@/components/app/Product-detail/similar-product/SimilarProduct.jsx";
import {Detail} from "@/components/app/Product-detail/detail/Detail.jsx";
import ProductDetailTabs from "@/components/app/Product-detail/product-detail-tabs/ProductDetailTabs.jsx";
import {useSelector} from "react-redux";


function ProductDetail() {
    const {
        selectedProduct: product,
    } = useSelector((state) => state.products);

    return (
        <>
            <NotificationBar/>

            <Header/>

            <Container className="container">
                <Box
                    sx={{
                        maxWidth: "1200px",
                        mx: "auto",
                        py: {
                            xs: 4,
                            md: 7,
                        },
                        px: {
                            xs: 2,
                            md: 7,
                        },
                    }}
                >
                    <Detail product={product} />
                    <ProductDetailTabs product={product}/>

                    <SimilarProduct category={product?.category}/>

                </Box>
            </Container>

            <Footer/>
        </>
    );
}

export default ProductDetail;
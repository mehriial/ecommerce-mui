import {Box, Grid} from "@mui/material";
import {products} from "@/data/mockData.jsx";
import Container from "@mui/material/Container";
import ProductCard from "@/components/app/product/ProductCard.jsx";
import Typography from "@mui/material/Typography";


export default function BestSell() {
    return (
        <Container className='container'>
            <Box className='container-box'>
                <Typography
                    sx={{
                        fontSize: 12,
                        color: "var(--neutral-b-300)",
                        textAlign: 'center'
                    }}>
                    Shop Now
                </Typography>
                <Typography
                    sx={{
                        fontSize: 24,
                        color: "var(--neutral-b-900)",
                        textAlign: 'center',
                        fontWeight: 700,
                        my: 1
                    }}>
                    Best Selling
                </Typography>
                <Grid container spacing={4}>
                    {products.slice(0, 4).map((item, index) => (
                        <ProductCard
                            key={index}
                            index={index}
                            item={item}
                        />
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
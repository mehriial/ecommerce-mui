import {Box, Grid} from "@mui/material";
import {features} from "@/data/mockData.jsx";
import FeatureCard from "@/components/app/features/FeatureCard.jsx";
import Container from "@mui/material/Container";


export default function Features() {
    return (
        <Container className='container'>
            <Box className='container-box'>
                <Grid container spacing={4}>
                    {features.map((item, index) => (
                        <FeatureCard index={index} item={item}/>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
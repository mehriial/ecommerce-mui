import NotificationBar from "@/components/app/notification-bar/NotificationBar.jsx";
import Header from "@/components/app/header/Header.jsx";
import Hero from "@/components/app/hero/Hero.jsx";
import Features from "@/components/app/features/Features.jsx";
import BestSell from "@/components/app/best-sell/BestSell.jsx";
import Browsing from "@/components/app/browsing/Browsing.jsx";
import HomeProduct from "@/components/app/home-product/HomeProduct.jsx";
import Footer from "@/components/app/footer/Footer.jsx";

function Home() {

    return (
        <>
            <NotificationBar/>
            <Header/>
            <Hero/>
            <Features/>
            <BestSell/>
            <Browsing/>
            <HomeProduct/>
            <Footer/>

        </>
    )
}

export default Home
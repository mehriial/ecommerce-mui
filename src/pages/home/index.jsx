import Header from "@/components/app/header/Header.jsx";
import Footer from "@/components/app/footer/Footer.jsx";
import NotificationBar from "@/components/app/notification-bar/NotificationBar.jsx";
import Hero from "@/components/app/Home/hero/Hero.jsx";
import BestSell from "@/components/app/Home/best-sell/BestSell.jsx";
import Features from "@/components/app/Home/features/Features.jsx";
import Browsing from "@/components/app/Home/browsing/Browsing.jsx";
import HomeProduct from "@/components/app/Home/home-product/HomeProduct.jsx";

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
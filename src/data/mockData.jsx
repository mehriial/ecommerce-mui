import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import blackShirt from "@/assets/images/bs-1.png";
import brownShirt from "@/assets/images/bs-2.png";
import whiteShirt from "@/assets/images/bs-3.png";
import blackShirt2 from "@/assets/images/bs-4.png";
import p1 from "@/assets/images/p-1.png";
import p2 from "@/assets/images/p-2.png";
import p3 from "@/assets/images/p-3.png";
import p4 from "@/assets/images/p-4.png";


export const features = [
    {
        icon: <LocalShippingOutlinedIcon />,
        title: "Free Shipping",
        description:
            "Upgrade Your Style Today And Get FREE Shipping On All Orders! Don't Miss Out.",
    },
    {
        icon: <WorkspacePremiumOutlinedIcon />,
        title: "Satisfaction Guarantee",
        description:
            "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
    },
    {
        icon: <SecurityOutlinedIcon />,
        title: "Secure Payment",
        description:
            "Your security is our priority. Your payments are secure with us.",
    },
];


export const products = [
    {
        title: "Classic Monochrome Tees",
        image: blackShirt,
        stock: "IN STOCK",
        price: "35.00",
        type: "latest"
    },
    {
        title: "Monochromatic Wardrobe",
        image: brownShirt,
        stock: "IN STOCK",
        price: "27.00",
        type: "latest"
    },
    {
        title: "Essential Neutrals",
        image: whiteShirt,
        stock: "IN STOCK",
        price: "22.00",
        type: "latest"
    },
    {
        title: "UNTRACKET Black",
        image: blackShirt2,
        stock: "IN STOCK",
        price: "43.00",
        type: "latest"
    },
    {
        title: "Elegant Ebony Sweatshirts",
        image: p1,
        stock: "IN STOCK",
        price: "35.00",
        type: "featured"
    },
    {
        title: "Sleek and Cozy Black",
        image: p2,
        stock: "IN STOCK",
        price: "57.00",
        type: "featured"
    },
    {
        title: "Raw Black Tees",
        image: p3,
        stock: "IN STOCK",
        price: "19.00",
        type: "featured"
    },
    {
        title: "MOCKUP Black",
        image: p4,
        stock: "IN STOCK",
        price: "30.00",
        type: "featured"
    },
];

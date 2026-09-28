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
        icon: <LocalShippingOutlinedIcon/>,
        title: "Free Shipping",
        description:
            "Upgrade Your Style Today And Get FREE Shipping On All Orders! Don't Miss Out.",
    },
    {
        icon: <WorkspacePremiumOutlinedIcon/>,
        title: "Satisfaction Guarantee",
        description:
            "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
    },
    {
        icon: <SecurityOutlinedIcon/>,
        title: "Secure Payment",
        description:
            "Your security is our priority. Your payments are secure with us.",
    },
];


export const products = [
    {
        title: "Classic Monochrome Tees",
        image: blackShirt,
        availabilityStatus: "IN STOCK",
        price: "35.00",
        type: "latest"
    },
    {
        title: "Monochromatic Wardrobe",
        image: brownShirt,
        availabilityStatus: "IN STOCK",
        price: "27.00",
        type: "latest"
    },
    {
        title: "Essential Neutrals",
        image: whiteShirt,
        availabilityStatus: "IN STOCK",
        price: "22.00",
        type: "latest"
    },
    {
        title: "UNTRACKET Black",
        image: blackShirt2,
        availabilityStatus: "IN STOCK",
        price: "43.00",
        type: "latest"
    },
    {
        title: "Elegant Ebony Sweatshirts",
        image: p1,
        availabilityStatus: "IN STOCK",
        price: "35.00",
        type: "featured"
    },
    {
        title: "Sleek and Cozy Black",
        image: p2,
        availabilityStatus: "IN STOCK",
        price: "57.00",
        type: "featured"
    },
    {
        title: "Raw Black Tees",
        image: p3,
        availabilityStatus: "IN STOCK",
        price: "19.00",
        type: "featured"
    },
    {
        title: "MOCKUP Black",
        image: p4,
        availabilityStatus: "IN STOCK",
        price: "30.00",
        type: "featured"
    },
];


export const categories = [
    {
        id: 1,
        name: "Electronics",
    },
    {
        id: 2,
        name: "Clothing",
    },
    {
        id: 3,
        name: "Shoes",
    },
    {
        id: 4,
        name: "Accessories",
    },
    {
        id: 5,
        name: "Home & Garden",
    },
    {
        id: 6,
        name: "Sports",
    },
];

export const colors = [
    {name: "Primary Blue", value: "var(--semantic-bl-400)"},
    {name: "Blue", value: "var(--semantic-bl-900)"},
    {name: "Yellow", value: "var(--semantic-y-400)"},
    {name: "Green", value: "var(--semantic-g-300)"},
];

export const sizes = [
    {name: "S", value: "S"},
    {name: "M", value: "M"},
    {name: "L", value: "L"},
    {name: "XL", value: "XL"},
    {name: "XXL", value: "XXL"},
];
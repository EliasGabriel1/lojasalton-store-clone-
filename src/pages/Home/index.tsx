import React, { useState, useEffect } from "react";
import { VitrineProps } from "../../Components/Vitrine";
import ShelfCustom from "../../Components/Shelf";
import "./home.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import BannerHome from "../../Components/BannerHome";
import CarrosselBanner from "../../Components/CarrosselBanner";
import BannerFinal from "../../Components/BannerFinal";
import Stories from "../../Components/Stories";
import ContainerBannerMid from "../../Components/ContainerBannerMid";

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
    const [data, setData] = useState<VitrineProps["data"] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const [vitrineDois, setVitrineDois] = useState<VitrineProps["data"] | null>(null);
    const [loadingVitrineDois, setLoadingVitrineDois] = useState(true);
    const [errorVitrineDois, setErrorVitrineDois] = useState<any>(null);
    
    useEffect(() => {
        fetch("./api/Category.json", {
            headers: {
                Accept: "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then((data) => {
            setData(data);
        }).catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });

        fetch("./api/Vitrine.json", {
            headers: {
                Accept: "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then((vitrineData) => {
            setVitrineDois(vitrineData);
        }).catch((errorVitrineData) => {
            console.error("Error fetching data: ", errorVitrineData);
            setErrorVitrineDois(errorVitrineData);
        }).finally(() => {
            setLoadingVitrineDois(false);
        });
    }, []);

    const CarroselMiniBanners= [
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardweargraduated-link-necklace-38086766_1025207_ED.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "alt": "",
            "text": '',
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-link-earrings-68533651_1015073_ED.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "link": "",
            "text": '',
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearfreshwater-pearl-ring-in-sterling-silver-64048457_1004020_ED_M.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "link": "",
            "text": '',
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearpearl-bracelet-67063767_1003936_ED.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "link": "",
            "text": '',
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearpearl-bracelet-67063767_1003936_ED.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "link": "",
            "text": '',
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearlarge-link-earrings-68533651_1015073_ED.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "link": "",
            "text": '',
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearfreshwater-pearl-ring-in-sterling-silver-64048457_1004020_ED_M.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "link": "",
            "text": '',
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-hardwearpearl-bracelet-67063767_1003936_ED.jpg?&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
            "link": "",
            "text": '',
        }
    ]

    const MidBanners= [
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/QuickLink-HP-50-50-Product-StudEarrings-Desktop?$tile$&wid=1088&hei=1360&fmt=webp",
            "link": "https://www.tiffany.com/gifts/shop/graduation-gifts/",
            "linkText": "Shop Now",
            "text": 'Gifts for Graduates',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/T-HP_50-50-opt6-Desktop?$tile$&wid=1088&hei=1360&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "Shop Now",
            "text": 'How Do You Tiffany T?',
            "brandImageUrl": null,
        }
    ]

    const ShopbyCategory= [
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/Necklace_op3?$tile$&&fmt=webp",
            "link": "https://www.tiffany.com/gifts/shop/graduation-gifts/",
            "linkText": "",
            "text": 'Gifts for Graduates',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/Earrings?$tile$&&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "",
            "text": 'Earrings',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/Rings?$tile$&&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "",
            "text": 'Rings',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/Bracelet?$tile$&&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "",
            "text": 'Bracelets',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/EngagementRings?$tile$&&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "",
            "text": 'Engagement Rings',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://media.tiffany.com/is/image/tiffanydm/HomeDecor?$tile$&&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "",
            "text": 'Home Decor',
            "brandImageUrl": null,
        }
    ]

    const StoriesData= [
        {
            "image": "true",
            "href": "https://media.tiffany.com/is/image/tiffanydm/BeyonceTour-HP-Stories?$tile$&wid=736&hei=920",
            "link": "https://www.tiffany.com/stories/beyonce-renaissance-world-tour-jewelry/",
            "linkText": "Learn More",
            "title": "Beyoncé Tours in Tiffany & Co.",
            "description": 'The House is the official jeweler for the RENAISSANCE WORLD TOUR.',
        },
        {
            "image": "true",
            "href": "https://media.tiffany.com/is/image/tiffanydm/LOCK-HP-WhatIsNew-Desktop-1?$tile$&wid=736&hei=920&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "Explore the Collection ",
            "title": "Tiffany Lock",
            "description": 'No rules. All welcome.',
        },
        {
            "image": "true",
            "href": "https://media.tiffany.com/is/image/tiffanydm/T-HP-WhatIsNew-Desktop-JIMIN?$tile$&wid=736&hei=920&fmt=webp",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "Learn More",
            "title": "This Is Tiffany T",
            "description": 'Our favorite letter, everyone’s favorite collection. ',
        }
    ]

    const TiffanyExperience= [
        {
            "href": "https://i.postimg.cc/15Cnsp4C/carta.jpg",
            "link": "https://www.tiffany.com/faq/#shipping-returns-faq/",
            "linkText": "Learn More",
            "description": "We offer complimentary shipping and returns on all Tiffany orders.",
            "text": 'Complimentary Shipping & Returns',
            "brandImageUrl": null,
        },
        {
            "href": "https://i.postimg.cc/HkrJxVyp/sino.jpg",
            "link": "https://www.tiffany.com/customer-service/",
            "linkText": "Contact Us",
            "description": "Our client care experts are always here to help. ",
            "text": 'Tiffany At Your Service ',
            "brandImageUrl": null,
        },
        {
            "href": "https://i.postimg.cc/YS7XkKvz/calendario.jpg",
            "link": "https://www.tiffany.com/jewelry/shop/tiffany-t/",
            "linkText": "Book Now",
            "description": "We’re happy to help with in-store or virtual appointments.",
            "text": 'Book an Appointment',
            "brandImageUrl": null,
        },
        {
            "href": "https://i.postimg.cc/50Vjngk0/presente.jpg",
            "link": "https://customer.jrni.com/?client=tiffany",
            "linkText": "Explore All Gifts",
            "description": "Your Tiffany purchase comes wrapped in our Blue Box packaging.",
            "text": 'The Iconic Blue Box',
            "brandImageUrl": null,
        }
    ]

    const loveyourWay={
        "imagedesktop": "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Desktop?$tile$&wid=2992&fmt=webp",
        "imagemobile": "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Mobile?$tile$&wid=720&fmt=webp",
    }

    const fromthesource={
        "imagedesktop": "https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Desktop2?$tile$&wid=2992&fmt=webp",
        "imagemobile": "https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Mobile?$tile$&wid=720&fmt=webp",
    }

    return (
        <>
            <Header data={data} loading={loading} error={error} />
            <BannerHome/>
            <CarrosselBanner data={CarroselMiniBanners} buttonClassName="shop-now" buttonText="Shop Now" buttonHref="/shop-now" quantidadeItemMobile={2} quantidadeItem={4} />
            <CarrosselBanner icon={true} className="MidBanners" data={MidBanners} quantidadeItemMobile={1} quantidadeItem={4} />
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <CarrosselBanner className="ShopbyCategory" data={ShopbyCategory} text="Shop by Category" description="Brilliant design and unparalleled craftsmanship." quantidadeItemMobile={2} quantidadeItem={6} />
            <ContainerBannerMid />
            <Stories icon={true} className="Stories" title="Stories" data={StoriesData} />
            <BannerFinal icon={true} flexDirection="flex-end" url={loveyourWay} className="loveyourWay" title="Love Your Way" description="You’ll know who it’s for. You’ll know when it’s time. You’ll just know." textLink="Explore Love & Engagement" Link="https://www.tiffany.com/engagement/" />
            <BannerFinal icon={true} flexDirection="flex-start" url={fromthesource} className="fromthesource" title="From the Source" description="Handcrafting the world’s best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources." textLink="Follow Your Diamond’s Journey" Link="https://www.tiffany.com/engagement/diamond-provenance/" />
            <ShelfCustom data={vitrineDois} error={errorVitrineDois} loading={loadingVitrineDois} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <CarrosselBanner icon={true} className="TiffanyExperience" data={TiffanyExperience} text="The Tiffany Experience" quantidadeItemMobile={1} quantidadeItem={4} />
            <Footer />
        </>
    );
};

export default Home;

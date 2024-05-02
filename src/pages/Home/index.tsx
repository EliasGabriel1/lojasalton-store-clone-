import React, { useState, useEffect } from "react";
import { VitrineProps } from "../../Components/Vitrine";
import ShelfCustom from "../../Components/Shelf";
import "./home.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import BannerHome from "../../Components/BannerHome";
import CarrosselBanner from "../../Components/CarrosselBanner";
import BannerFinal from "../../Components/BannerFinal";

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

    const CarroselMiniBanners = [
        {
            "productId": "4378",
            "href": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/46ad2f71-ef2c-4aac-ac61-5e00d37c9672___a046d66185aabf249bbe8f815fa22d3e.png",
            "link": "/busca",
            "alt": "espumantes",
            "linkText": "espumantes",
        },
        {
            "productId": "4378",
            "href": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/3692e6c9-f797-4f00-ba86-b625c7933c36___670cb454ab1429e6d115a600c3fced66.png",
            "link": "/busca",
            "alt": "vinhos",
            "linkText": "vinhos",
        }
    ]

    const ShopbyCategory = [
        {
            "productId": "4378",
            "href": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/628ca3a5-e86d-4001-94f4-b5331042cbb3___d590b4195d28c1e585c1d72812365a10.png",
            "link": "/busca",
            "linkText": "",
            "text": 'Casamentos',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/c3b5ef56-4fbd-400c-add7-c41294144c98___1a058e29e0944c1e91c1a0b403e29238.png",
            "link": "/busca",
            "linkText": "",
            "text": 'Churrascos',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/9732b22d-9439-48df-be96-829ea137b9eb___164d0b6a9b9a114f378d9c7dbac4d45f.png",
            "link": "/busca",
            "linkText": "",
            "text": 'Happy Hour',
            "brandImageUrl": null,
        },
        {
            "productId": "4378",
            "href": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/9cba58dd-5510-45b6-9a59-a3a065fde2c9___916a6f5ad697ae74559a48fc6addb776.png",
            "link": "/busca",
            "linkText": "",
            "text": 'jantar a dois',
            "brandImageUrl": null,
        }
    ]

    const loveyourWay = {
        "imagedesktop": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/df10cf92-64dc-4e0b-a09c-bef3382e15e9___6afc518a01d6bc96ba7ae3f239d38d58.png",
        "imagemobile": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/df10cf92-64dc-4e0b-a09c-bef3382e15e9___6afc518a01d6bc96ba7ae3f239d38d58.png",
    }

    const fromthesource = {
        "imagedesktop": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/47ace8a0-e94f-4474-b4ff-f3fcc964add1___1f0fbf787d1eaeeb7e15852bd6288f40.png",
        "imagemobile": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/47ace8a0-e94f-4474-b4ff-f3fcc964add1___1f0fbf787d1eaeeb7e15852bd6288f40.png",
    }

    return (
        <>
            <Header data={data} loading={loading} error={error} />
            <BannerHome />
            <main>
                <CarrosselBanner data={CarroselMiniBanners} buttonClassName="" buttonText="" buttonHref="" quantidadeItemMobile={2} quantidadeItem={4} />
                <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
                <CarrosselBanner className="ShopbyCategory" data={ShopbyCategory} text="O rótulo ideal para cada momento" description="Selecionamos rótulos versáteis que combinam perfeitamente com ocasiões especiais." quantidadeItemMobile={2} quantidadeItem={6} />
                <BannerFinal icon={true} flexDirection="flex-end" url={loveyourWay} className="loveyourWay" title="" description="" textLink="" Link="/busca" />
                <ShelfCustom data={vitrineDois} error={errorVitrineDois} loading={loadingVitrineDois} text="" quantidadeItemMobile={2} quantidadeItem={4} />
                <BannerFinal icon={true} flexDirection="flex-start" url={fromthesource} className="fromthesource" title="" description="" textLink="" Link="/busca" />
                <ShelfCustom data={vitrineDois} error={errorVitrineDois} loading={loadingVitrineDois} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            </main>
            <Footer />
        </>
    );
};

export default Home;

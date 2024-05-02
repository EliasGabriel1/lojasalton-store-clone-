import { useEffect, useState } from "react";
import "./index.css";
import { VitrineProps } from "../../Components/Vitrine";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ShelfCustom from "../../Components/Shelf";
import { useNavigate } from "react-router-dom";
import Filter from "../../Components/Filter";
import BannerFinal from "../../Components/BannerFinal";

function Busca() {
    const [data, setData] = useState<VitrineProps["data"] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        fetch("./api/Busca.json", {
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
    }, []);


    const navigate = useNavigate();

    const voltarhome = () => {
        navigate("/");
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const loveyourWay = {
        "imagedesktop": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/df10cf92-64dc-4e0b-a09c-bef3382e15e9___6afc518a01d6bc96ba7ae3f239d38d58.png",
        "imagemobile": "https://lojasalton.vtexassets.com/assets/vtex.file-manager-graphql/images/df10cf92-64dc-4e0b-a09c-bef3382e15e9___6afc518a01d6bc96ba7ae3f239d38d58.png",
    }

    return (
        <div className="page-Busca">
            <Header data={data} loading={loading} error={error} />
            <main>
                <div className="container">
                    <BannerFinal icon={true} flexDirection="flex-end" url={loveyourWay} className="loveyourWay" title="" description="" textLink="" Link="/busca" />
                    <div className="container container-breadcrumb">
                        <button className="breadCrumb" onClick={() => voltarhome()}>Home / Busca</button>
                    </div>
                    <div className="content-busca">
                        <Filter />
                        <div className="content-busca__result">
                            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={3} />
                            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={3} />
                            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={3} />
                            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={3} />
                            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={3} />
                            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={3} />
                        </div>
                    </div>
                    <div className="d-flex justify-center backToTopButtonContainer backToTopButtonActive">
                        <button onClick={handleScrollToTop} className="button" type="button">
                            <div className="button__label flex items-center justify-center" style={{ paddingTop: '0.25em', paddingBottom: '0.32em' }}>Voltar para o topo</div>
                        </button>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nemo, odit eaque aliquid, expedita facilis doloremque dignissimos voluptas, consequuntur asperiores doloribus iure vero repellendus quaerat incidunt qui officia molestiae. Mollitia?</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Busca;
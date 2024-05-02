import { useEffect, useState } from "react";
import "./index.css";
import { VitrineProps } from "../../Components/Vitrine";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ShelfCustom from "../../Components/Shelf";
import { useNavigate } from "react-router-dom";
import BannerCategory from "../../Components/BannerCategory";

function Category() {
    const [data, setData] = useState<VitrineProps["data"] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

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

    return (
        <div className="page-category">
            <Header data={data} loading={loading} error={error} />
            <BannerCategory />
            <div className="container container-breadcrumb">
                <button className="breadCrumb" onClick={() => voltarhome()}>Home / Category</button>
            </div>
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <div className="d-flex justify-center backToTopButtonContainer backToTopButtonActive">
                <button onClick={handleScrollToTop} className="button" type="button">
                    <div className="button__label flex items-center justify-center" style={{ paddingTop: '0.25em', paddingBottom: '0.32em' }}>Voltar para o topo</div>
                </button>
            </div>
            <BannerCategory />
            <Footer />
        </div>
    )
}

export default Category;
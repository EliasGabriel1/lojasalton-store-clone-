import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { VitrineProps } from "../../Components/Vitrine";
import Loading from "../../Components/Loading";
import Description from "../../Components/productDescription";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "./product.css";
import { useNavigate } from "react-router-dom";
import FavoriteLink from "../../Components/FavoriteLink";
import DropaHint from "../../Components/DropaHint";
import ShelfCustom from "../../Components/Shelf";
import BannerFinal from "../../Components/BannerFinal";
import SizeModal from "../../Components/SizeModal";


interface ProductItem {
    productId: string;
    productName: string;
    productBrand: string;
    productDescription: string;
    imageProduct: string;
    imageThumb: string;
    imageThumb2: string;
    thumbnail: string;
    flags: Flag[];
    ListPrice: number;
    Price: number;
    quantidade: number;
}

interface Flag {
    id: string;
    label: string;
}


function ProductPage(props: any): JSX.Element {
    const { addItemToCart, addFav, fav } = useContext(AppContext);
    const [data, setData] = useState<VitrineProps["data"] | null>(null);
    const [Modal, setModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const { Product } = useContext(AppContext);
    const [background, setBackground] = useState("#000");

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
   
    let productItem: ProductItem[] = [];

    if (Product && Product[0] && Product[0][0]) {
        productItem = [
            {
                productId: Product[0][0]?.productId || '',
                productName: Product[0][0]?.productName || '',
                productBrand: Product[0][0]?.productBrand || '',
                productDescription: Product[0][0]?.productDescription || '',
                imageProduct: Product[0][0]?.imageProduct || '',
                thumbnail: Product[0][0]?.imageThumb || '', 
                imageThumb: Product[0][0]?.imageThumb || '',
                imageThumb2: Product[0][0]?.imageThumb2 || '',
                flags: Product[0][0]?.flags || [],
                ListPrice: Product[0][0]?.ListPrice || 0,
                Price: Product[0][0]?.Price || 0,
                quantidade: Product[0][0]?.quantidade || 1
            }
        ];
    } else {
        console.error("Product, Product[0], or Product[0][0] is undefined or empty.");
    }
    
    const navigate = useNavigate();

    const voltarhome = () => {
        navigate("/");
    };

    useEffect(() => {
        fav.map((itemfav) => {
            return itemfav === Product[0][0]?.productId ? setBackground("red") : ""
        })
    })

    const favoreitei = () => {
        addFav(Product[0][0]?.productId)
        setBackground("red");
    }


    const loveyourWay = {
        "imagedesktop": "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Desktop?$tile$&wid=2992&fmt=webp",
        "imagemobile": "https://media.tiffany.com/is/image/tiffanydm/2023_GW-HP-FWMH-Mobile?$tile$&wid=720&fmt=webp",
    }

    const fromthesource = {
        "imagedesktop": "https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Desktop2?$tile$&wid=2992&fmt=webp",
        "imagemobile": "https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Mobile?$tile$&wid=720&fmt=webp",
    }

    return (
        <div className="page-product">
            <Header data={data} loading={loading} error={error} />
            {Product[0]?.length > 0 ?
                <>
                    {Modal ? <SizeModal setModal={setModal} Modal={Modal} /> : ""}
                    <div className="container">
                        <div className="ProductContainer">
                            <div className="ProductsImage">
                                <img width="100%" alt="" src={Product[0][0]?.imageProduct} />
                                <div className="container__subProductImage">
                                    <img width="100%" alt="" src={Product[0][0]?.imageThumb} />
                                    <img width="100%" alt="" src={Product[0][0]?.imageThumb2} />
                                </div>
                            </div>
                            <div className="ProductsDescription">
                                <div className="content-ProductsDescription">
                                    <button className="breadCrumb" onClick={() => voltarhome()}>Home / {Product[0][0]?.productBrand}</button>
                                    <div className="productNameContainer">
                                        <p className="Name__Brand">{Product[0][0]?.productBrand}</p>
                                        <h1 className="Name__Product  mb-1rem">{Product[0][0]?.productName}</h1>
                                    </div>
                                    <div className="d-flex pb-16">
                                        <span className="Card__dropaHint mr-24">
                                            <DropaHint />
                                        </span>
                                        <span className="Card__favoritePageProduct" style={{ color: background, cursor: "pointer" }} onClick={() => { favoreitei() }}>
                                            <FavoriteLink />
                                        </span>
                                    </div>
                                    {/* <p className="ListPrice">{Product[0][0]?.ListPrice}</p> */}

                                    <div className="express-shipping" style={{ display: 'flex', padding: '12px 0', flexDirection: 'row', borderTop: '1px solid #000', alignItems: 'center', width: '100%' }}>
                                        <img
                                            src="/imgs/express-shipping-icon.png"
                                            style={{ marginRight: '7px', width: '34px' }}
                                            alt="Express Shipping Icon"
                                        />
                                        <span style={{ fontFamily: "Times New Arial", fontSize: "13px" }}>Complimentary Shipping &amp; Returns</span>
                                    </div>

                                    <div className="Container__medidas-e-sku-selector">
                                        <div className="medidas-e-sku-selector b-b b-t px-12">
                                            <div className="d-flex justify-space-between">
                                                <div className="size-title">Tamanho</div>
                                                <div className="size-info">
                                                    <p onClick={() => setModal(true)}>Guia de Tamanhos</p>
                                                </div>
                                                <div className="tamanho-especification">Único</div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="buy-button mb05rem mt05rem" onClick={() => addItemToCart(productItem)}> <div className="price">R$ {Product[0][0]?.Price},00</div> Add to Bag</button>

                                    <div className="Description">
                                        <h4 className="mb-1rem title__Description" >Descrição e Detalhes</h4>
                                        <Description description={Product[0][0]?.productDescription.split(/\r\n/).map((line: any, index: any) => <p key={index}>{line}</p>)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : <Loading type="spinningBubbles" color="black" />
            }
            <BannerFinal icon={true} flexDirection="flex-end" url={loveyourWay} className="loveyourWay" title="Love Your Way" description="You’ll know who it’s for. You’ll know when it’s time. You’ll just know." textLink="Explore Love & Engagement" Link="https://www.tiffany.com/engagement/" />
            <BannerFinal icon={true} flexDirection="flex-start" url={fromthesource} className="fromthesource" title="From the Source" description="Handcrafting the world’s best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources." textLink="Follow Your Diamond’s Journey" Link="https://www.tiffany.com/engagement/diamond-provenance/" />
            <ShelfCustom data={data} error={error} loading={loading} text="" quantidadeItemMobile={2} quantidadeItem={4} />
            <Footer />
        </div>
    )
}

export default ProductPage;
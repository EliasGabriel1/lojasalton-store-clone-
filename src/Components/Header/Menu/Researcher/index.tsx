import { useState, useContext, useEffect } from 'react';
import Loading from '../../../Loading';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../Context/AppContext";
import "./index.css"


function Researcher(props: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [display, setDisplay] = useState(true);
    const { IrAoItem } = useContext(AppContext);
    const { NovoItem } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (display === false) {
            const handleScroll = () => {
                setDisplay((prevDisplay) => !prevDisplay);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [display]);


    const filteredProducts = props.data?.filter((product: any) =>
        product.productName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function getProduct(product: any) {
        const clusterHighlights = product.clusterHighlights
        const productClusters = product.productClusters
        const result = Object.entries({ ...clusterHighlights, ...productClusters }).reduce((acc: any, [key, value]) => {
            if (!acc.hasOwnProperty(key)) {
                acc[key] = value;
            }
            return acc;
        }, {});

        const newFlag = Object.entries(result).map(([key, value]) => {
            return { id: key, label: value };
        });
        const productItem = [
            {
                "productId": product?.productId,
                "productName": product?.productName,
                "productBrand": product?.brand,
                "productDescription": product?.description,
                "imageProduct": product?.items[0].images[0].imageUrl,
                "flags": newFlag,
                "ListPrice": product?.items[0].sellers[0].commertialOffer.ListPrice,
                "Price": product?.items[0].sellers[0].commertialOffer.Price,
                "installmentOptionsCount": product?.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].count,
                "installmentOptionsValue": product?.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].value
            }
        ]

        return productItem;
    }


    const pageProduct = (product: any) => {
        const productItem = getProduct(product);
        NovoItem();
        IrAoItem(productItem);
        navigate("/Producto");
    }

    if (!props.error) {
        return (
            !props.loading === true ?
                <div className={props.className ? "searchBox " + props.className : " searchBox"}>
                    <div className='group-input'>
                        <div className="box-input">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='answer-search' style={{ display: !searchTerm ? "none" : "" }}>
                        {filteredProducts.map((product: any) => (
                            <div key={product.productId} style={{ display: !searchTerm ? "none" : "" }} onClick={() => pageProduct(product)}>
                                <img alt="" width="100%" src={product.items[0].images[0].imageUrl} />
                                <h4>{product.productName}</h4>
                                <p>{product.brand}</p>
                            </div>
                        ))}
                    </div>
                </div>
                : <Loading type="spinningBubbles" color="black" />
        );
    }
    return <></>
}

export default Researcher;

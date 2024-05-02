import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import "./minicart.css";


const Minicart: any = () => {
    const { cart, removeItemFromCart } = useContext(AppContext);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [total, setTotal] = useState('');
    const navigate = useNavigate();

    const handleRemoveItem = (itemId: string) => {
        removeItemFromCart(itemId);

        if (cart.length === 1) {
            const cartArray: any = [];

            const cartArrayString = JSON.stringify(cartArray);

            sessionStorage.setItem('cart', cartArrayString);

        }
    };


    const MiniCartSvg: React.FC = () => {
        return (
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1388_157" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="3" y="2" width="26" height="28">
                    <path d="M28.5 2H3.5V30H28.5V2Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1388_157)">
                    <path d="M22.6484 30H6.89844C6.78241 30 6.67113 29.9539 6.58908 29.8719C6.50703 29.7898 6.46094 29.6785 6.46094 29.5625V12.5C6.46094 12.384 6.50703 12.2727 6.58908 12.1906C6.67113 12.1086 6.78241 12.0625 6.89844 12.0625H22.6484C22.7645 12.0625 22.8757 12.1086 22.9578 12.1906C23.0398 12.2727 23.0859 12.384 23.0859 12.5V29.5625C23.0859 29.6785 23.0398 29.7898 22.9578 29.8719C22.8757 29.9539 22.7645 30 22.6484 30ZM7.33594 29.125H22.2109V12.9375H7.33594V29.125Z" fill="#262626" />
                    <path d="M27.8984 30H22.6484C22.5324 30 22.4211 29.9539 22.3391 29.8719C22.257 29.7898 22.2109 29.6785 22.2109 29.5625V12.5C22.2109 12.384 22.257 12.2727 22.3391 12.1906C22.4211 12.1086 22.5324 12.0625 22.6484 12.0625H27.8984C28.0145 12.0625 28.1258 12.1086 28.2078 12.1906C28.2898 12.2727 28.3359 12.384 28.3359 12.5V29.5625C28.3359 29.6785 28.2898 29.7898 28.2078 29.8719C28.1258 29.9539 28.0145 30 27.8984 30ZM23.0859 29.125H27.4609V12.9375H23.0859V29.125Z" fill="#262626" />
                    <path d="M8.21231 11.625C8.13423 11.6252 8.05751 11.6046 7.9901 11.5652C7.9227 11.5258 7.86707 11.469 7.82899 11.4009C7.79091 11.3327 7.77177 11.2556 7.77355 11.1775C7.77533 11.0995 7.79797 11.0233 7.83912 10.9569C8.07232 10.5805 8.4181 10.2871 8.82744 10.1183C9.05925 10.0093 9.25456 9.83561 9.38973 9.61806C9.5249 9.4005 9.59416 9.14845 9.58912 8.89238V2.875C9.58912 2.64294 9.68131 2.42038 9.8454 2.25628C10.0095 2.09219 10.2321 2 10.4641 2H12.2141C12.4462 2 12.6687 2.09219 12.8328 2.25628C12.9969 2.42038 13.0891 2.64294 13.0891 2.875V8.89238C13.0866 9.09803 13.1306 9.30158 13.2179 9.48781C13.3052 9.67404 13.4335 9.83811 13.5931 9.96775C13.6399 10.0025 13.6792 10.0463 13.7088 10.0964C13.7385 10.1466 13.7578 10.2022 13.7656 10.2599C13.7734 10.3177 13.7697 10.3764 13.7545 10.4326C13.7394 10.4889 13.7131 10.5416 13.6774 10.5875C13.6416 10.6335 13.597 10.6719 13.5462 10.7004C13.4953 10.7289 13.4394 10.747 13.3815 10.7535C13.3236 10.7601 13.265 10.7551 13.209 10.7387C13.1531 10.7223 13.1011 10.6949 13.0559 10.6581C12.7912 10.4466 12.578 10.1778 12.4322 9.87195C12.2864 9.56611 12.2118 9.23118 12.2141 8.89238V2.875H10.4641V8.89238C10.4722 9.32068 10.354 9.74188 10.1241 10.1034C9.8943 10.4649 9.56304 10.7506 9.17175 10.925C8.92815 11.0228 8.72194 11.1954 8.58287 11.4181C8.54374 11.4812 8.48919 11.5333 8.42437 11.5695C8.35954 11.6057 8.28656 11.6248 8.21231 11.625Z" fill="#262626" />
                    <path d="M14.4076 11.625C14.3295 11.6252 14.2528 11.6046 14.1854 11.5652C14.118 11.5258 14.0624 11.469 14.0243 11.4009C13.9862 11.3327 13.9671 11.2556 13.9689 11.1775C13.9706 11.0995 13.9933 11.0233 14.0344 10.9569C14.2676 10.5805 14.6134 10.2871 15.0227 10.1183C15.2546 10.0093 15.4499 9.83561 15.585 9.61806C15.7202 9.4005 15.7895 9.14845 15.7844 8.89238V2.875C15.7844 2.64294 15.8766 2.42038 16.0407 2.25628C16.2048 2.09219 16.4274 2 16.6594 2H18.4094C18.6415 2 18.8641 2.09219 19.0281 2.25628C19.1922 2.42038 19.2844 2.64294 19.2844 2.875V8.89238C19.2819 9.09803 19.3259 9.30158 19.4132 9.48781C19.5005 9.67404 19.6288 9.83811 19.7884 9.96775C19.8352 10.0025 19.8745 10.0463 19.9041 10.0964C19.9338 10.1466 19.9531 10.2022 19.9609 10.2599C19.9688 10.3177 19.965 10.3764 19.9498 10.4326C19.9347 10.4889 19.9084 10.5416 19.8727 10.5875C19.8369 10.6335 19.7923 10.6719 19.7415 10.7004C19.6907 10.7289 19.6347 10.747 19.5768 10.7535C19.5189 10.7601 19.4603 10.7551 19.4043 10.7387C19.3484 10.7223 19.2964 10.6949 19.2512 10.6581C18.9865 10.4466 18.7733 10.1778 18.6275 9.87195C18.4817 9.56611 18.4071 9.23118 18.4094 8.89238V2.875H16.6594V8.89238C16.6675 9.32068 16.5493 9.74188 16.3194 10.1034C16.0896 10.4649 15.7583 10.7506 15.3671 10.925C15.1235 11.0228 14.9172 11.1954 14.7782 11.4181C14.739 11.4812 14.6845 11.5333 14.6197 11.5695C14.5548 11.6057 14.4819 11.6248 14.4076 11.625Z" fill="#262626" />
                    <path d="M20.5326 11.625C20.4545 11.6252 20.3778 11.6046 20.3104 11.5652C20.243 11.5258 20.1874 11.469 20.1493 11.4009C20.1112 11.3327 20.0921 11.2556 20.0939 11.1775C20.0956 11.0995 20.1183 11.0233 20.1594 10.9569C20.3926 10.5805 20.7384 10.2871 21.1477 10.1183C21.3796 10.0093 21.5749 9.83561 21.71 9.61806C21.8452 9.4005 21.9145 9.14845 21.9094 8.89238V2.875C21.9094 2.64294 22.0016 2.42038 22.1657 2.25628C22.3298 2.09219 22.5524 2 22.7844 2H24.5344C24.7665 2 24.9891 2.09219 25.1531 2.25628C25.3172 2.42038 25.4094 2.64294 25.4094 2.875V8.89238C25.4069 9.09803 25.4509 9.30158 25.5382 9.48781C25.6255 9.67404 25.7538 9.83811 25.9134 9.96775C25.9602 10.0025 25.9995 10.0463 26.0291 10.0964C26.0588 10.1466 26.0781 10.2022 26.0859 10.2599C26.0938 10.3177 26.09 10.3764 26.0748 10.4326C26.0597 10.4889 26.0334 10.5416 25.9977 10.5875C25.9619 10.6335 25.9173 10.6719 25.8665 10.7004C25.8157 10.7289 25.7597 10.747 25.7018 10.7535C25.6439 10.7601 25.5853 10.7551 25.5293 10.7387C25.4734 10.7223 25.4214 10.6949 25.3762 10.6581C25.1115 10.4466 24.8983 10.1778 24.7525 9.87195C24.6067 9.56611 24.5321 9.23118 24.5344 8.89238V2.875H22.7844V8.89238C22.7925 9.32068 22.6743 9.74188 22.4444 10.1034C22.2146 10.4649 21.8833 10.7506 21.4921 10.925C21.2485 11.0228 21.0422 11.1954 20.9032 11.4181C20.864 11.4812 20.8095 11.5333 20.7447 11.5695C20.6798 11.6057 20.6069 11.6248 20.5326 11.625Z" fill="#262626" />
                </g>
            </svg>
        );
    };

    const handleClick = () => {
        setIsCartVisible(!isCartVisible);
    };

    const sumTotal = (data: Array<any>) => {
        let valorTotal = 0;

        for (const item of data) {
            for (const produto of item) {
                valorTotal += produto.Price;
            }
        }
        return valorTotal.toFixed(2);
    }

    useEffect(() => {
        setTotal(sumTotal(cart))
    }, [cart]);

    const pageProduct = () => {
        setIsCartVisible(false);
        const dataStr = JSON.stringify(cart);
        document.cookie = `data=${encodeURIComponent(
            dataStr
        )}; expires=${new Date(Date.now() + 86400000).toUTCString()}`;
        navigate("/checkout");
    };

    const mergeDuplicateItems = (data: any[]): any[] => {
        const mergedItems: { [key: string]: any } = {};
        data.forEach((group) => {
            group.forEach((item: any) => {
                const { productId, quantidade } = item;
                if (mergedItems[productId]) {
                    mergedItems[productId].quantidade += quantidade;
                } else {
                    mergedItems[productId] = { ...item };
                }
            });
        });
        const mergedArray = Object.values(mergedItems);
        return mergedArray;
    };

    const mergedProductItems = mergeDuplicateItems(cart);

    return (
        <div className="container-minicart" onClick={handleClick}>
            <button className={`container-minicart-button ${cart.length > 0 ? " contain" : ""}`}>
                <MiniCartSvg />
            </button>
            <div className={`mini-cart ${isCartVisible ? "visible" : ""}`}>
                {cart.length > 0 ? (
                    <div className="minicart__box-signin">
                        <p>To speed up the checkout process, sign in now.</p>
                        <a href="/signIn" className="links">Sign In<span className="icon-dropdown-right"></span></a>
                    </div>
                ) : (
                    ""
                )}
                <ul>
                    {mergedProductItems.length > 0 ? (
                        mergedProductItems.map((item: any, index: number) => (
                            <li key={index}>
                                <div className="minicart__d-flex">
                                    <picture>
                                        <img alt="" width="100%" src={item.imageProduct} />
                                    </picture>
                                    <div className="minicart__items-product">
                                        <p className="minicart__description-item">
                                            {item.productName}
                                        </p>
                                        <p className="minicart__description-price">${item.Price} (unit)</p>
                                        <p className="minicart__description-quantidade">quantity: {item.quantidade} (unit)</p>
                                        <p
                                            className="links cursor-pointer minicart__description-remove"
                                            onClick={() => handleRemoveItem(item.productId)}
                                        >
                                            remove
                                            <span className="icon-dropdown-right"></span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className="carrinhovazio">
                            <p>Seu carrinho de compras <br /> está vazio :(</p>
                        </div>
                    )}
                </ul>
                {cart.length > 0 ? (
                    <h5
                        className="encerrar-compra cursor-pointer"
                        onClick={() => pageProduct()}
                    >
                        <span className="encerrar-compra-total">Estimated Total: {total}</span>Checkout
                    </h5>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Minicart;

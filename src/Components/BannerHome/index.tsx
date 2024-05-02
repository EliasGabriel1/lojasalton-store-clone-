import React, { useState } from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import "./index.css";

function Banner() {
    const window = useWindowSize();
    const imagesdesktop = [
        "https://placehold.co/1280x393",
        "https://placehold.co/1280x393",
        "https://placehold.co/1280x393",
        "https://placehold.co/1280x393",
    ];

    const imagesmobile = [
        "https://placehold.co/650x450",
        "https://placehold.co/650x450",
        "https://placehold.co/650x450",
        "https://placehold.co/650x450",
    ];

    const images = window.width && window.width > 900 ? imagesdesktop : imagesmobile;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const previousImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="container-banner">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <div key={index} style={{ opacity: currentImageIndex === index ? '1' : '0', transition: "all 0.5s linear", visibility: currentImageIndex === index ? 'visible' : 'hidden', height: currentImageIndex === index ? 'inherit' : '0' }}>
                        <img
                            alt=""
                            src={image}
                            width="100%"
                            className="carousel-image"
                        />
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
            <div className="carousel-buttons">
                <button onClick={previousImage} className="button-previous">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_5229_10226)">
                            <rect width="40" height="40" rx="20" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 44)" fill="#D9D9D9" fillOpacity="0.2" />
                            <rect x="-0.37037" y="-0.37037" width="39.2593" height="39.2593" rx="19.6296" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 47.2593 43.2593)" stroke="white" strokeOpacity="0.2" strokeWidth="0.740741" />
                            <path d="M22.235 24.2654L26.735 28.7654C26.8061 28.8317 26.9001 28.8677 26.9973 28.866C27.0944 28.8643 27.1871 28.8249 27.2558 28.7562C27.3245 28.6875 27.3639 28.5948 27.3656 28.4977C27.3673 28.4005 27.3312 28.3065 27.265 28.2354L23.4056 24.3754H33.5C33.5995 24.3754 33.6948 24.3359 33.7652 24.2656C33.8355 24.1953 33.875 24.0999 33.875 24.0004C33.875 23.901 33.8355 23.8056 33.7652 23.7352C33.6948 23.6649 33.5995 23.6254 33.5 23.6254H23.4056L27.265 19.7654C27.3312 19.6943 27.3673 19.6003 27.3656 19.5032C27.3639 19.406 27.3245 19.3133 27.2558 19.2446C27.1871 19.1759 27.0944 19.1365 26.9973 19.1348C26.9001 19.1331 26.8061 19.1692 26.735 19.2354L22.235 23.7354C22.1648 23.8057 22.1253 23.901 22.1253 24.0004C22.1253 24.0998 22.1648 24.1951 22.235 24.2654Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_5229_10226" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5229_10226" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5229_10226" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </button>
                <button onClick={nextImage} className="button-next">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_5229_10230)">
                            <rect width="40" height="40" rx="20" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 48 44)" fill="#D9D9D9" fillOpacity="0.2" />
                            <rect x="-0.37037" y="-0.37037" width="39.2593" height="39.2593" rx="19.6296" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 47.2593 43.2593)" stroke="white" strokeOpacity="0.2" strokeWidth="0.740741" />
                            <path d="M33.765 24.2654L29.265 28.7654C29.1939 28.8317 29.0999 28.8677 29.0027 28.866C28.9056 28.8643 28.8129 28.8249 28.7442 28.7562C28.6755 28.6875 28.6361 28.5948 28.6344 28.4977C28.6327 28.4005 28.6688 28.3065 28.735 28.2354L32.5944 24.3754H22.5C22.4005 24.3754 22.3052 24.3359 22.2348 24.2656C22.1645 24.1953 22.125 24.0999 22.125 24.0004C22.125 23.901 22.1645 23.8056 22.2348 23.7352C22.3052 23.6649 22.4005 23.6254 22.5 23.6254H32.5944L28.735 19.7654C28.6688 19.6943 28.6327 19.6003 28.6344 19.5032C28.6361 19.406 28.6755 19.3133 28.7442 19.2446C28.8129 19.1759 28.9056 19.1365 29.0027 19.1348C29.0999 19.1331 29.1939 19.1692 29.265 19.2354L33.765 23.7354C33.8352 23.8057 33.8747 23.901 33.8747 24.0004C33.8747 24.0998 33.8352 24.1951 33.765 24.2654Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_5229_10230" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5229_10230" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5229_10230" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </button>
            </div>
        </div>
    );
}

export default Banner;

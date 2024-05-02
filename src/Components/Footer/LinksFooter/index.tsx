import { useState } from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import BlockLinks from "./BlockLinks";

function LinksFooter() {
    const [open, setOpen] = useState(true);
    const [openDois, setOpenDois] = useState(true);
    const window = useWindowSize();

    return (
        <div className="container-blocks">
            <div className="box-blocks">
                <div className="footer__block">
                    <div className="block1">
                        <h4>Categorias</h4>
                        <BlockLinks block="block1" />
                    </div >
                    <div className={`${window.width && window.width > 900 ? 'block2 eventnone' : "block2"}`} onClick={() => {
                        setOpen(!open);
                        document.querySelector(".mobile")!.classList.toggle('fixed');
                    }}>
                        <h4>Institucional</h4>
                        <div className={`${window.width && window.width > 900 ? (open === true ? 'mobile footer-open' : "mobile footer-close") : open === true ? 'mobile footer-close' : "mobile footer-open"}`}>
                            <BlockLinks block="block2" />
                        </div>
                    </div>
                    <div className={`${window.width && window.width > 900 ? 'block3 eventnone' : "block3"}`} onClick={() => {
                        setOpenDois(!openDois);
                        document.querySelector(".mobile")!.classList.toggle('fixed');
                    }}>
                        <h4>Related Tiffany Sites</h4>
                        <div className={`${window.width && window.width > 900 ? (openDois === true ? 'mobile footer-open' : "mobile footer-close") : openDois === true ? 'mobile footer-close' : "mobile footer-open"}`}>
                            <BlockLinks block="block3" />
                        </div>
                    </div>
                    <div className="block4">
                        <h4>Segurança</h4>
                        <BlockLinks block="block4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LinksFooter;
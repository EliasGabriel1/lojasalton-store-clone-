import React from "react";
import Link from "../../../Link";

function BlockLinks(props: any) {
    if (!props.block) {
        return null;
    }

    return (
        <>
            {(
                props.block === "block1" ?
                    (<div className="BlockLinks">
                        <Link className="links links-footer" href="" text="Vinhos" />
                        <Link className="links links-footer" href="" text="Espumantes" />
                        <Link className="links links-footer" href="" text="Personalize seu Rótulo" />
                    </div>)

                    :

                    props.block === "block2" ?
                        (<div className="BlockLinks">
                            <Link className="links links-footer" href="" text="Sobre Nós" />
                            <Link className="links links-footer" href="" text="Política de Privacidade" />
                            <Link className="links links-footer" href="" text="Preferência de Cookies" />
                        </div>)

                        :

                        props.block === "block3" ?
                            (<div className="BlockLinks">
                                <Link className="links links-footer" href="" text="Segunda à Sexta-feira, das 9h às 18h." />
                                <Link className="links links-footer" href="" text="contato.lojavirtual@salton.com.br" />
                                <Link className="links links-footer" href="" text="Exceto Feriados." />
                                <Link className="links links-footer" href="" text="(11) 2853-0788" />
                            </div>)

                            :

                            props.block === "block4" ?
                                (<div className="BlockLinks">
                                    <div className="footer__socials">
                                        <a href="/" aria-label="script" title="script" target="_blank" data-exit-context="footer" rel="noreferrer" data-exit-type="social" data-exit-name="script">
                                            <div className="cta-content hover-cta">
                                                <img src="https://lojasalton.vtexassets.com/assets/vtex/assets-builder/lojasalton.store-theme/0.2.1/images/logo-lets-encrypt___c5470fa254b675da1e353fd4d47287a6.svg" width="100%" alt="" />
                                            </div>
                                        </a>
                                        <a href="/" aria-label="clearsale" title="clearsale" target="_blank" data-exit-context="footer" rel="noreferrer" data-exit-type="social" data-exit-name="clearsale">
                                            <div className="cta-content hover-cta">
                                                <img src="https://lojasalton.vtexassets.com/assets/vtex/assets-builder/lojasalton.store-theme/0.2.1/images/logo-clearsale___80ec1db32f8382da0f2437326a75f4ab.svg" width="100%" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>)
                                :
                                ""
            )}
        </>
    );
}

export default BlockLinks;
import Copy from "./Copyright";
import LinksFooter from "./LinksFooter";
import FaixaCards from "./FaixaCards";
import "./footer.css"
import Logo from "../Logo";

function index() {
  return (
    <>
      <div className="container-footerLinks">
        <Logo />
        <div className="container">
          <LinksFooter />
          <FaixaCards />
          <Copy />
        </div>
      </div>
    </>
  );
}

export default index;
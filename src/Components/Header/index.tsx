import React, { useRef, useState, useEffect } from "react";
import Loading from "../Loading";
import Logo from "../Logo";
import Researcher from "./Menu/Researcher";
import MenuContent from "./Menu";
import Minicart from "../MiniCart";
import FavoriteLink from "../FavoriteLink";
import Profile from "../Profile";
import "./header.css";
import { useWindowSize } from "../../Hooks/useWindowSize";


interface MenuProps {
  data: any;
  loading: boolean;
  error: any;
}

interface MinicartProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Menu(props: MenuProps) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isBlock, setisBlock] = useState(false);

  const window = useWindowSize();

  const handleMouseEnter: MinicartProps["onMouseEnter"] = () => {
    setIsHovered(true);
    document.body.classList.add("block");
  };

  const handleMouseLeave: MinicartProps["onMouseLeave"] = () => {
    setIsHovered(false);
    document.body.classList.remove("block");
  };


  useEffect(() => {
    fetch("./api/Menu.json", {
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    }).then(data => {
      setData(data);
    }).catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    }).finally(() => {
      setLoading(false)
    })

  }, [])
 
  const handleClick = () => {
    setisBlock(!isBlock);
    setIsHovered(!isHovered);
    !isHovered === true ? document.body.classList.add("block") : document.body.classList.remove("block");
  };

  if (!error) {

    return (
      <header ref={headerRef} className="sticky">
        <div className="header_child">
          {
            <div className="container head">
              <Logo />
              <div className="groupResearch">
                <Researcher className="desktop" data={props.data} loading={props.loading} error={props.error} />
              </div>

              <div className="groupProfile__content">
                <div className={isHovered ? "groupProfile fixed" : "groupProfile"}>
                  <Profile />
                  <FavoriteLink />
                  <div className="Minicart-box__button"
                    onClick={handleClick}
                    onMouseEnter={window.width && window.width > 900 ? handleMouseEnter : undefined}
                    onMouseLeave={window.width && window.width > 900 ? handleMouseLeave : undefined}
                  >
                    <Minicart />
                  </div>
                </div>
              </div>
            </div>
          }
          {!loading === true ? <MenuContent api={data} /> : <Loading type="spinningBubbles" color="black" />}
        </div>
        <Researcher className="mobile" data={props.data} loading={props.loading} error={props.error} />
      </header>
    );
  }
  return <></>;
}

export default Menu;

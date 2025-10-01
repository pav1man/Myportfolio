
import { NavLink, Link } from "react-router-dom";
import "./header_style.css";

import ES1 from "../../pages/Эссе/ES1";
import Maps from "../../pages/Карта/Map";

function Header() {
  return (
    <>
      <header className="header">

        <div className="container">

          <div className="header_row">


            <div className="header_logo">

              <a href="/" className="header_logo_a" >Pavvvman<span className="span">®</span></a>
        
            </div>

            <div className="header_search">
              
                <div className="search_inner">
                      <ul className="ul_a">
                            <li className="li_a"><NavLink className="a1" to='/ES1'>Эссе</NavLink></li>        
                            <li className="li_a"><NavLink className="a1" to='/ES1'>Формула</NavLink></li>     
                            <li className="li_a"><NavLink className="a1" to='/ES1'>Игра</NavLink></li>     
                            <li className="li_a"><NavLink className="a1" to='/Maps'>Карта</NavLink></li>              
                      </ul>
                </div>

            </div>

            <div className="header_button"><a  className="a_header_button" href='https://t.me/paw_durov' target="_blank" rel="noopener noreferrer">Контакты</a></div>
          

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

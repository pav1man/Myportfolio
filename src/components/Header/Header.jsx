
import { NavLink, Link } from "react-router-dom";
import "./header_style.css";
import ES1 from "../../pages/ES1";

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
                            <li className="li_a"><NavLink className="a1" to='/ES1'>Карта</NavLink></li>              
                      </ul>
                </div>

            </div>

            <div className="header_button">Contact</div>
          

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

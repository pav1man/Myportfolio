
import { NavLink, Link } from "react-router-dom";
import "./es_header.css";
import ES1 from "../../ES1";

function ESHeader() {
  return (
    <>
      <header className="es_header">

        <div className="es_container">

          <div className="es_header_row">


            <div className="es_header_logo">

              <a href="/" className="es_header_logo_a" >Pavvvman<span className="span">®</span></a>
        
            </div>

            <div className="es_header_search">
              
                <div className="es_search_inner">
                      <ul className="es_ul_a">
                            <li className="es_li_a"><NavLink className="es_a1" to='/ES1'>Эссе</NavLink></li>        
                            <li className="es_li_a"><NavLink className="es_a1" to='/ES1'>Формула</NavLink></li>     
                            <li className="es_li_a"><NavLink className="es_a1" to='/ES1'>Игра</NavLink></li>     
                            <li className="es_li_a"><NavLink className="es_a1" to='/ES1'>Карта</NavLink></li>              
                      </ul>
                </div>

            </div>

            <div className><a className="es_header_button" href='https://t.me/paw_durov' target="_blank" rel="noopener noreferrer">Контакты</a></div>
          

          </div>
        </div>
      </header>
    </>
  );
}

export default ESHeader;

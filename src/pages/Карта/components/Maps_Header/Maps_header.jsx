import { NavLink, Link } from "react-router-dom";
import "./maps_header-style.css";
import ES1 from "../../../Эссе/ES1";
import Map from "../../Map";

function MapHeader() {
  return (
    <>
      <header className="map_header">

        <div className="map_container">

          <div className="map_header_row">


            <div className="map_header_logo">

              <a href="/" className="map_header_logo_a" >Pavvvman<span className="span">®</span></a>
        
            </div>

            <div className="map_header_search">
              
                <div className="map_search_inner">
                      <ul className="map_ul_a">
                            <li className="map_li_a"><NavLink className="es_a1" to='/ES1'>Эссе</NavLink></li>        
                            <li className="map_li_a"><NavLink className="es_a1" to='/ES1'>Формула</NavLink></li>     
                            <li className="map_li_a"><NavLink className="es_a1" to='/ES1'>Игра</NavLink></li>     
                            <li className="map_li_a"><NavLink className="es_a1" to='/Map'>Карта</NavLink></li>              
                      </ul>
                </div>

            </div>

            <div className><a className="map_header_button" href='https://t.me/paw_durov' target="_blank" rel="noopener noreferrer">Контакты</a></div>
          

          </div>
        </div>
      </header>
    </>
  );
}

export default MapHeader;

import "./header_style.css";

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
                            <li className="li_a"><a className="a1">Эссе1</a></li>
                            <li className="li_a"><a className="a1">Эссе2</a></li>
                            <li className="li_a"><a className="a1">Эссе3</a></li>
                            <li className="li_a"><a className="a1">Формула</a></li>
                      </ul>
                </div>

            </div>



            <div className="header_button">Contact me</div>
          

          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

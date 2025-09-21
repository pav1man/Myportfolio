
import './style-main.scss';
import Main_img from "./img/Frame 64 1(4).png"
import Href_logo from "./img/Lockup_Vol_2-228 2.svg"

function  Main  () {
    return (  
    
    <main> 
        <div>
            <div> <img className='img' src={Main_img}></img></div> 

                <div className="container_main">  

                    <div className='gen'>

                        <div className="text">     

                                <g1 className="h1_general">Мое профессиональное портфолио находится в состоянии разработки, пожалуйста ожидайте</g1>   

                                <p className="p_general"><a href='/'>PavvmanProducrion</a>-портфолио студента ФГБОУ ВО "<a className="donntu_href" href='https://donntu.ru/'>ДОННТУ</a>" факультета <a className="donntu_href" href='https://ki.fknt.donntu.ru/'> ИСП</a>, группы КИ-25 Демидова Павла. Работаем на качество и надежность.Данный ресур содержит в себе сеть проектов, которые были разработаны в рамках курса "Введение в специальность".Сайт держится на слезах студента и  синей изоленте. </p>           

                                {/* <div className='div_main_button_a'> <a className="main_button_a" href='https://t.me/paw_durov'>Написать</a></div> */}
                        </div>      

                        <div className='buttons_general'>      

                           <div className='buttons_general_container'>
                                 <div className='div_main_button_a'> <a className="main_button_a" href='https://t.me/paw_durov'>Написать</a></div>
                                              
                                <div className='buttons_navigation'>
                                    
                                    <div className="main_button"> <a className="button" href='https://github.com/pavvman'> <img  className='Href_logo' src={Href_logo}/>GitHub</a></div>
                                    <div className="main_button"> <a className="button" href='https://www.behance.net/pav1manp'> <img  className='Href_logo' src={Href_logo}/>Behance</a></div>
                                   
                                </div>    

                           </div>

                        </div>    

                    </div>    

                </div>
        </div>
      
          
    </main>

);
}
 
export default  Main;
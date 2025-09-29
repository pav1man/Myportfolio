

import Main_img from "./img/Frame 64(3).png"
import Href_logo from "./img/Lockup_Vol_2-228 2.svg"
import Footer_img from './img/Frame 25(6).png'

import './style-main.scss';

function  Main  () {
    return (  
    
    <main> 
        <div className="main">
            < div> 
                    <img className='img' src={Main_img}></img> 
            </div>

                    <div className="container_main">  

                    <div className='gen'>

                        <div className="text">     

                                <h1 className="h1_general">Мое профессиональное портфолио находится в состоянии разработки, пожалуйста ожидайте</h1>   

                                <p className="p_general"><a href='/'>PavvmanProducrion</a>-портфолио студента ФГБОУ ВО "<a className="donntu_href" href='https://donntu.ru/' target="_blank" rel="noopener noreferrer">ДОННТУ</a>" факультета <a className="donntu_href" href='https://fisp.iknt.donntu.ru/'  target="_blank" rel="noopener noreferrer"> ИСП</a>, группы КИ-25 Демидова Павла. Работаем на качество и надежность.Данный ресур содержит в себе сеть проектов, которые были разработаны в рамках курса "Введение в специальность".Сайт держится на слезах студента и  синей изоленте. </p>           

                           
                        </div>      

                        <div className='buttons_general'>      

                           <div className='buttons_general_container'>
                                 <div className='div_main_button_a'> <a className="main_button_a" href='https://t.me/paw_durov' target="_blank" rel="noopener noreferrer">Написать</a></div>
                                              
                                <div className='buttons_navigation'>
                                    
                                    <div className="main_button"> <a className="button" href='https://github.com/pavvman' target="_blank" rel="noopener noreferrer"> <img  className='Href_logo' src={Href_logo}/>GitHub</a></div>
                                    <div className="main_button"> <a className="button" href='https://www.behance.net/pav1manp' target="_blank" rel="noopener noreferrer"> <img  className='Href_logo' src={Href_logo}/>Behance</a></div>
                                   
                                </div>    

                           </div>

                        </div>    


                        

                    </div>    

                    </div>

                      <div><img className='main_footer_img' src={Footer_img}/></div>
        </div>
      
          
    </main>

);
}
 
export default  Main;
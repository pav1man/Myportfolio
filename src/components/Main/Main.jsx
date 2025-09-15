
import './style-main.scss';


import Main_img from "./img/alex-shutin-XsC0GHXi-8k-unsplash.jpg"

function  Main  () {
    return (  
    
    <main> 
        <div>
                  
                  {/* <div> <img className='img' src={Main_img}></img></div> */}

        <div className="container_main"> 
            <div className='gen'>
                         <div className="text">              
                            <p className="p_general">Мое профессиональное портфолио находится в состоянии разработки, пожалуйста ожидайте</p>            
                         </div>      

                           <div className='buttons'>
                                <div className="main_button"> <a className="button">Mail</a></div>
                                <div className="main_button"> <a className="button">GitHub</a></div>
                                <div className="main_button"> <a className="button">Behance</a></div>
                         </div>         
            </div>
               
        </div>
                 
                  <div> <img className='img' src={Main_img}></img></div>
        
        
        </div>
      
          
    </main>

);
}
 
export default  Main;
 
 import  './footer_style.css';
 import Footer_img from './img/Frame 25(6).png'
import Footer_svg from './img/Frame 63.svg'


 function  Footer ()  {
    return ( <footer>
        
        <main> 
                <div>

                    <div><img className='footer_img' src={Footer_img}/></div>
             
        
                        <div className="container_main">  
        
                            <div className='footer_gen'>

                    <div className='fwr'>
                        <div><img className='footer_svg' src={Footer_svg}/></div>
                                <p className='footer_p'>©2025 Pavvman Production </p>
                              

                    </div>
                                
                                           
                            </div>    
        
                                   </div>
        
                </div>  
              
                  
            </main>
    </footer> );
 }
  
 export default  Footer;
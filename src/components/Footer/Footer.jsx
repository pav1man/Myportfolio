 
import Footer_svg from './svg/Frame 63(1).svg'

 import  './footer_style.css';

 function  Footer ()  {
    return ( <footer>
        
        <main> 
                <div className='footer'>
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
    </footer> 
    );
 }
  
 export default  Footer;
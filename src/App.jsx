
import './GeneralStyles/App.scss'

import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from  './components/Footer/Footer'


function App() {
  
  return (
    <>
     <Header />

     <SmoothScroll> 
          <Main />
         <Footer /> 
    </SmoothScroll>
    </>
   
  )
}

export default App

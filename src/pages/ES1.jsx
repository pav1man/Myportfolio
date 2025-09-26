
import { Helmet } from "react-helmet-async"

import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"
import SmoothScroll from "../components/SmoothScroll/SmoothScroll"

function ES1() {
  
  return (
    <>
     <Helmet>
            <title> Pavvman | Эссе </title>
        </Helmet>
     <Header />

     <SmoothScroll> 
          <Main />
         <Footer /> 
    </SmoothScroll>
    </>
   
  )
}

export default ES1


import { Helmet } from "react-helmet-async"

import ESHeader from "../Эссе/components/ES_Header/es_header"
import ESMain from './components/ES_Main/ES_Main'
import ESFooter from "./components/ES_Footer/es_footer"
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll"



function ES1() {
  
  return (
    <>
     <Helmet>
            <title> Pavvman | Эссе </title>
        </Helmet>
     <ESHeader />

     <SmoothScroll> 
          <ESMain />
         <ESFooter /> 
    </SmoothScroll>
    </>
   
  )
}

export default ES1

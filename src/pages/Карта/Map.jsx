
import { Helmet } from "react-helmet-async"

import MapHeader from "./components/Maps_Header/Maps_header"
import MapMain from './components/Maps_Main/Map_main'
import MapFooter from './components/Maps_Footer/Maps_footer'
import SmoothScroll from "../../components/SmoothScroll/SmoothScroll"

import { YMaps, Map } from '@pbe/react-yandex-maps';

function Maps() {
  
  return (
    <>
     <Helmet>
            <title> Pavvman | Карта </title>
        </Helmet>
     <MapHeader />

     <SmoothScroll>
          <YMaps>
            <MapMain />
           </YMaps>
      </SmoothScroll>    
         {/* <MapFooter />  */}

    </>
   
  )
}

export default Maps

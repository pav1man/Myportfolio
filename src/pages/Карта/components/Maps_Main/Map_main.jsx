import { YMaps,Map } from '@pbe/react-yandex-maps';
import React, { useRef } from 'react';
import './Maps_main-styles.css'
import config from './map_config.json'




const MapMain=()=> {

        // const mapRef=useRef(null);

        // const handleLoad=(ymaps) => {

        //     ymaps.route([[48.047, 37.963], [47.990, 37.80]],
        //     {mapStateAutoApply: true}
        // ).then( (route) => {
        //     const map=mapRef.current;
        //     map.geoObjects.add(route);

        //     const path = route.getPaths();
        //     path.options.set({
        //         strokeColor:"#1c73ffff",
        //         strokeWidth:5,
        //         opacity:0.7
        //     });

        //     map.setBounds(route.getBounds(), {
        //         checkZoomRange: true,
        //         zoomMargin:20
        //     })
        // });

        // };

     return (  
        <main> 
            <div className="map_main">
                    <div className="map_container_main">  
                      
                        <YMaps query={{apikey:config.API}}>
                                <Map defaultState={{ center: [48.045070884315656,37.96225999999994], zoom: 12}}  
                                options={{
                                     suppressMapOpenBlock: true, 
                                     yandexMapDisablePoiInteractivity: true, 
                                  }}
                                //   instanceRef={mapRef}
                                //   onLoad={handleLoad}
                                 
                                   width="100%" height="750px" />     
                        </YMaps>
                </div>                  
                                   
            </div>
          
              
        </main>
    
    );
}

export default MapMain;
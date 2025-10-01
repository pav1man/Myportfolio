// import { YMaps,Map } from '@pbe/react-yandex-maps';
// import React, { useRef } from 'react';
// import './Maps_main-styles.css'




// const MapMain=()=> {
//         const map = useRef(null);

//         const mapState = {
//             center: [48.04400866825847,37.9578827565918], 
//             zoom: 12
//         }
        
//         const addRoute = (ymaps) => {

//         const pointM = [48.04400866825847,37.9578827565918]; 
//         const pointD = [48.045070884315656,37.96225999999994]; 

//         const multiRoute = new ymaps.multiRouter.MultiRoute(
//                  {
//                       referencePoints: [pointM, pointD], // это точки 
//                       params: {
//                         routingMode:"pedestrian" // тип маршрута общ. транспорт
//                      }
//                  },
//                  {
//                      boundsAutoApply: true
//             }
//     );

//     map.current.geoObjects.add(multiRoute);
//   };

//      return (  
//         <main> 
//             <div className="map_main">
//                     <div className="map_container_main">  
                      
//                         <YMaps query={{apikey: "fbb923bf-b5ea-4132-9110-b58701c7749b"}}>
//                                 <Map 
//                                         // defaultState={{ center: [48.045070884315656,37.96225999999994], zoom: 12}}  
//                                         state={mapState}
//                                         options={{
//                                             suppressMapOpenBlock: true, 
//                                             yandexMapDisablePoiInteractivity: true, 
//                                         }}
//                                         modules={["multiRouter.MultiRoute"]}
//                                         instanceRef={map}
//                                         onLoad={addRoute}
//                                         width="100%" height="750px" 
//                                    />     
//                         </YMaps>
//                 </div>                  
                                   
//             </div>
              
//         </main>
    
//     );
// }
// export default MapMain;










import { YMaps, Map } from '@pbe/react-yandex-maps';
import React, { useRef, useState, useEffect } from 'react';
import './Maps_main-styles.css';

const MapMain = () => {
  const mapRef = useRef(null);
  const [ymaps, setYmaps] = useState(null);

  const defaultState = {
    center: [48.04400866825847, 37.9578827565918],
    zoom: 12,
  };  //начальное состояние карты -Макеевка

  useEffect(() => {
    if (!ymaps || !mapRef.current) return; //проверка апи и карты

    const pointM = [48.04400866825847, 37.9578827565918];  //Макеевка
    const pointD = [47.99359247511206,37.804028940475554]; //Донецк

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointM, pointD],
        params: { routingMode: 'masstransit' },
      },
      {
        boundsAutoApply: true,
        routeActiveStrokeColor: '#0015ffff',
        routeActiveStrokeWidth: 5,
        routeActiveStrokeStyle: 'solid',
      }
    );

    mapRef.current.geoObjects.add(multiRoute); //добавляем маршрут на карту

    // при построении — вручную подгоняем границы
    multiRoute.model.events.add('requestsuccess', () => {
      const bounds = multiRoute.getBounds();
      if (bounds) {
        mapRef.current.setBounds(bounds, { checkZoomRange: true, zoomMargin: 220 });
      }
    });
  }, [ymaps]);

  return (
    <main>
      <div className="map_main">
        <div className="map_container_main">
          <YMaps query={{ apikey: 'fbb923bf-b5ea-4132-9110-b58701c7749b' }}>
            <Map
              defaultState={defaultState}
              options={{
                suppressMapOpenBlock: true,
                yandexMapDisablePoiInteractivity: true,
              }}
              modules={['multiRouter.MultiRoute']}
              instanceRef={mapRef}
              onLoad={(ym) => setYmaps(ym)}
              width="100%"
              height="750px"
            />
          </YMaps>
        </div>
      </div>
    </main>
  );
};

export default MapMain;
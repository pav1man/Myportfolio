import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './GeneralStyles/App.scss'

import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from  './components/Footer/Footer'

import ES1 from './pages/ES1'




function App() {
  
  return (
    <Router>
        <Helmet>
            <title> Pavvman | Production</title>
        </Helmet>
      
      <Header />
        <Routes>
              <Route  path='/ES1'   element={<ES1 />} />
        </Routes>

       <SmoothScroll> 
          <Main />
          <Footer /> 
       </SmoothScroll>

    </Router>
   
  )
}

export default App

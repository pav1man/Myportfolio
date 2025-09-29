import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from  './components/Footer/Footer'
import ES1 from './pages/Эссе/ES1'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'

import './GlobalStyles/App_style.css'

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

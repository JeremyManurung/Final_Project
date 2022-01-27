import React, {useState, useEffect} from 'react';
import Hero from './pages/Hero'
import Reedems from './Reedems';
import ProductPage from './scenes/productpage/ProductPage';
import HistoryPage from './scenes/historypage/HistoryPage';
import ReedemPage from './scenes/reedempage/ReedemPage';
import LoadingScreen from './scenes/loadingscreen/LoadingScreen';
import Faq from './scenes/faq/Faq'
import DetailFaq from './scenes/detailfaq/DetailFaq';
import Login from './scenes/login/login'
import {
  BrowserRouter,
  Route,
  Routes,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 3000);
    })

    return (
        <div>
        {isLoading==true?
        <LoadingScreen/>:
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Reedem" element={<Reedems/>} />
            <Route path="/rewardstore" element={<ProductPage/>} />
            <Route path="/userhistory" element={<HistoryPage/>} />
            <Route path="/product" element={<ReedemPage/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/detailfaq" element={<DetailFaq/>}/>
            </Routes>
        </BrowserRouter>
}
        </div>
    );
}

export default App;

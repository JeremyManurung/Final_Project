import React, {useState, useEffect} from 'react';
import Hero from './pages/Hero'
import Reedems from './Reedems';
import ProductPage from './scenes/productpage/ProductPage';
import HistoryPage from './scenes/historypage/HistoryPage';
import ReedemPage from './scenes/reedempage/ReedemPage';
import LoadingScreen from './scenes/loadingscreen/LoadingScreen';
import faq from './pages/faq';
import DetailFaq from './scenes/detailfaq/DetailFaq';
import {
  BrowserRouter as Router,
  Route,
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
        <Router>
            <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/Reedem" component={Reedems} />
            <Route path="/rewardstore" component={ProductPage} />
            <Route path="/userhistory" component={HistoryPage} />
            <Route path="/product" component={ReedemPage}/>
            <Route path="/faq" component={faq}/>
            <Route path="/detailfaq" component={DetailFaq}/>
            </Switch>
        </Router>
}
        </div>
    );
}

export default App;

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


const TopicDetail = () => ( 
    <div >
        <h1> topic detail Page </h1> 
    </div>
)

function App() {
    return ( 
        <div>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop' component={ShopPage}/>  
        </div>
    );
}
export default App;
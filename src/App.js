import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const TopicsList = () => ( 
    <div >
        <h1> topic list Page </h1> 
    </div>
)

const TopicDetail = () => ( 
    <div >
        <h1> topic detail Page </h1> 
    </div>
)

function App() {
    return ( 
        <div>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/hats' component={TopicsList}/>
                <Route path='/topics/:topicId' component={TopicDetail}/>  
        </div>
    );
}
export default App;
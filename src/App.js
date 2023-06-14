import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route,link } from 'react-router-dom';

import Hello from './components/task1/task';
import Greeting from './components/Task2/Greeting';
import League from './components/task3/league';
import SocButton from './components/task4/SocButton';
import Route1 from './components/route/route';
import Fonts from './components/FontAwsm/font';
import Login from './components/task6/login'; 
import TechCard from './components/TechCard/techCard'
import './App.css';
import Hooks from './components/Hooks/hooks';
import Fruits from './components/Hooks/fruits';
import FeedBack from './components/feedBack/feedBack';
import FeedNext from './components/feedBack/feedBack1';
import Api from './components/API/api';

//task1
// function App() {
//   return (
//    <>
//     <Hello/>
//    </>
//   );
// }
//------------------------Task2
// function App() {
//   return (
//    <>
//     <Greeting/>
//    </>
//   );
// }
//-------------------------Task3
// function App() {
//     return (
//      <>
//       <League/>
//      </>
//     );
//   }
//-------------------------Task4
// function App() {
//       return (
//        <>
//         <SocButton/>
//        </>
//       );
//     }
function App() {
        return (
         <>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Route1/>}/>
            <Route path='/Hello' element={[<Route1/>,<Hello/>]}/>
            <Route path='/Greeting' element={[<Route1/>,<Greeting/>]}/>
            <Route path='/League' element={[<Route1/>,<League/>]}/>
            <Route path='/SocButton' element={[<Route1/>,<SocButton/>]}/>
            <Route path='/Font' element={[<Route1/>,<Fonts/>]}/>
            <Route path='/Login' element={[<Route1/>,<Login/>]}/>
            <Route path='/TechCard' element={[<Route1/>,<TechCard/>]}/>
            <Route path='/Hooks' element={[<Route1/>,<Hooks/>]}/>
            <Route path='/Fruits' element={[<Route1/>,<Fruits/>]}/>
            <Route path='/FeedBack' element={[<Route1/>,<FeedBack/>]}/>
            <Route path='/FeedNext' element={[<Route1/>,<FeedNext/>]}/>
            <Route path='/Api' element={[<Route1/>,<Api/>]}/>

          </Routes>
          </BrowserRouter>
          
          
         </>
        );
      }
export default App;

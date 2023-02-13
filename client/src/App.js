import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Groups from './components/Groups';
import HomePage from './components/HomePage';
import NavBar from './components/reusableComponents/NavBar';
import About from './components/About';
import Teachers from './components/Teachers';
import Competitions from './components/Competitions';
import Ballet from './components/Ballet/Ballet';
import BalletAC from './components/Ballet/BalletAC';
import BalletDE from './components/Ballet/BalletDE';
import BalletEF from './components/Ballet/BalletEF';
import BalletGI from './components/Ballet/BalletGI';
import BalletJM from './components/Ballet/BalletJM';
import BalletPoint from './components/Ballet/BalletPoint';
import HipHop from './components/HipHop/HipHop';
import HipHopAC from './components/HipHop/HipHopAC';
import HipHopDF from './components/HipHop/HipHopDF';
import HipHopGI from './components/HipHop/HipHopGI';
import HipHopJM from './components/HipHop/HipHopJM';
import Flamenko from './components/Flamenko/Flamenko';
import FlamenkoAC from './components/Flamenko/FlamenkoAC';
import FlamenkoDF from './components/Flamenko/FlamenkoDF';
import FlamenkoGI from './components/Flamenko/FlamenkoGI';
import FlamenkoJM from './components/Flamenko/FlamenkoJM';
import Jazz from './components/Jazz/Jazz';
import JazzDF from './components/Jazz/JazzDF';
import JazzGI from './components/Jazz/JazzGI';
import JazzJM from './components/Jazz/JazzJM';
import LoginForm from './components/reusableComponents/LoginForm';
import Profile from './components/protectedComponents/Profile';
import AddingUser from './components/protectedComponents/AddingUser';
import AddingEvent from './components/protectedComponents/AddingEvent';
import EditingUser from './components/protectedComponents/EditingUser';
import Chat from './components/protectedComponents/Chat';
import ChatRoom from './components/protectedComponents/ChatRoom';
import StudentTable from './components/protectedComponents/StudentTable';



function App() {
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <React.Fragment>

        
        <NavBar handleLoginClick={handleLoginClick}/>
        <LoginForm isShowLogin={isShowLogin} setIsShowLogIn={setIsShowLogin}/>

      
        <Routes>
          <Route path="/" element={<HomePage/>} />

          <Route path="Groups" element={<Groups/>} />
          <Route path="Competitions"  element={<Competitions/>}/>
          <Route path="Teachers" element={<Teachers/>}/>
          <Route path="About" element={<About/>}/>

          <Route path='/Groups/Ballet' element={<Ballet/>} />
          <Route path='/Groups/Ballet/BalletAC' element={<BalletAC/>} />
          <Route path='/Groups/Ballet/BalletDE' element={<BalletDE/>} />
          <Route path='/Groups/Ballet/BalletEF' element={<BalletEF/>} />
          <Route path='/Groups/Ballet/BalletGI' element={<BalletGI/>} />
          <Route path='/Groups/Ballet/BalletJM' element={<BalletJM/>} />
          <Route path='/Groups/Ballet/BalletPoint' element={<BalletPoint/>} />

          <Route path='/Groups/HipHop' element={<HipHop/>} />
          <Route path='/Groups/HipHop/HipHopAC' element={<HipHopAC/>} />
          <Route path='/Groups/HipHop/HipHopDF' element={<HipHopDF/>} />
          <Route path='/Groups/HipHop/HipHopGI' element={<HipHopGI/>} />
          <Route path='/Groups/HipHop/HipHopJM' element={<HipHopJM/>} />

          <Route path='/Groups/Flamenko' element={<Flamenko/>} />
          <Route path='/Groups/Flamenko/FlamenkoAC' element={<FlamenkoAC/>} />
          <Route path='/Groups/Flamenko/FlamenkoDF' element={<FlamenkoDF/>} />
          <Route path='/Groups/Flamenko/FlamenkoGI' element={<FlamenkoGI/>} />
          <Route path='/Groups/Flamenko/FlamenkoJM' element={<FlamenkoJM/>} />

          <Route path='/Groups/Jazz' element={<Jazz/>} />
          <Route path='/Groups/Jazz/JazzDF' element={<JazzDF/>} />
          <Route path='/Groups/Jazz/JazzGI' element={<JazzGI/>} />
          <Route path='/Groups/Jazz/JazzJM' element={<JazzJM/>} />

          <Route path='/Profile' element={<Profile/>}>
            <Route path="AddingUser" element={<AddingUser />} />
            <Route path="AddingEvent" element={<AddingEvent />}/>
            <Route path="EditingUser" element={<EditingUser/>} />
            <Route path='ChatRoom' element={<ChatRoom/>} />
            <Route path='Chat' element={<Chat/>} />
            <Route path='Users' element={<StudentTable/>} />
          </Route>
          
        </Routes>
       
          


    </React.Fragment>
  );
}

export default App;

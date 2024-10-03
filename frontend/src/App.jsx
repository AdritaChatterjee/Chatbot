import React from 'react'
import Left from './left/left';
import Right from './right/right';
import Logout from './left1/Logout';
function App() {
  return (
    <>
    <div className="flex h-screen">
    <Logout></Logout>
    <Left/>
    <Right/>
    </div>
    
    </>
  );
}

export default App;

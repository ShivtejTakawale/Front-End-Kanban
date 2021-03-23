import React from 'react';
import ProjectManagerPage from '../components/ProjectManagerPage';



function Home() {
  return (
    <div  style={{  
      backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <ProjectManagerPage/>
    </div>
  );
}

export default Home;
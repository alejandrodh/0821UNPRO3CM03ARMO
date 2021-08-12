import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Topcard from './components/Topcard/Topcard';
import Lastproduct from './components/Lastproduct/Lastproduct';
import Categories from './components/Categories/Categories';

function App() {
  return (
 
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              <Topcard />
              <Topcard />
              <Topcard />
            </div>
            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Last Product in DB --> */}
              <div className="col-lg-6 mb-4">
                <Lastproduct />
              </div>
              <div className="col-lg-6 mb-4">
                <Categories />
              </div>
            </div>
            {/* Nueva sección Personajes */}
            <h3 className="h3"> Personajes de películas</h3>
            <div className="row card-container">
              {/* Aquí van las tarjetas de cada personaje */}
             


              {/* Fin zona de tarjetas de cada personaje */}
            </div>
            {/* Fin nueva sección Personajes */}
          </div>
        </div>

      </div>

    </div>
 
  );
}

export default App;

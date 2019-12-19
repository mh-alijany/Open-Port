import React from 'react';
import logo from '../assets/images/icon.png'

const App = () => {
    return (
        <div className="container-fluid">

            <div className="row py-5">
                <img className="m-auto" src={logo} alt="logo" style={{ height: "150px" }} />
            </div>

        </div>
    );
}

export default App;

import React from 'react';
import logo from '../assets/images/icon.png'

const App = () => {
    return (
        <div className="container-fluid">

            <div className="row py-5  mx-3">
                <img className="m-auto" src={logo} alt="logo" style={{ height: "150px" }} />
            </div>

            <div className="row pb-5  mx-3">
                <div className="col-12 mb-2 p-0">
                    <label>Map Ports : </label>
                </div>

                <div className="col pl-0">
                    <input type="number" className="form-control" placeholder="Public port" />
                    {/* <small id="emailHelp" className="form-text text-muted">Errors ... </small> */}
                </div>

                <div className="col-1 text-center p-0">
                    <span>to</span>
                </div>

                <div className="col pr-0">
                    <input type="number" className="form-control" placeholder="Private port" />
                    {/* <small id="emailHelp" className="form-text text-muted">Errors ... </small> */}
                </div>
            </div>

            <div className="row pb-5  mx-3">
                <div className="col-12 p-0 mb-2">
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="Auto" />
                        <label className="custom-control-label" htmlFor="Auto">Set Gateway Auto</label>
                    </div>
                </div>

                <div className="col-12 p-0">
                    <input type="text" className="form-control" placeholder="example : 192.168.1.1" />
                    {/* <small id="emailHelp" className="form-text text-muted">Errors ... </small> */}
                </div>
            </div>
            
        </div>
    );
}

export default App;

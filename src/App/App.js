import logo from '../assets/images/icon.png';
import PortInput from "./Components/PortInput";
import GatewayInput from "./Components/GatewayInput";

const App = () => {

    const [PrivatePort, setPrivatePort] = React.useState("");
    const [PublicPort, setPublicPort] = React.useState("");

    const [Gateway, setGateway] = React.useState("");

    return (
        <div className="container-fluid">

            <div className="row py-5  mx-3">
                <img className="m-auto" src={logo} alt="logo" style={{ height: "150px" }} />
            </div>

            <div className="row pb-5  mx-3">
                <div className="col-12 mb-2 p-0">
                    <label>Map Ports : </label>
                </div>

                <PortInput placeholder="Public port" port={PublicPort} change={setPublicPort} />

                <div className="col-1 text-center p-0">
                    <span>to</span>
                </div>

                <PortInput placeholder="Private port" port={PrivatePort} change={setPrivatePort} />
            </div>

            <div className="row pb-5  mx-3">
                <GatewayInput gateway={Gateway} change={setGateway} />
            </div>

            <div className="row pb-5  mx-3">
                <div className="col-12 mt-2 text-light">
                    <button type="button" className="btn btn-primary d-block m-auto">Map</button>
                </div>
            </div>

        </div>
    );
}

export default App;

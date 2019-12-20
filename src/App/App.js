import logo from '../assets/images/icon.png';
import PortInput from "./Components/PortInput";
import GatewayInput from "./Components/GatewayInput";

import Alert from './Components/Alert';
import { _map, _unMap } from "./main"

const App = () => {

    const [PrivatePort, setPrivatePort] = React.useState("");
    const [PublicPort, setPublicPort] = React.useState("");
    const [Gateway, setGateway] = React.useState("");

    const [Btn, setBtn] = React.useState("Map");

    const [AlertVisible, setAlertVisible] = React.useState(false);
    const [AlertMassage, setAlertMassage] = React.useState({ title: "", body: "" });

    async function handleMap() {
        setBtn("Mapping ...")
        let result = await _map(PrivatePort, PublicPort, Gateway);
        if (result.error) {
            setAlertVisible(true);
            setAlertMassage({ title: "Error", body: result.error.message });
            setBtn("Map")
        } else {
            setBtn("unMap")
        }
    }

    async function handleUnMap() {
        let result = await _unMap(PublicPort);
        if (result.error) {
            setAlertVisible(true);
            setAlertMassage({ title: "Error", body: result.error.message });
            setBtn("unMap")
        } else {
            setBtn("Map")
        }
    }

    function run() {
        if (Btn == "Map") {
            handleMap();
        } else if (Btn == "unMap") {
            handleUnMap();
        }

    }

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
                    <button type="button" className="btn btn-primary d-block m-auto"
                        onClick={run}>{Btn}</button>
                </div>
            </div>

            <Alert
                en={AlertVisible}
                close={() => setAlertVisible(false)}
                message={AlertMassage} />

        </div>
    );
}

export default App;

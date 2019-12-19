import logo from '../assets/images/icon.png';
import PortInput from "./Components/PortInput";
import GatewayInput from "./Components/GatewayInput";

import Modal from 'react-bootstrap4-modal';
import { _map, _unMap } from "./main"

const App = () => {

    const [PrivatePort, setPrivatePort] = React.useState("");
    const [PublicPort, setPublicPort] = React.useState("");

    const [Gateway, setGateway] = React.useState("");

    const [Btn, setBtn] = React.useState("Map");

    const [ModalVisible, setModalVisible] = React.useState(false);
    const [ModalMassage, setModalMassage] = React.useState({ title: "", body: "" });

    function run() {
        if (Btn == "Map") {
            setBtn("Mapping ...")
            _map(PrivatePort, PublicPort, Gateway);
            setBtn("unMap") // need check before set

        } else if (Btn == "unMap") {
            _unMap(PublicPort);
            setBtn("Map")
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

            <Modal visible={ModalVisible} onClickBackdrop={() => setModalVisible(false)}>
                <div className="modal-header">
                    <h5 className="modal-title">{ModalMassage.title}</h5>
                </div>
                <div className="modal-body">
                    <p>{ModalMassage.body}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>
                        close
                     </button>
                </div>
            </Modal>

        </div>
    );
}

export default App;

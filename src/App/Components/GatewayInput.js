
export class GatewayInput extends React.Component {
    constructor(props) {
        super(props);
        this.change = props.change;
        this.state = {
            checkbox: true
        }
    }

    validate(input) {
       input = input || "";
        let regex = /(\d{1,3})\.?/g;
        let ip = input.match(regex) || [];
        let _ip = "";

        if (this.props.gateway.indexOf(input) === 0) return input;

        ip.forEach((part, index) => {
            if (index > 3) return false;
            let dot = '';
            if (index != 3 && (part > 100 || part.endsWith(".")))
                dot = ".";
            _ip += Math.min(255, part) + dot;
        });

        return _ip;
    }

    handleChange(event) {
        let value = this.validate(event.target.value);
        if (value) this.change(value);
    }

    toggleChange() {
        let checkbox = this.state.checkbox;

        if (!checkbox)
            this.change("");

        this.setState({
            checkbox: !checkbox,
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-12 p-0 mb-2">
                    <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="Auto"
                            defaultChecked={this.state.checkbox} onChange={(e) => this.toggleChange()} />
                        <label className="custom-control-label" htmlFor="Auto">Set Gateway Auto</label>
                    </div>
                </div>

                <div className="col-12 p-0">
                    <input type="text" className="form-control" placeholder="example : 192.168.1.1"
                        value={this.props.gateway} onChange={(e) => this.handleChange(e)} disabled={this.state.checkbox} />
                    {/* <small id="emailHelp" className="form-text text-muted">Errors ... </small> */}
                </div>
            </React.Fragment>
        );
    }
}

export default GatewayInput;

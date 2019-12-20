
export class PortInput extends React.Component {
    constructor(props) {
        super(props);
        this.change = props.change;
    }

    handleChange(event) {
        let value = event.target.value;
        if (value == "")
            this.change("");
        else if (value >= 0 && value <= 65536)
            this.change(+value);
    }

    render() {
        return (
            <div className="col p-0">
                <input type="number" className="form-control" placeholder={this.props.placeholder}
                    value={this.props.port}
                    onChange={(e) => this.handleChange(e)} />

                {/* <small id="emailHelp" className="form-text text-muted">Errors ... </small> */}
            </div>
        );
    }
}

export default PortInput;

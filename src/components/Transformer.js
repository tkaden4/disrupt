import React from "react";
import MessageBox from "./MessageBox";

import "./Transformer.sass";

export const TransformedView = ({ name, transformer, content, onChange }) =>
    <div className="transformer">
        <div className="title">{name}</div>
        <div className="content">
            <div className="sub">
                <div className="title">Input</div>
                <MessageBox content={content} onChange={onChange} />
            </div>
            <div className="sub">
                <div className="title">Output</div>
                <MessageBox content={transformer(content)} disabled />
            </div>
        </div>
    </div>;

export class Transformer extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            text: props.defaultContent
        };
    }

    onChange(value) {
        this.setState({
            text: value
        });
    }

    render() {
        let { text } = this.state;
        let { name, transformer } = this.props;
        return <TransformedView name={name} transformer={transformer} content={this.state.text} onChange={this.onChange} />
    }
};

export default Transformer;
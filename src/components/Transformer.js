import React from "react";
import MessageBox from "./MessageBox";
import classnames from "classnames";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./Transformer.sass";

const MAX_CHARS = 2000;

export const MessageLengthIndicator = ({ length }) => (
  <div className={classnames("message-indicator", { bad: length <= 0, good: length > 0 })}>{length} chars left</div>
);

export const TransformedView = ({ name, transformer, content, onChange = _ => {} }) => {
  let output = transformer(content);
  let out_len = output.length;
  let out_diff = MAX_CHARS - out_len;
  return (
    <div className="transformer">
      <div className="title">{name}</div>
      <div className="content">
        <div className="sub">
          <div className="title">
            Input
            {/* <MessageLengthIndicator length={MAX_CHARS - content.length} /> */}
          </div>
          <MessageBox content={content} onChange={onChange} />
        </div>
        <div className="sub">
          <div className="title">
            Output
            <div className="info">
              <MessageLengthIndicator length={out_diff} />
              <CopyToClipboard text={output}>
                <a href="#" className="copy-msg">
                  copy
                </a>
              </CopyToClipboard>
            </div>
          </div>
          <MessageBox content={output} disabled />
        </div>
      </div>
    </div>
  );
};

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
    return <TransformedView name={name} transformer={transformer} content={text} onChange={this.onChange} />;
  }
}

export default Transformer;

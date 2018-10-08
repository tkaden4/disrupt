import React from "react";

import "./MessageBox.sass";

export const MessageBox = ({ content, placeholder, disabled, onChange }) =>
    <div className="message-box">
        <form>
            <textarea placeholder={placeholder} disabled={disabled} onChange={e => { }} onInput={e => onChange(e.target.value)} value={content}>
            </textarea>
        </form>
    </div>;

export default MessageBox;
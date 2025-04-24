import React from 'react';
import { RxCaretRight } from "react-icons/rx";

function CaretButton({text, onClick}) {
    return (
        <button className="caret-button" onClick={() => onClick()}>
            <span>{text}</span>
            <RxCaretRight className="caret-button-caret"/>
        </button>
    );
}

export default CaretButton;
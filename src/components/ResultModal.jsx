import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, result }, ref) {

    const myDialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(){
                myDialog.current.showModal();
            }
        }
    })

    return (
        <dialog className="result-modal" ref={myDialog} >
            <h2>You {result}</h2>
            <p>Your target time was <strong>{targetTime}</strong> seconds</p>
            <p>You stopped the time with <strong>X seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}
);

export default ResultModal;
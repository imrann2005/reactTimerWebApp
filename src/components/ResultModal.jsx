import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const myDialog = useRef();

    
    const formmattedRemTime = (remainingTime / 1000).toFixed(2);

    const score = Math.round( (1 - formmattedRemTime/targetTime) * 100);

    const userLost = formmattedRemTime <= 0 || score < 80;

    useImperativeHandle(ref, () => {
        return {
            open() {
                myDialog.current.showModal();
            }
        }
    })

    return (
        <dialog className="result-modal" ref={myDialog} onClose={onReset} >
            <h2>You {userLost ? <strong>Lost</strong>: <strong>Won</strong>}</h2>
            <p>Your target time was <strong>{targetTime}</strong> seconds</p>
            <p>You stopped the time with <strong>{formmattedRemTime} seconds left</strong></p>
            <p>Your Score : <strong>{ formmattedRemTime > 0 ? score : 'No Score'}</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    )
}
);

export default ResultModal;
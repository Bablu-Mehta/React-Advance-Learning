import { forwardRef } from 'react';

 const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref){
    return(
        <dialog ref={ref} className="result-modal">
            <h2>You { result }</h2>
            <p>The Target time was <string>{ targetTime } seconds.</string></p>
            <p>You Stopped the timer with <strong>X Seconds Left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
})

export default ResultModal;
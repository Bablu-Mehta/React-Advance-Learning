import { forwardRef, useImperativeHandle, useRef } from 'react';

 const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref){
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return(
        <dialog ref={dialog} className="result-modal">
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
export default function ResultModal({ result, targetTime }){
    return(
        <dialog className="result-modal" open>
            <h2>You { result }</h2>
            <p>The Target time was <string>{ targetTime } seconds.</string></p>
            <p>You Stopped the timer with <strong>X Seconds Left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}
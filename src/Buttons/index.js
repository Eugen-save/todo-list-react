import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="section__button">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="section__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
    </button>
                <button
                    className="section__button"
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
    </button>
            </>
        )}
    </div>
);

export default Buttons;
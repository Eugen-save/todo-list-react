import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="section__button">
        {tasks.length > 0 && (
            <>
                <button className="section__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
    </button>
                <button className="section__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
    </button>
            </>
        )};
    </div>
);

export default Buttons;
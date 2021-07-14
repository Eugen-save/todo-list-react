import { Button } from "../styled"
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

const ExampleTaskButton = () => {

    const dispatch = useDispatch();
   
    return (
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadanie
        </Button>
    );
};

export default ExampleTaskButton;
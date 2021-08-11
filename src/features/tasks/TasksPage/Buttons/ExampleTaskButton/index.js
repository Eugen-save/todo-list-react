import { Button } from "../styled"
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoadingExampleTasks } from "../../../tasksSlice";

const ExampleTaskButton = () => {

    const loading = useSelector(selectLoadingExampleTasks);
    const dispatch = useDispatch();
   
    return (
        <Button 
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadanie"}
        </Button>
    );
};

export default ExampleTaskButton;
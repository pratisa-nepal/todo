import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Dispatch, SetStateAction, useState } from "react"
import { useTask } from "@/providers/task-provider"

interface IAddTaskDialogProps {
    setDialog: Dispatch<SetStateAction<boolean>>
}

function AddTaskDialog({ setDialog }: IAddTaskDialogProps) {

    const task = useTask();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleAddTask = () => {
        const response = task.addTask(title, description, deadline);
        if (response) setDialog(false);
    }

    return (
        <div className="absolute flex w-screen h-screen bg-black/60 z-50 text-white  items-center justify-center top-0 ">
            <div className="bg-white p-5 text-black rounded md:min-w-[500px]">
                <h1 className="font-bold text-xl">Add Task</h1>
                <p className="text-slate-600 mb-5">Please provide your task details to add.</p>
                <fieldset className="flex flex-col">
                    <Label>Title:</Label>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task title" />
                </fieldset>
                <fieldset className="flex flex-col mt-3">
                    <Label>Description:</Label>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task details" />
                </fieldset>
                <fieldset className="flex flex-col mt-3">
                    <Label>Deadline:</Label>
                    <Input value={deadline} onChange={(e) => setDeadline(e.target.value)} type="datetime-local" placeholder="Enter task title" />
                </fieldset>
                <fieldset className="flex justify-between mt-5">
                    <Button onClick={() => setDialog(false)} variant={"destructive"}>Cancel</Button>
                    <Button onClick={handleAddTask}>Add Task</Button>
                </fieldset>
            </div>
        </div>
    )
}

export default AddTaskDialog
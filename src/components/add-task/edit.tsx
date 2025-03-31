import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Dispatch, SetStateAction, useState } from "react"
import { useTask } from "@/providers/task-provider"
import { ITask } from "@/types/task"

interface IEditTaskProps {
    initData: ITask
    setDialog: Dispatch<SetStateAction<ITask | undefined>>
}

function UpdateTaskDialog({ setDialog, initData }: IEditTaskProps) {

    const task = useTask();

    const [title, setTitle] = useState(initData.title);
    const [description, setDescription] = useState(initData.description);
    const [deadline, setDeadline] = useState(initData.deadline);

    const handleUpdateTask = () => {
        const response = task.updateTask(initData.id, title, description, deadline, false);
        if (response) setDialog(undefined);
    }

    return (
        <div className="absolute flex w-screen h-screen bg-black/60 z-50 text-white  items-center justify-center top-0 ">
            <div className="bg-white p-5 text-black rounded md:min-w-[500px]">
                <h1 className="font-bold text-xl">Update Task</h1>
                <p className="text-slate-600 mb-5">Please provide your task details to update.</p>
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
                    <Button onClick={() => setDialog(undefined)} variant={"destructive"}>Cancel</Button>
                    <Button onClick={handleUpdateTask}>Update Task</Button>
                </fieldset>
            </div>
        </div>
    )
}

export default UpdateTaskDialog
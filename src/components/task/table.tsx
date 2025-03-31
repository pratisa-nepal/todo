import { MdCheck, MdDelete, MdEdit } from "react-icons/md"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useTask } from "@/providers/task-provider"
import { Button } from "../ui/button";
import { ITask } from "@/types/task";
import { useState } from "react";
import { createPortal } from "react-dom";
import UpdateTaskDialog from "../add-task/edit";


function TaskTable() {
    const task = useTask();
    const [showUpdate, setShowUpdate] = useState<ITask | undefined>()

    const completeTask = (data: ITask) => {
        task.updateTask(data.id, data.title, data.description, data.deadline, true);
    }

    return (
        < Table >
            {showUpdate && createPortal(<UpdateTaskDialog initData={showUpdate} setDialog={setShowUpdate} />, document.getElementById('dialog') as HTMLElement)}
            <TableHeader className="bg-slate-200 mt-2">
                <TableRow>
                    <TableHead className="w-[100px]">S.N</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {task.data.map((d, idx) => {
                    return (
                        <TableRow key={idx}>
                            <TableCell className="font-medium">{idx + 1}</TableCell>
                            <TableCell>{d.title}</TableCell>
                            <TableCell>{d.description}</TableCell>
                            <TableCell>{new Date(d.deadline).toLocaleDateString()} - {new Date(d.deadline).toLocaleTimeString()}</TableCell>
                            <TableCell>{d.completed ? '✅ Completed' : '⚠️ Not Completed'}</TableCell>
                            <TableCell className="text-right flex items-center justify-end gap-2">
                                <Button onClick={() => completeTask(d)}>
                                    <MdCheck size={20} />
                                </Button>
                                <Button onClick={() => setShowUpdate(d)} className="bg-blue-500 hover:bg-blue-700">
                                    <MdEdit size={20} />
                                </Button>
                                <Button onClick={() => task.deleteTask(d.id)} variant={"destructive"}>
                                    <MdDelete size={20} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table >
    )
}

export default TaskTable
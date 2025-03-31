import TaskTable from "@/components/task/table";
import GeneralLayout from "@/layouts/general"
import { useTask } from "@/providers/task-provider"

function TaskPage() {
    const task = useTask();
    document.title = 'Tasks | MyTodoHero'
    return (
        <GeneralLayout>
            <div className="bg-white w-screen flex flex-col">
                <div className="w-[100vw] items-center justify-center flex flex-col">
                    <div className="w-full px-[10vw] py-2 mt-5">
                        <h1 className="font-semibold text-xl">My Task</h1>
                        <p className="text-slate-600">Please view and manage your task below:</p>
                        {task.data.length == 0 && <>
                            <div className="w-full flex flex-col mt-12 items-center justify-center">
                                <img src="/images/empty.svg" className="w-64 h-full" />
                                <h1 className="font-bold text-3xl">Nothing Found</h1>
                                <p className="text-center italic w-1/2 mt-1 text-slate-600">Sorry there are no task available to show right
                                    now, please add
                                    new
                                    task
                                    to see it here.</p>
                            </div>
                        </>}
                        {task.data.length > 0 && <TaskTable />}
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default TaskPage
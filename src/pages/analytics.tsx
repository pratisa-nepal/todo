import GeneralLayout from "@/layouts/general"
import { useTask } from "@/providers/task-provider"

function Analytics() {
    const task = useTask();
    const data = task.getAnalyticsData();
    document.title = 'Analytics | MyTodoHero'
    return (
        <GeneralLayout>
            <div className="bg-white w-screen flex flex-col">
                <div className="w-[100vw] items-center justify-center flex flex-col">
                    <div className="w-4/5 px-[12vw] py-6 mt-12">
                        <h1 className="font-semibold text-xl">My Analytics</h1>
                        <p className="text-slate-600">View your task details and analytics.</p>
                        <div className="grid grid-cols-2 gap-10 mt-5">
                            <div className="flex justify-between py-6 gap-10 bg-rose-200  p-4 rounded">
                                <div>
                                    <h1 className="font-bold text-xl">Total Task</h1>
                                    <p>Total task you have added</p>
                                </div>
                                <h1 className="font-bold text-4xl">{data.total}</h1>
                            </div>
                            <div className="flex justify-between py-6 gap-10 bg-green-200  p-4 rounded">
                                <div>
                                    <h1 className="font-bold text-xl">Completed Task</h1>
                                    <p>Task you have completed.</p>
                                </div>
                                <h1 className="font-bold text-4xl">{data.completed}</h1>
                            </div>
                            <div className="flex justify-between py-6 gap-10 bg-orange-200  p-4 rounded">
                                <div>
                                    <h1 className="font-bold text-xl">Pending Task</h1>
                                    <p>Task that is pending to be completed.</p>
                                </div>
                                <h1 className="font-bold text-4xl">{data.pending}</h1>
                            </div>
                            <div className="flex justify-between py-6 gap-10 bg-pink-200  p-4 rounded">
                                <div>
                                    <h1 className="font-bold text-xl">Overdue Task</h1>
                                    <p>Task that has crossed deadlines.</p>
                                </div>
                                <h1 className="font-bold text-4xl">{data.overdue}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>

    )
}

export default Analytics
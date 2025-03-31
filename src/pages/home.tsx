import GeneralLayout from "@/layouts/general"

function HomePage() {
    document.title = 'Home | MyTodoHero'
    return (
        <GeneralLayout>
            <div className="bg-black/30 h-screen w-screen sticky top-0 left-0 z-40 flex flex-col">
                <div id="hero w-[100vw] h-[100vh] z-50 flex items-center flex-col justify-center">
                    <div className="flex items-center justify-center mt-5">
                        <img src="/images/task.svg" className="w-1/4" />
                    </div>
                    <h1 className="text-white font-bold text-3xl text-center">MyTodoHero - Create, Manage and Monitor your Tasks!<br /></h1>
                    <p className="text-white text-center mt-5">Manage all your task and plan your day easily with my hero todo app.</p>
                    <div className="flex items-center justify-center my-5">
                        <a href="/task"
                            className="bg-white text-black p-2 px-24 rounded cursor-pointer hover:bg-slate-800 transition-all  hover:text-white">Get
                            Started</a>
                    </div>
                </div>
                <div className="absolute -z-20 w-screen h-screen  blur-3xl overflow-hidden top-0 left-0 flex">
                    <div className="w-[80vw] h-[100vh] rotate-30 bg-indigo-600 rounded-full"></div>
                    <div className="w-[100vw] rotate-60 h-[60vh] bg-rose-800 rounded-full"></div>
                    <div className="w-[100vw] rotate-60 h-[100vh] bg-purple-800 rounded-full"></div>
                    <div className="w-[80vw] h-[100vh] rotate-30 bg-indigo-600 rounded-full"></div>
                    <div className="w-[100vw] rotate-60 h-[60vh] bg-rose-800 rounded-full"></div>
                    <div className="w-[100vw] rotate-60 h-[100vh] bg-purple-800 rounded-full"></div>
                </div>
            </div>
        </GeneralLayout>
    )
}

export default HomePage
import { useState } from "react"
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import AddTaskDialog from "../add-task";

function Header() {
    const navigate = useNavigate();
    const [showAddDialog, setShowAddDialog] = useState(false);
    return (
        <>
            {showAddDialog && createPortal(<AddTaskDialog setDialog={setShowAddDialog} />, document.getElementById('dialog') as HTMLElement)}
            <header className='flex items-center md:px-[10vw] z-50 bg-black/50 text-white justify-between p-2'>
                <h1 onClick={() => navigate('/')} className="hover:opacity-60 transition-all cursor-pointer font-bold text-2xl">MyTodoHero</h1>
                <ul className="flex p-2 items-center gap-2">
                    <li onClick={() => navigate('/')} className='hover:text-white transition-600 cursor-pointer transition-all hover:bg-black hover:px-5 p-2 hover:rounded-full'>Home</li>
                    <li onClick={() => navigate('/analytics')} className='hover:text-white transition-600 cursor-pointer transition-all hover:bg-black hover:px-5 p-2 hover:rounded-full'>Analytics</li>
                    <li onClick={() => navigate('/task')} className='hover:text-white transition-600 cursor-pointer transition-all hover:bg-black hover:px-5 p-2 hover:rounded-full'>My Tasks</li>
                    <li onClick={() => setShowAddDialog(true)} className='hover:text-white transition-600 cursor-pointer transition-all hover:bg-black hover:px-5 p-2 hover:rounded-full'>Add Task</li>
                </ul>
            </header>
        </>
    )
}

export default Header
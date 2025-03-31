import { ITask } from "@/types/task";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';


const TaskContext = createContext<{
    data: ITask[];
    getTaskList: () => void;
    addTask: (title: string, description: string, deadline: string) => boolean;
    updateTask: (id: string, title?: string, description?: string, deadline?: string, completed?: boolean) => boolean;
    deleteTask: (taskId: string) => boolean;
    getAnalyticsData: () => {
        total: number,
        completed: number,
        pending: number,
        overdue: number
    }
} | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<ITask[]>([]);

    const getTaskList = () => {
        const local_data_string = localStorage.getItem('task_items');
        if (local_data_string == null) {
            setData([]);
            return;
        } else {
            const data = JSON.parse(local_data_string);
            setData(data);
            return;
        }
    }

    const getAnalyticsData = () => {
        const completedTask = [];
        const overdueTask = [];

        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i].completed) {
                completedTask.push(data[i])
            }

            const today = new Date().toISOString();
            const deadline = new Date(data[i].deadline).toISOString();
            const hasDeadlinePassed = deadline < today;

            if (!data[i].completed && hasDeadlinePassed) {
                overdueTask.push(data[i]);
            }
        }

        return {
            total: data.length,
            completed: completedTask.length,
            pending: data.length - completedTask.length,
            overdue: overdueTask.length
        }

    }

    const addTask = (title: string, description: string, deadline: string) => {
        try {
            const newTaskList = data ? [...data, { id: uuidv4(), title, description, deadline, completed: false }]
                : [{ id: uuidv4(), title, description, deadline, completed: false }];

            setData(newTaskList);
            localStorage.setItem('task_items', JSON.stringify(newTaskList));
            toast.success(`Task added successfully.`)
            return true;
        } catch (error) {
            toast.error(`Error adding task, please try again.`);
            return false;
        }
    }

    const updateTask = (id: string, title?: string, description?: string, deadline?: string, completed?: boolean) => {
        let taskToUpdate: ITask | undefined = undefined;
        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i].id == id) {
                taskToUpdate = data[i]
            }
        }

        if (!taskToUpdate) {
            toast.error(`Task to update was not found.`);
            return false;
        }

        if (title) taskToUpdate.title = title;
        if (description) taskToUpdate.description = description;
        if (deadline) taskToUpdate.deadline = deadline;
        if (completed) taskToUpdate.completed = completed;

        const newArray: ITask[] = [];

        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i].id == id) {
                newArray.push(taskToUpdate)
            } else {
                newArray.push(data[i]);
            }
        }

        setData(newArray);
        localStorage.setItem('task_items', JSON.stringify(newArray));
        toast.success(`Task updated successfully.`);
        return true;
    }

    const deleteTask = (taskId: string) => {
        const confirmation = confirm(`Are you sure to delete this task?`);
        if (!confirmation) return false;
        if (!data.length) {
            toast.error(`There are no task to delete.`);
            return false;
        }
        const newArray: ITask[] = [];
        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i].id != taskId) {
                newArray.push(data[i]);
            }
        }

        setData(newArray);
        localStorage.setItem('task_items', JSON.stringify(newArray));
        toast.success(`Task deleted successfully.`);
        return true;
    }

    useEffect(() => {
        getTaskList();
    }, [])

    return <TaskContext.Provider value={{ data, getTaskList, addTask, updateTask, deleteTask, getAnalyticsData }}>{children}</TaskContext.Provider>
}

export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error(`Can not access the task context in this component.`);
    }
    return context;
}
import create from 'zustand';

interface Task {
    text: string;
    completed: boolean;
}

interface TaskStore {
    tasks: Task[];
    addTask: (text: string) => void;
    deleteTask: (index: number) => void;
    toggleTask: (index: number) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    addTask: (text) => set((state) => ({ tasks: [...state.tasks, { text, completed: false }] })),
    deleteTask: (index) => set((state) => ({ tasks: state.tasks.filter((_, i) => i !== index) })),
    toggleTask: (index) =>
        set((state) => ({
            tasks: state.tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task)),
        })),
}));

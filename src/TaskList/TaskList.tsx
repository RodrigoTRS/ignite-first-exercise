import { Task } from '../Task/Task';
import styles from './TaskList.module.css'

import Clipboard from '../assets/clipboard.svg'

interface TaskListProps {
    tasks: {
        id: string;
        isDone: boolean;
        content: string;
    }[],
    doneTasks: number,
    toggleTaskCompletion: (id: string) => void,
    deleteTask: (id: string) => void,
}

export function TaskList({tasks, toggleTaskCompletion, doneTasks, deleteTask}: TaskListProps) {

    function onToggleTaskCompletion (id: string) {
        toggleTaskCompletion(id);
    }

    function onDeleteTask (id: string) {
        deleteTask(id);
    }

    if (tasks.length != 0) {
            return (
                <div className={styles.wrapper}>
                    <header className={styles.headerWrapper}>
                        <div className={styles.createdTasks}>
                            <p>Tarefas criadas</p>
                            <span>{tasks.length}</span>
                        </div>
                        <div className={styles.doneTasks}>
                            <p>Concluídas</p>
                            <span>{doneTasks} de {tasks.length}</span>
                        </div>
                    </header>

                    {tasks.map(task => {
                        return (
                            <Task
                                key={task.id}
                                id={task.id}
                                onToggleTaskCompletion={onToggleTaskCompletion}
                                onDeleteTask={onDeleteTask}
                                isDone={task.isDone}
                                content={task.content}
                            />
                        )
                    })}
                </div>
            )
    } else {
        return (
            <div className={styles.wrapper}>
                <header className={styles.headerWrapper}>
                    <div className={styles.createdTasks}>
                        <p>Tarefas criadas</p>
                        <span>{tasks.length}</span>
                    </div>
                    <div className={styles.doneTasks}>
                        <p>Concluídas</p>
                        <span>0 de {tasks.length}</span>
                    </div>
                </header>

                <div className={styles.noTaskWrapper}>
                    <img
                        src={Clipboard}
                    />
                    <h2>Você ainda não tem tarefas cadastradas</h2>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        )
    }
}
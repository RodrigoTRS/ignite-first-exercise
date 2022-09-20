import { Trash } from 'phosphor-react';
import styles from './Task.module.css'

interface TaskProps {
    id: string;
    isDone: boolean;
    content: string;
    onToggleTaskCompletion: (id: string) => void;
    onDeleteTask: (id: string) => void;
}

export function Task({id, isDone, content, onToggleTaskCompletion, onDeleteTask}: TaskProps) {

    function handleTaskCompletionToggling () {
        onToggleTaskCompletion(id)
    }

    function handleTaskDeletion () {
        onDeleteTask(id)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={isDone}
                    onChange={handleTaskCompletionToggling}
                />
                <span
                    className={styles.checkmark}
                    onClick={handleTaskCompletionToggling} 
                />

                <p> {content} </p>
            </div>

            <button>
                <Trash
                    className={styles.trashIcon}
                    size={20}
                    onClick={handleTaskDeletion} 
                />
            </button>
        </div>
    )
}
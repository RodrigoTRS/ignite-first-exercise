import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './TaskInput.module.css'

interface TaskInputProps {
    addNewTask: (content: string) => void;
}

export function TaskInput({addNewTask}: TaskInputProps) {

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        addNewTask(newTaskText);
        setNewTaskText('');
    }

    function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setNewTaskText(event.target.value);
    }

    function handleNewInvalidTask(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Campo obrigatório!");
    }
    
    const isNewTaskEmpty = newTaskText.length == 0;

    return (
        <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
                <input
                    type="text"
                    name="task"
                    value={newTaskText}
                    onChange={handleNewTaskTextChange}
                    placeholder="Adicione uma nova tarefa"
                    onInvalid={handleNewInvalidTask}
                    required
                />
                <footer>
                    <button
                        type="submit"
                        disabled={isNewTaskEmpty}
                    >
                        Criar
                        <PlusCircle
                            size={20}
                        />
                    </button>
                </footer>
        </form>
    )
}
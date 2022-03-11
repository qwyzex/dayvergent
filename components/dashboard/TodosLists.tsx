import useTodos from "../../hooks/todo/useTodos";
import styles from "./TodosLists.module.sass";

export default function TodosLists() {
    const todos = useTodos();

    return (
        <div className={styles.container}>
            <ul className={styles.wraper}>
                {todos?.length
                    ? todos.map((todo, index) => (
                          <li className={styles.todosItem} key={index}>
                              {todo.title}
                          </li>
                      ))
                    : "ALL CLEAR!"}
            </ul>
        </div>
    );
}

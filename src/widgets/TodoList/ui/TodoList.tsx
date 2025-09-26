import { classNames } from "shared/lib/classNames/classNames";
import cls from "./TodoList.module.scss";
import { useTypedSelector } from "shared/lib/useTypedSelector/useTypedSelector";
import { useEffect } from "react";
import { useActions } from "shared/lib/useActions/useActions";
import { Button } from "shared/ui/Button/Button";

interface TodoListProps {
    className?: string;
}

export const TodoList: React.FC = ({ className }: TodoListProps) => {
    const _MAX_LIMIT_ = 200;
    const {
        todos,
        isLoading,
        error,
        page,
        limit
    } = useTypedSelector(state => state.todo);

    const { fetchTodos, setTodoPage } = useActions();

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page])

    if ( isLoading ) {
        return <h1>Идет загрузка...</h1>
    };

    if ( error ) {
        return <h1>Произошла ошибка: {error}</h1>
    };

    const changePage = (dec: boolean) => {
        if (dec) {
            setTodoPage(page - 1)
        } else {
            setTodoPage(page + 1)
        }
    };

    return (
        <div className={ classNames(cls.TodoList, {}, [className]) }>
            <div className={cls.todos}>
                { todos.map(todo => 
                    <div key={ todo.id }>
                        { todo.id } - { todo.title }
                    </div>
                )}
            </div>
            <div className={cls.pageSelector}>
                <Button
                    onClick={() => changePage(true)}
                >
                    {"<--"}
                </Button>
                <div>
                    {page}
                </div>
                <Button
                    onClick={() => changePage(false)}
                >
                    {"-->"}
                </Button>
            </div>
        </div>
    );
};

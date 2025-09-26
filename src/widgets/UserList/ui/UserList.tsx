import { classNames } from "shared/lib/classNames/classNames";
import cls from "./UserList.module.scss";
import { useSelector } from "react-redux";
import { useTypedSelector } from "shared/lib/useTypedSelector/useTypedSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "entities/store/action-creators/user";
import { useActions } from "shared/lib/useActions/useActions";

interface UserListProps {
    className?: string;
}

export const UserList: React.FC = ({ className }: UserListProps) => {
    const { isLoading, error, users} = useTypedSelector(state => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers()
    }, []);

    if ( isLoading ) {
        return <h1>Идет загрузка...</h1>
    };

    if ( error ) {
        return <h1>Произошла ошибка: {error}</h1>
    };

    return (
        <div className={ classNames(cls.UserList, {}, [className]) }>
            { users.map(user => 
                <div key={user.id}>
                    {user.name}
                </div>
            )}
        </div>
    );
};

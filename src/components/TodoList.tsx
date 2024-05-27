import { FC } from 'react';

import TodoItem from './TodoItem';

import { Status } from '../types/Status';
import { Todo } from '../types/Todo';

interface Props {
  todos: Todo[];
  selectedStatus: Status;
  deleteTodo: (todoId: number) => void;
  tempTodo: Todo | null;
  loadingTodosIds: number[];
}

const TodoList: FC<Props> = ({
  todos,
  deleteTodo,
  tempTodo,
  loadingTodosIds,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          isLoading={loadingTodosIds.includes(todo.id)}
        />
      ))}

      {tempTodo && <TodoItem todo={tempTodo} isLoading={true} />}
    </section>
  );
};

export default TodoList;
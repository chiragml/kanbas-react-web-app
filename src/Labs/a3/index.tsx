import Add from './Add';
import Classes from './Classes';
import ConditionalOutput from './ConditionalOutput';
import Highlight from './Highlight';
import JavaScript from './JavaScript';
import StylesFunc from './Styles';
import { useSelector } from 'react-redux';
import { LabState } from '../store';
import PathParameters from './routing/PathParameters';
import TodoItem from './todo/TodoItem';
import TodoList from './todo/TodoList';
function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <ConditionalOutput />
      <StylesFunc />
      <Classes />
      <PathParameters />
      <JavaScript />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
        doloremque, ipsam ullam quis neque explicabo excepturi! Optio, ut. Quasi
        voluptatum nesciunt aliquam expedita ipsa. Natus delectus consequuntur
        voluptatibus maxime quidem.
      </Highlight>
      <Add a={3} b={4} />
      <TodoList />
    </div>
  );
}
export default Assignment3;

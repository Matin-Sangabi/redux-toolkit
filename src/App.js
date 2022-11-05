import './App.css';
import {Provider} from 'react-redux';
import { store } from './components/features/store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AddTodoForms from './components/todos/AddTodosForm';
import TodoList from './components/todos/TodoList';
import TotalCompleteTodo from './components/todos/TotalCompleteTodos';



function App() {
  return (
    <Provider store={store}>
      <div className="App  mx-auto" >
        <AddTodoForms/>
        <TodoList/>
        <TotalCompleteTodo/>
      </div>
    </Provider>
  );
}

export default App;

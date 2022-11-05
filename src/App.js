import './App.css';
import {Provider} from 'react-redux';
import { store } from './components/features/store';
import Counter from './components/features/counter/counter';
import USers from './components/features/users/users';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
        <USers/>
      </div>
    </Provider>
  );
}

export default App;

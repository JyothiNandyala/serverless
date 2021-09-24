import Products from './components/Products';
import Header from './components/Header';
import useNotifications from './hooks/useNotification';
import {useEffect} from 'react';
function App() {
  const {notifications, createNotification} = useNotifications();

  useEffect(() => {
    // calculateSum()
    createNotification('added');
  }, []);

  return (
    <div className='container'>
      <Header />
      <h1 className='text-white'>Good Green Groceries</h1>
      {notifications ? <p>productAdded</p> : <p>good green</p>}
      <Products />
    </div>
  );
}

export default App;

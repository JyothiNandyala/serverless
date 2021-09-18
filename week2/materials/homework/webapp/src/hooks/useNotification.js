import {useState} from 'react';

function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  const createNotification = (text) => {
    // hint: use setTimeout
    setNotifications(text);
  };

  return {notifications, createNotification};
}

export default useNotifications;

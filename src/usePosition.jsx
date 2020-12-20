import {useState, useEffect} from 'react';

export default function usePosition() {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({coords}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError ('Geolocation is not supported');
      return;
    }

    watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return {...position, error};
}

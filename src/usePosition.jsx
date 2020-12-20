import {useState, useEffect} from 'react';

export default function usePosition() {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);
}

import React from 'react';
import useFetchJobs from './useFetchJobs';
function App() {
  const { jobs, loading, error} = useFetchJobs();

}

export default App;

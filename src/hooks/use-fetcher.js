import {useState, useEffect} from 'react';

const useFetcher = (action, silently, args) => {
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);
 const [data, setData] = useState(null);

 const loadData = async () => {
  try {
   if (!silently) {
    setLoading(true);
   }
  const actionData = await action(args);
   setData(actionData);
  } catch (e) {
   // eslint-disable-next-line no-console
   console.log(e);
   setError(e);
  } finally {
   if (!silently) {
    setLoading(false);
   }
  }
 };
 useEffect(() => {
  loadData();
 }, [action]);

 return [data, loading, error, loadData, setData];
};

export default useFetcher;

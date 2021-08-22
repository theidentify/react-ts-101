import React, { useEffect, useState } from 'react';

const api = (id: number) => new Promise<number>((resolve, reject) => {});

function useData(id: number) {
  const [data, setData] = useState<number>();
  useEffect(() => {
    (async function () {
      setData(await api(id));
    });
  }, [id]);
  return data;
}

// what if api dont have type?
// - do not thing (it's infer type to any) or cast type ex. getData() as string

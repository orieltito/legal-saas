'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [clients, setClients] = useState([]);

useEffect(() => {
  fetch('https://legal-saas-production-8e02.up.railway.app/clients', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log("API:", data); // debug
      setClients(data);
    })
    .catch(err => console.error(err));
}, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Clientes</h1>

      {Array.isArray(clients) && clients.map((c: any) => (
  <div key={c.id}>{c.name}</div>
))}
    </div>
  );
}
"use client"; 

import Image from "next/image";
import { useEffect, useState } from "react"; 
import axios from "axios"; 

export default function Home() {
  const [name, setName] = useState(''); 

  
  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get('http://localhost:3031/name'); 
        setName(response.data.name); 
      } catch (error) {
        console.error('Error fetching name:', error);
      }
    };

    fetchName(); 
  }, []); 

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>List of Names</h1>
      <h2>My Name is: {name}</h2> {/* Display the name */}
    </div>
  );
}

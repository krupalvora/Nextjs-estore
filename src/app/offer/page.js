// "use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const base_url='http://127.0.0.1:8000';
const Offers = async () => {
  const response= await fetch('http://127.0.0.1:8000/api/method/estore.e_store.api.init_api.get_offers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  let offers = data.message.data

  return (
    <div>

      {offers.map((element,index) => (
        <>
        <Link href={"/offer/"+element.name}>
        <p key={index}> {element.offer_name} </p>
        <p key={index}> {element.name} </p>
        <Image
        src={base_url+element.image}
        width={200} height={200} alt={element.offer_name}
        /></Link>
        </>
      ))}
  
    </div>
  )
}
export default Offers

// <h1>{category_data[0]}</h1>

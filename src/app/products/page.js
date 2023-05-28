// "use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const base_url='http://127.0.0.1:8000';
// import { useRouter } from 'next/router';

const page = async () => {
  const response= await fetch('http://127.0.0.1:8000/api/method/estore.e_store.api.product.get_products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  let product_data = data.message.data;
  // <div>product {JSON.stringify(data)}</div>
  return (
    <div>

{product_data.map((element,index) => (
  <>
  <h1>{element.name}</h1>
  <Image
    src={base_url+element.image1}
    width={50}
    height={50}
    alt="Picture of the author"
  />
  <p>Price is : {element.price}</p>
  <p>Description is : {element.description}</p>
  </>
))}

  </div>
  )
}
export default page


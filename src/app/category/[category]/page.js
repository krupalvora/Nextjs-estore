// "use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


const base_url='http://127.0.0.1:8000';
const page = async (props) => {
  const category =props.params.category;
  console.log(category);
  const response= await fetch('http://127.0.0.1:8000/api/method/estore.e_store.api.product.get_category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      "category":category
    })
  })
  const data = await response.json()
  let product_data = data.message.data;

  return (
    <div>

    {product_data.map((element,index) => (
        <>
        <Link href={"/products/"+element.name}>
        <h1>{element.name}</h1>
        <Image
          src={base_url+element.image1}
          width={50} height={50} alt="Picture of the author"
        />
        <p>Price is : {element.price}</p>
        </Link>
        </>
      ))}

  </div>
  )
}
export default page



// "use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const base_url='http://127.0.0.1:8000';
const Category = async () => {
  const response= await fetch('http://127.0.0.1:8000/api/method/estore.e_store.api.init_api.get_categorys', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  let category_data = data.message.data

  return (
    <div>

      {category_data.map((element,index) => (
        <>
        <Link href={"/category/"+element.category}>
        <p key={index}> {element.category} </p>
        <Image
        src={base_url+element.image}
        width={50} height={50} alt="Picture of the author"
        />
        </Link>
        </>
      ))}
  
    </div>
  )
}
export default Category

// <h1>{category_data[0]}</h1>

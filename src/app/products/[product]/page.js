// "use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// import { useRouter } from 'next/router';
const base_url='http://127.0.0.1:8000';
const product =async (props) => {
  console.log(props.params.product);
  const product =props.params.product;
  const response= await fetch('http://127.0.0.1:8000/api/method/estore.e_store.api.product.get_product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      "product_name":product
    })
  })
  const data = await response.json()
  console.log('----------------------')
  console.log(data.json);
  // let product_data = JSON.stringify(data.message.data);
  let product_data = data.message.data;
  return (
    <div>
    <h1>{product_data[0]}</h1>
    <Image
      src={base_url+product_data[3]}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <p>Price is : {product_data[1]}</p>
    <p>Description is : {product_data[2]}</p>
    </div>
  )
}

export default product
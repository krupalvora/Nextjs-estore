import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <Link href="/"><ul>Logo</ul></Link>
      <Link href="/"><ul>Home</ul></Link>
      <Link href="/cart"><ul>Cart</ul></Link>
      <Link href="/contact"><ul>ContactUs</ul></Link>
      <Link href="/login"><ul>User</ul></Link>
    </div>
  )
}

export default Navbar
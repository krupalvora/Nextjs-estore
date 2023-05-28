import Image from 'next/image'
import Category from './category/page'
import Navbar from './navbar/page'
import Offers from './offer/page'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Offers/>
    <Category/>
    </>
  )
}

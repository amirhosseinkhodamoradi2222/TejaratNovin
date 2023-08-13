import Image from 'next/image'
import React from 'react'
import logo3 from '../../assets/image/logo3.png'
import Link from 'next/link'

function Product() {
  return (
    <div className='bg-backgroundColor'>
        <Image src={logo3} width={250} height={20} />
        <p className='font-Medium'>سرامیک</p>
        <p className='font-light'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <Link href={'/'}><p className='font-light text-centerv text-whate bg-secondaryColor2 rounded py-2'> جزییاتت </p></Link>
    </div>
  )
}

export default Product
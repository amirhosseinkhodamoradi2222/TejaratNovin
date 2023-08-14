import Image from 'next/image'
import React from 'react'
import logo3 from '../../assets/image/logo3.png'
import Link from 'next/link'

function Product() {
  return (
    <div className='bg-whate pb-4 shadow rounded-lg'>
        <Image src={logo3} width={260} className='rounded-t-lg' height={10} />
        <p className='font-Medium pr-2 pt-2'>سرامیک</p>
        <p className='font-light px-2 pt-2'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p className='font-light text-xs bg-primaryColor rounded-lg mr-2 w-24 text-whate text-center mt-2 py-1 '>موجود در انبار</p>
        <Link href={'/'}><p className='font-light text-center mt-4 text-whate mx-2 bg-secondaryColor2 rounded py-2'> جزییاتت </p></Link>
    </div>
  )
}

export default Product
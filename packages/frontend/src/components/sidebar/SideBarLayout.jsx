'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/Link'
import Image from 'next/Image'
import './sidebar.css'
import icon1 from '@/assets/icons/menu_sidebar.png'
import stats from '@/assets/icons/stats.png'
import people from '@/assets/icons/people.png'
import sold from '@/assets/icons/sold.png'
import bank from '@/assets/icons/bank.png'
import write from '@/assets/icons/write.png'
import discount from '@/assets/icons/discount.png'
import logout from '@/assets/icons/logout.png'
import user from '@/assets/icons/icon-group.png'

export default function SideBarLayout() {
    return (
        <aside className=' m-0 p-0 h-100 d-flex flex-column justify-between'>
            <div className='h-100 d-flex flex-column align-items-start justify-content-evently'>
                <ul className='h-100 w-100 p-0 d-flex flex-column align-items-center justift-content-around'>
                            
                    <li className='my-4'>
                        <Link href="/">
                        <Image src={icon1}
                            width={20}
                            height={20}>
                        </Image>
                        </Link>
                    </li>

                    <li className='my-4'>
                        <Link href='/'>
                        <Image src={stats}
                            width={20}
                            height={20}>
                        </Image>
                        </Link>
                    </li>

                    <li className='my-4'>
                        <Link href='/'>
                        <Image src={people}
                            width={20}
                            height={20}>
                        </Image>
                        </Link>
                    </li>
                    <li className='my-4'>
                        <Link href='/'>
                        <Image src={sold}
                            width={20}
                            height={20}>
                        </Image>
                        </Link>
                    </li>
                    <li className='my-4'>
                        <Link href="/">
                        <Image src={bank}
                            width={20}
                            height={20}>
                        </Image>
                        </Link>
                    </li>
                    <li className='my-4'>
                        <Link href="/">
                        <Image src={write}
                            width={20}
                            height={20}>
                        </Image>
                        </Link>
                    </li>
                    <li className='my-4'>
                        <Link href="/">
                        <Image src={discount}
                            width={20}
                            height={20}>
                        </Image>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='w-100 h-25 d-flex flex-column align-items-start justify-content-around'>
                <ul className='h-100 w-100 p-0 d-flex flex-column align-items-center justify-content-around'>
                    <li className='my-5 py-3'>
                    <Link href="/">
                        <Image
                            src={user}
                            width={25}
                            height={25}
                        />
                         </Link>
                    </li>
                    <li className='my-5 py-3'>
                    <Link href="/">
                        <Image
                            src={logout}
                            width={25}
                            height={25}
                        />
                         </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

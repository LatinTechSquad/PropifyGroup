'use client'
import React from 'react'
import { useAuth } from '../../../contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import './sidebar.css';
import {
    Card,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels
} from '@tremor/react';
import icon1 from '@/assets/icons/menu_sidebar.png';
import stats from '@/assets/icons/stats.png';
import people from '@/assets/icons/people.png';
import sold from '@/assets/icons/sold.png';
import bank from '@/assets/icons/bank.png';
import write from '@/assets/icons/write.png';
import discount from '@/assets/icons/discount.png';
import logoutIcon from '@/assets/icons/logout.png';
import user from '@/assets/icons/icon-group.png';
import Dashboard from '@/app/dashboard/components/dashboard/Dashboard';
import Zone from '@/app/dashboard/components/zone/zone';
import Rate from '@/app/dashboard/components/rate/rate';
import Percentage from '@/app/dashboard/components/percentage/percentage';
import Metrics from '@/app/dashboard/components/metrics/metrics';
import Comune from '@/app/dashboard/components/commune/commune';
import Chat from '@/app/dashboard/components/chat/chat';
import Payments from '@/app/dashboard/components/payments/payments';
import Recent from '@/app/dashboard/components/recent/recent';

export default function Asidebar() {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };
    return (
        <aside className="sidebar">
            <TabGroup className="sidebar__nav">
                <TabList defaultValue={0} variant="solid" className="sidebar__list">

                    <Tab value={0} className="sidebar__item">
                        
                    </Tab>
                    <Tab value={1} className="sidebar__item">
                        <Link href="">
                            <Image src={icon1} alt="Home" width={24} height={24} />
                        </Link>
                    </Tab>
                    <Tab value={2} className="sidebar__item">
                        <Link href="">
                            <Image src={stats} alt="Stats" width={24} height={24} />
                        </Link>
                    </Tab>
                    <Tab value={3} className="sidebar__item">
                        <Link href="">
                            <Image src={people} alt="People" width={24} height={24} />
                        </Link>
                    </Tab>
                    <Tab value={4} className="sidebar__item">
                        <Link href="">
                            <Image src={sold} alt="Sales" width={24} height={24} />
                        </Link>
                    </Tab>
                    <Tab value={5} className="sidebar__item">
                        <Link href="">
                            <Image src={bank} alt="Bank" width={24} height={24} />
                        </Link>
                    </Tab>
                    <Tab value={6} className="sidebar__item">
                        <Link href="">
                            <Image src={write} alt="Write" width={24} height={24} />
                        </Link>
                    </Tab>
                    <Tab value={7} className="sidebar__item">
                        <Link href="">
                            <Image src={discount} alt="Discount" width={24} height={24} />
                        </Link>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card>
                            <Dashboard />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <Zone />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <Rate />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <Percentage />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className='grid grid-cols-4 gap-2'>
                            <Metrics titleOut={'Total de Propiedades Listadas'} dataTitle1={'Deptos.'} data1={'50'} dataTitle2={'Casa'} data2={'44'} dataTitle3={'Proyectos'} data3={'10'} />
                            <Metrics titleOut={'Ingresos Totales'} dataTitle1={'Compras'} data1={'$5,4 Mill'} dataTitle2={'Ventas'} data2={'$17.4 Mill'} dataTitle3={'Alquileres'} data3={'$10.3 Mill'} />
                            <Metrics titleOut={'Total de Transacciones Realizadas'} dataTitle1={'Comprass'} data1={'50'} dataTitle2={'Ventas'} data2={'44'} dataTitle3={'Alquileres'} data3={'10'} />
                            <Metrics titleOut={'Total de Usuarios Activos'} dataTitle1={'Compradores'} data1={'50'} dataTitle2={'Vendedores'} data2={'44'} dataTitle3={'Inmobiliarias'} data3={'10'} />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <Comune />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card>
                            <Chat />
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card className='flex flex-row gap-2'>
                            <Payments />
                            <Recent />
                        </Card>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
            <div className="sidebar__user">
				<ul className="sidebar__list">
					<li className="sidebar__item">
						<Link href="/profile">
							<Image src={user} alt="User Profile" width={28} height={28} />
						</Link>
					</li>
					<li className="sidebar__item" onClick={handleLogout}>
						<Image src={logoutIcon} alt="Logout" width={28} height={28} />
					</li>
				</ul>
			</div>
        </aside>
    )
}

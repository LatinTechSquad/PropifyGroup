'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './sidebar.css';

import icon1 from '@/assets/icons/menu_sidebar.png';
import stats from '@/assets/icons/stats.png';
import people from '@/assets/icons/people.png';
import sold from '@/assets/icons/sold.png';
import bank from '@/assets/icons/bank.png';
import write from '@/assets/icons/write.png';
import discount from '@/assets/icons/discount.png';
import logoutIcon from '@/assets/icons/logout.png';
import user from '@/assets/icons/icon-group.png';
import { useAuth } from '../../../contexts/AuthContext';

export default function Sidebar() {
	const { logout } = useAuth();

	const handleLogout = () => {
		logout();
	};

	return (
		<aside className="sidebar">
			<nav className="sidebar__nav">
				<ul className="sidebar__list">
					<li className="sidebar__item">
						<Link href="/dashboard">
							<Image src={icon1} alt="Home" width={24} height={24} />
						</Link>
					</li>
					<li className="sidebar__item">
						<Link href="/stats">
							<Image src={stats} alt="Stats" width={24} height={24} />
						</Link>
					</li>
					<li className="sidebar__item">
						<Link href="/people">
							<Image src={people} alt="People" width={24} height={24} />
						</Link>
					</li>
					<li className="sidebar__item">
						<Link href="/sales">
							<Image src={sold} alt="Sales" width={24} height={24} />
						</Link>
					</li>
					<li className="sidebar__item">
						<Link href="/bank">
							<Image src={bank} alt="Bank" width={24} height={24} />
						</Link>
					</li>
					<li className="sidebar__item">
						<Link href="/write">
							<Image src={write} alt="Write" width={24} height={24} />
						</Link>
					</li>
					<li className="sidebar__item">
						<Link href="/discount">
							<Image src={discount} alt="Discount" width={24} height={24} />
						</Link>
					</li>
				</ul>
			</nav>
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
	);
}

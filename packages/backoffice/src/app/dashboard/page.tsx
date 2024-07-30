'use client';

import React, { useEffect } from 'react';
import './dashboard.css';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

import Metrics from '@/app/dashboard/components/metrics/metrics';
import Chat from '@/app/dashboard/components/chat/chat';
import Rate from '@/app/dashboard/components/rate/rate';
import Commune from '@/app/dashboard/components/commune/commune';
import Income from '@/app/dashboard/components/income/income';
import Payments from '@/app/dashboard/components/payments/payments';
import Percentage from '@/app/dashboard/components/percentage/percentage';
import Recent from '@/app/dashboard/components/recent/recent';
import Transactions from './components/transactions/transactions';
import Users from './components/users/users';
import Zone from '@/app/dashboard/components/zone/zone';

export default function Page() {
  const { isAuthenticated, isHydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated || !isAuthenticated) {
    return null;
  }
  return (
    <div className='dashboard'>
      <section className='container-fluid'>
        <h2 className='h2'>Dashboard</h2>
        <article className='stats row'>
          <div className='col-6 p-1'>
            <Zone />
          </div>

          <div className='col-3 p-1'>
            <Rate />
          </div>

          <div className='col-3 p-1'>
            <Percentage />
          </div>
        </article>

        <article className='metrics row'>
          <div className='col-3 p-1'>
            <Metrics />
          </div>
          <div className='col-3 p-1'>
            <Income />
          </div>
          <div className='col-3 p-1'>
            <Transactions />
          </div>
          <div className='col-3 p-1'>
            <Users />
          </div>
        </article>

        <article className='row pagos'>
          <div className='col-6 p-1'>
            <Commune />
          </div>
          <div className='col-3 p-1'>
            <Chat />
          </div>
          <div className='col-3 p-1 d-flex flex-column align-items-stretch justify-content-stretch'>
            <Payments />
            <Recent />
          </div>
        </article>
      </section>
    </div>
  );
}

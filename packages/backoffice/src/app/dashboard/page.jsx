'use client';

import React, { useEffect } from 'react';
import './dashboard.css';
import { useAuth } from '@/modules/Auth/interfaces/AuthContext';
import { useRouter } from 'next/navigation';

import Metrics from '@/components/metrics/MetricsLayout';
import Chat from '@/components/chat/ChatLayout';
import Zona from '@/components/zona/ZonaLayout';
import Taza from '@/components/taza/TazaLayout';
import Porcentaje from '@/components/porcentaje/PorcentajeLayout';
import Ingresos from '@/components/Ingresos/IngresosLayout';
import Pagos from '@/components/pagos/PagosLayout';
import Comunas from '@/components/comuna/ComunaLayout';
import Reciente from '@/components/recientes/RecientesLayout';
import Transacciones from '@/components/transacciones/TransaccionesLayout';
import Usuarios from '@/components/usuarios/UsuariosLayout';

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
		<div className="dashboard">
			<section className="container-fluid">
				<h2>Dashboard</h2>
				<article className="stats row">
					<div className="col-6 p-1">
						<Zona />
					</div>

					<div className="col-3 p-1">
						<Taza />
					</div>

					<div className="col-3 p-1">
						<Porcentaje />
					</div>
				</article>

				<article className="metrics row">
					<div className="col-3 p-1">
						<Metrics />
					</div>
					<div className="col-3 p-1">
						<Ingresos />
					</div>
					<div className="col-3 p-1">
						<Transacciones />
					</div>
					<div className="col-3 p-1">
						<Usuarios />
					</div>
				</article>

				<article className="row pagos">
					<div className="col-6 p-1">
						<Comunas />
					</div>
					<div className="col-3 p-1">
						<Chat />
					</div>
					<div className="col-3 p-1 d-flex flex-column align-items-stretch justify-content-stretch">
						<Pagos />
						<Reciente />
					</div>
				</article>
			</section>
		</div>
	);
}

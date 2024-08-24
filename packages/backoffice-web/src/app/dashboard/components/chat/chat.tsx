import React from 'react';
import './chat.css';
import Image from 'next/image';
import group from '@/assets/icons/icon-group.png';
import { Card } from '@tremor/react';

export default function Chat() {
	return (
		<Card className=" shadow-lg h-100 z-3" decoration="top"decorationColor="indigo">
			<h6 className="m-3">Mensajes recientes</h6>
			<div className="chart">
				<h6 className="">Sopote Técnico</h6>
				<div className="buzon">
					<div className="buzon-message">
						<div className="message w-100">
							<picture className="message-avatar">
								<Image src={group} width={20} height={20} alt="" />
							</picture>
							<div className="d-flex flex-row align-items-center px-1">
								<div className="message-body mx-1">
									<small className="message-text">Miembro 1</small>
									<small className="message-text">Estamos trabajando para reparar los...</small>
								</div>
								<div className="d-flex flex-column align-items-center h-100">
									<small>9:30</small>
									<small className="message-notification">2</small>
								</div>
							</div>
						</div>

						<div className="message w-100">
							<picture className="message-avatar">
								<Image src={group} width={20} height={20} alt="" />
							</picture>
							<div className="d-flex flex-row align-items-center px-1">
								<div className="message-body mx-1">
									<small className="message-text">Miembro 2</small>
									<small className="message-text">Ya están resueltas las consultas por...</small>
								</div>
								<div className="d-flex flex-column align-items-center h-100">
									<small className="message-text">17:20</small>
									<small className="message-notification">1</small>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h6>Marketing</h6>
				<div className="buzon">
					<div className="buzon-message">
						<div className="message w-100">
							<picture className="message-avatar">
								<Image src={group} width={20} height={20} alt="" />
							</picture>
							<div className="d-flex flex-row align-items-center px-1">
								<div className="message-body mx-1">
									<small className="message-text">Miembro 1</small>
									<small className="message-text">Agendamos un call para el viernes.</small>
								</div>
								<div className="d-flex flex-column align-items-center h-100">
									<small className="message-text">20/03/2024</small>
									<small className="message-text">none</small>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h6>Agentes</h6>
				<div className="buzon">
					<div className="buzon-message">
						<div className="message w-100">
							<picture className="message-avatar">
								<Image src={group} width={20} height={20} alt="" />
							</picture>
							<div className="d-flex flex-row align-items-center px-1">
								<div className="message-body mx-1">
									<small className="message-text">Agente 1</small>
									<small className="message-text">Excelente. Muchas gracias.</small>
								</div>
								<div className="d-flex flex-column align-items-center h-100">
									<small className="message-text">12/03/2024</small>
									<small className="message-text">2</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}

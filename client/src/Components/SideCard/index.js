import React from 'react';
import './style.css';
import { Card, CardTitle, CardBody, CardHeader } from 'reactstrap';

const SideCard = () => {
	return (
		<div>
			<Card id="card">
				<CardBody className="nopadding bg-secondary">
					<CardHeader className="text-warning bg-dark">Step 1:</CardHeader>
					<CardTitle className="text-white">
						Type in Start and End Destinations
					</CardTitle>
				</CardBody>
			</Card>
			<Card id="card">
				<CardBody className="nopadding bg-secondary">
					<CardHeader className="text-warning bg-dark">Step 2:</CardHeader>
					<CardTitle className="text-white">
						Click On The Highlighted Route To Show Weather Data On Route
					</CardTitle>
				</CardBody>
			</Card>
			<Card id="card">
				<CardBody className="nopadding bg-secondary">
					<CardHeader className="text-warning bg-dark">Optional:</CardHeader>
					<CardTitle className="text-white">
						Once You're Logged In, Click On "Search History" For Old Routes
					</CardTitle>
				</CardBody>
			</Card>
		</div>
	);
}

export default SideCard;

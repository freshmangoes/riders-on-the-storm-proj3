import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { UserLogin } from '../UserLogin/index';

export const UserLoginModal = (props) => {
	const { buttonLabel, className } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="dark" onClick={toggle}>
				{buttonLabel}
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader className="bg-dark text-white" toggle={toggle}>
					Login as an existing user below, or sign up for a new user account!
				</ModalHeader>
				<ModalBody>
					<UserLogin toggle={toggle} />
				</ModalBody>
			</Modal>
		</div>
	);
};

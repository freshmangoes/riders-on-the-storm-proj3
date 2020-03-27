import React, { useState, useContext } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Card,
	CardBody
} from 'reactstrap';
import API from '../../utils/API';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import { SearchInputContext } from '../../Context/SearchInputContext';

export const PastSearchesModal = (props) => {
	const { setSearchInput } = useContext(SearchInputContext);

	const { buttonLabel, className, currentUserId } = props;

	const [modal, setModal] = useState(false);
	const [searchResults, setSearchResults] = useState([]);

	const checkForSearchResults = () => {
		if (currentUserId) {
			API.pastSearches(currentUserId).then((data) => {
				console.log('pastSearches', data);
				setSearchResults(data.data);
			});
		}
	};

	const toggle = () => {
		checkForSearchResults();
		setModal(!modal);
	};

	return (
		<span>
			<Button color="dark" onClick={toggle}>
				{buttonLabel}
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader
					className="bg-dark text-white font-weight-bold"
					toggle={toggle}
				>
					Search History:{' '}
				</ModalHeader>
				<ModalBody>
					{searchResults.map((res, index) => {
						return (
							<Card
								key={index}
								onClick={() => {
									console.log('you clicked ', index, res.start, res.end);
									setSearchInput({
										startPoint: res.start,
										endPoint: res.end
									});
									toggle();
								}}
							>
								<CardBody>
									<div className="topLine">
										<p className="start">
											<FontAwesomeIcon
												className="fa fa-lg"
												id="startIcon"
												icon={faMapPin}
											/>
											Start: {res.start}
										</p>
									</div>
									<div className="bottomLine">
										<p className="end">
											<FontAwesomeIcon
												className="fa fa-lg"
												id="endIcon"
												icon={faMapPin}
											/>
											End: {res.end}
										</p>
									</div>
								</CardBody>
							</Card>
						);
					})}
				</ModalBody>
			</Modal>
		</span>
	);
};

import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Card, CardBody } from 'reactstrap';
import API from '../../utils/API';
import { SearchInputContext } from '../../Context/SearchInputContext';

export const PastSearchesModal = (props) => {
    const { setSearchInput } = useContext(SearchInputContext)

    const {
        buttonLabel,
        className,
        currentUserId
    } = props;

    const [modal, setModal] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const checkForSearchResults = () => {
        if (currentUserId) {
            API.pastSearches(currentUserId).then(data => {
                console.log('pastSearches', data);
                setSearchResults(data.data)

            })
        }
    }

    // useEffect(() => checkForSearchResults, [])

    const toggle = () => {
        checkForSearchResults();
        setModal(!modal);
    };

    return (
        <span>
            <Button color="dark" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Past Searches: </ModalHeader>
                <ModalBody>
                    Past Searches here.
                    {searchResults.map((res, index) => {
                    return <Card key={index} onClick={() => {
                        console.log('you clicked ', index, res.start, res.end); setSearchInput({
                            startPoint: res.start, endPoint: res.end
                        }); toggle()
                    }
                    }>
                        <CardBody>
                            <p>Start: {res.start}</p>
                            <p>End: {res.end}</p>
                        </CardBody>

                    </Card>
                })}
                </ModalBody>

            </Modal>
        </span >
    );
}

import React from 'react';
import { Item, Modal, List, Image } from 'semantic-ui-react';

const UserDisplay = (props) => {
    const user = props.user;
    return (
        <Modal trigger={
            <Item.Group>
                <Item>
                    <div className="image">
                        <img src={user.imageUrl}/>
                    </div>
                    <div className="content">
                        <a className="header">{user.firstName} {user.lastName}</a>
                    </div>
                </Item>
            </Item.Group>
        } closeIcon>
            <Modal.Header>{user.firstName} {user.lastName}</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' src={user.imageUrl}/>
                <List items={[`First Name: ${user.firstName}`, 
                    `Last Name: ${user.lastName}`, 
                    `Phone: ${user.phone}`, 
                    `Email: ${user.email}`,
                    `DOB: ${user.dob}`,
                    `Display Name: ${user.displayName}`,]} 
                />
            </Modal.Content>
        </Modal>
        
    );
}

export default UserDisplay;
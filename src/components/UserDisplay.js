import React from 'react';

const UserDisplay = (props) => {
    return (
        <div className="ui items">
            <div className="item">
                <div className="image">
                    <img src={props.user.imageUrl}/>
                </div>
                <div className="content">
                    <a className="header">{props.user.firstName} {props.user.lastName}</a>
                </div>
            </div>
        </div>
    );
}

export default UserDisplay;
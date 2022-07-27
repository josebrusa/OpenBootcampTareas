import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contactClass';


const ComponentB = ({contact}) => {
    return (
        <div>
            <h1>Usuario</h1>
            <h2>{ contact.name }</h2>
            <h2>{ contact.lastName }</h2>
            <h3>{ contact.email }</h3>
            <h4>Logued? { contact.conect ? 'oh yeah is Conect ': 'your not conect'}</h4>
        </div>
    );
};


ComponentB.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ComponentB;

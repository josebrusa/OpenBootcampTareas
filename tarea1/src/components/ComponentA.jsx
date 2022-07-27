import React from 'react';
import { Contact } from '../models/contactClass';
import ComponentB from './ComponentB';

const ComponentA = () => {
    const defaultContact = new Contact('jose', 'brusa', 'josebrusa@josebrusa.com', false);
    return (
        <div>
            <h1>loguin user</h1>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    );
};


export default ComponentA;

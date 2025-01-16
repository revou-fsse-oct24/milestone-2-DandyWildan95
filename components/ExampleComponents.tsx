// src/components/ExampleComponent.jsx

import React from 'react';
import { formatDate, generateRandomId, validateEmail, capitalizeFirstLetter } from './utils';

const ExampleComponent = () => {
    const exampleDate = '2025-01-16';
    const exampleEmail = 'test@example.com';
    const exampleString = 'hello world';

    return (
        <div>
            <p>Formatted Date: {formatDate(exampleDate)}</p>
            <p>Random ID: {generateRandomId()}</p>
            <p>Email Valid: {validateEmail(exampleEmail) ? 'Valid' : 'Invalid'}</p>
            <p>Capitalized String: {capitalizeFirstLetter(exampleString)}</p>
        </div>
    );
};

export default ExampleComponent;

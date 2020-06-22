import React from 'react';

const componentNames = [
    'Default',
    'Help',
    'Details'
];

export const SelectorComponent = ({ setComponent }) => {
    const mountOptions = () => {
        const options = componentNames.map(option => 
            <option key={option} value={option}>{option}</option>
        );

        return options;
    };

    return  (
        <div>
            Selecione o componente a ser renderizado:
            <select name="component-selector" onChange={ option =>  setComponent(option.target.value)}>
                { mountOptions() }
            </select>
        </div>
    );
};

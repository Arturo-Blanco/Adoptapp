import React from 'react';
import InputCheckbox from 'Components/FiltroBusqueda/InputCheckbox/InputCheckbox';
import FilterBox from 'Components/FiltroBusqueda/FilterBox/FilterBox';

const InputRadioGroup = ({ title, options, name, onChange }) => {
    return (
        <FilterBox title={title}>
            {options.map(option => (
                <InputCheckbox
                    key={option.value}
                    type="radio"
                    text={option.text}
                    value={option.value}
                    name={name}
                    onChange={onChange}
                />
            ))}
        </FilterBox>
    );
};

export default InputRadioGroup;
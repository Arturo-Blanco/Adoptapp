import React, { useEffect, useState } from "react";
import FilterBox from "./FilterBox/FilterBox";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import './filter.css'

const Filter = () => {
    const [filters, setFilters] = useState([]);

    useEffect(() => {
    }, [filters])

    const handleStateChange = (event) => {
        setFilters({
            ...filters,
            [event.target.value] : event.target.checked
        })
    }

    return (
        <aside className="filter-container">
            <FilterBox
            title="Especie">
            <FilterCheckbox
            htmlFor="perro"
            text="Perro"
            value="perro"
            name="perro"
            onChange={handleStateChange}
            />
            <FilterCheckbox
            htmlFor="gato"
            text="Gato"
            value="gato"
            name="gato"
            onChange={handleStateChange}
            />
            <FilterCheckbox
            htmlFor="otros"
            text="Otros"
            value="otros"
            name="otros"
            onChange={handleStateChange}
            />
            </FilterBox>
            <FilterBox
            title="Sexo">
            <FilterCheckbox
            htmlFor="macho"
            text="Macho"
            value="macho"
            name="macho"
            onChange={handleStateChange}
            />
            <FilterCheckbox
            htmlFor="hembra"
            text="Hembra"
            value="hembra"
            name="hembra"
            onChange={handleStateChange}
            />
            </FilterBox>
            <FilterBox
            title="Ubicacion">
            <FilterCheckbox
            htmlFor="Ushuaia"
            text="Ushuaia"
            value="Ushuaia"
            name="Ushuaia"
            onChange={handleStateChange}
            />
            <FilterCheckbox
            htmlFor="RioGrande"
            text="Rio Grande"
            value="RioGrande"
            name="RioGrande"
            onChange={handleStateChange}
            />
            <FilterCheckbox
            htmlFor="Tolhuin"
            text="Tolhuin"
            value="Tolhuin"
            name="Tolhuin"
            onChange={handleStateChange}
            />
            </FilterBox>
            <FilterBox
            title="Estado">
            <FilterCheckbox
            htmlFor="disponible"
            text="Disponible"
            value="disponible"
            name="disponible"
            onChange={handleStateChange}
            />
            <FilterCheckbox
            htmlFor="reservado"
            text="Reservado"
            value="reservado"
            name="reservado"
            onChange={handleStateChange}
            />
            </FilterBox>
        </aside>
    )
}
export default Filter
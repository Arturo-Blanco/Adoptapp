import FilterBox from "./FilterBox/FilterBox";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import './filter.css'

const Filter = ({setFilters}) => {

    const handleStateChange = (event) => {
        //Se desestructura los valores del checkbox al ocurrir el evento. Extrayendo los valores 'name' y checked
        const {name, checked} = event.target
    setFilters((prevFilter) => ({
        ...prevFilter, // se crea una copia del objeto prevFilter para mantener todos los filtros seleccionados
        [name] : checked ? name : undefined // se verifica si el check es true se retorna el name del mismo sino se devuelve undefined
    }));
    }

    return (
        <aside className="filter-container">
            <h3 className="preferences">¿Que estas buscando?</h3>
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
            value="Rio Grande"
            name="Rio Grande"
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
            {/*<FilterBox
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
    </FilterBox>*/}
        </aside>
    )
}
export default Filter
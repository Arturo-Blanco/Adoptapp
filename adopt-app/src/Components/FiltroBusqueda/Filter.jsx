import FilterBox from "./FilterBox/FilterBox";
import InputCheckbox from "./InputCheckbox/FilterCheckbox";
import './filter.css'

const Filter = ({setFilters}) => {

    const handleStateChange = (event) => {
        //Se desestructura los valores del checkbox al ocurrir el evento. Extrayendo los valores 'name' y checked
        const {name, checked, value} = event.target
    setFilters((prevFilter) => ({
        ...prevFilter, // se crea una copia del objeto prevFilter para mantener todos los filtros seleccionados
        [name] : checked ? value : undefined // se verifica si el check es true se retorna el name del mismo sino se devuelve undefined
    }));
    }
    return (
        <>
            <h3 className="preferences">¿Que estas buscando?</h3>
            <FilterBox
            title="Especie">
            <InputCheckbox
            htmlFor="perro"
            text="Perro"
            value="Perro"
            name="specie"
            onChange={handleStateChange}
            />
            <InputCheckbox
            htmlFor="gato"
            text="Gato"
            value="Gato"
            name="specie"
            onChange={handleStateChange}
            />
            <InputCheckbox
            htmlFor="otros"
            text="Otros"
            value="Otros"
            name="specie"
            onChange={handleStateChange}
            />
            </FilterBox>
            <FilterBox
            title="Sexo">
            <InputCheckbox
            htmlFor="macho"
            text="Macho"
            value="Macho"
            name="sex"
            onChange={handleStateChange}
            />
            <InputCheckbox
            htmlFor="hembra"
            text="Hembra"
            value="Hembra"
            name="sex"
            onChange={handleStateChange}
            />
            </FilterBox>
            <FilterBox
            title="Ubicacion">
            <InputCheckbox
            htmlFor="Ushuaia"
            text="Ushuaia"
            value= "1"
            name="location"
            onChange={handleStateChange}
            />
            <InputCheckbox
            htmlFor="RioGrande"
            text="Rio Grande"
            value="3"
            name="location"
            onChange={handleStateChange}
            />
            <InputCheckbox
            htmlFor="Tolhuin"
            text="Tolhuin"
            value="2"
            name="location"
            onChange={handleStateChange}
            />
            </FilterBox>
        </>
    )
}
export default Filter;
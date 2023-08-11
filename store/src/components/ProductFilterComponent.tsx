import FilterByAviabilityComponent from "./FilterByAvaiabilityComponent"
import FilterByManufacturerComponent from "./FilterByManufacturerComponent";
import '../styles//ProductFilterComponent.css'
const ProductFilterComponent: React.FC<{ ChangeAvaibilityFilter: (avaiabilityFilter: boolean) => void, ChangeManufacturersFilter: (manufacturersFilter: string[]) => void }> = ({ ChangeAvaibilityFilter, ChangeManufacturersFilter }) => {
    return (
        <div className="filter-container">
            <div className="checkbox-filter"><FilterByAviabilityComponent ChangeAvaibilityFilter={ChangeAvaibilityFilter}></FilterByAviabilityComponent></div>
            <div className="list-filter"><FilterByManufacturerComponent ChangeManufacturersFilter={ChangeManufacturersFilter}></FilterByManufacturerComponent></div>
        </div>
    )
}
export default ProductFilterComponent
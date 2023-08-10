import { useState } from "react";
import FilterByAviabilityComponent from "./FilterByAvaiabilityComponent"
import FilterByManufacturerComponent from "./FilterByManufacturerComponent";

const ProductFilterComponent: React.FC<{ ChangeAvaibilityFilter: (avaiabilityFilter: boolean) => void, ChangeManufacturersFilter: (manufacturersFilter: string[]) => void }> = ({ ChangeAvaibilityFilter, ChangeManufacturersFilter }) => {
    return (
        <div><FilterByAviabilityComponent ChangeAvaibilityFilter={ChangeAvaibilityFilter}></FilterByAviabilityComponent>
            <FilterByManufacturerComponent ChangeManufacturersFilter={ChangeManufacturersFilter}></FilterByManufacturerComponent></div>

    )
}
export default ProductFilterComponent
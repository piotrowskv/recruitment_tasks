import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { getAllManufacturers } from "./api";

const FilterByManufacturerComponent: React.FC<{ ChangeManufacturersFilter: (manufacturersFilter: string[]) => void }> = ({ ChangeManufacturersFilter }) => {
    const [allManufacturers, setAllManufacturers] = useState<string[]>([])
    const [selected, setSelected] = useState(allManufacturers.map(m => ({ value: m, label: m })));

    useEffect(() => {
        getAllManufacturers()
            .then(mans => {
                setAllManufacturers(mans)
                handleErasingFilters()
            })
    }, []);
    const handleErasingFilters = () => {
        if (selected.length === 0) {
            setSelected(allManufacturers.map(m => ({ value: m, label: m })))
            ChangeManufacturersFilter(allManufacturers)
        }
    }
    const handleChange = (event: any) => {
        console.log(event)
        setSelected(event)
        if (selected.length === 0 && event.length != 1) {
            handleErasingFilters()
        }
        ChangeManufacturersFilter(event.map((m: { label: any; value: any }) => (m.label)))
    }
    return (
        <div>
            <MultiSelect
                options={allManufacturers.map(m => ({ value: m, label: m }))}
                value={selected}
                onChange={(e: any) => handleChange(e)}
                labelledBy="Select"
            />
        </div>
    );
}
export default FilterByManufacturerComponent
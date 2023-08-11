import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { getAllManufacturers } from "../api";

/* multiselect component that changes filtering settings if manufacturers are changed */
const FilterByManufacturerComponent: React.FC<{ ChangeManufacturersFilter: (manufacturersFilter: string[]) => void }> = ({ ChangeManufacturersFilter }) => {
    const [allManufacturers, setAllManufacturers] = useState<string[]>([])
    const [selected, setSelected] = useState<any[]>([]);

    /* gets all manufacturers from API, initially all manufacturers are selected */
    useEffect(() => {
        getAllManufacturers()
            .then(mans => {
                setAllManufacturers(mans)
                setSelected(mans.map(m => ({ value: m, label: m })))
                ChangeManufacturersFilter(mans)
            })
    }, [ChangeManufacturersFilter]);

    const handleChange = (event: any) => {
        setSelected(event)
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
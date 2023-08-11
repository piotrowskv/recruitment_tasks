import { useState } from "react";

const FilterByAviabilityComponent: React.FC<{ ChangeAvaibilityFilter: (avaiabilityFilter: boolean) => void }> = ({ ChangeAvaibilityFilter }) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        ChangeAvaibilityFilter(!checked)
        setChecked(!checked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                Show avaiable items only
            </label>
        </div>
    );
}
export default FilterByAviabilityComponent
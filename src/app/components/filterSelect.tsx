import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

export function FilterSelect(props: {types: string[], currentFilterType: string, setTypeToFilter: Dispatch<SetStateAction<string>>}) {

    const [filter, setFilter] = useState<string>("");

    function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
        setFilter(e.target.value);
        props.setTypeToFilter(e.target.value);
    }

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Type"
                    onChange={handleSelect}
                >
                    <MenuItem value={""}>Any Type</MenuItem>
                    {
                        props.types.map((t, index)=>
                            <MenuItem key={index} value={t}>{t}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    )
}
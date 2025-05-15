import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useMyProvider } from "../context/MyContext";

export function FilterSelect() {

    const { types, activeFilter, setActiveFilter } = useMyProvider();

    // const [filter, setFilter] = useState<string>("");

    function handleSelect(e: SelectChangeEvent) {
        setActiveFilter(e.target.value);
    }

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activeFilter}
                    label="Type"
                    onChange={handleSelect}
                >
                    <MenuItem value={""}>Any Type</MenuItem>
                    {
                        types.map((t, index)=>
                            <MenuItem key={index} value={t}>{t}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    )
}
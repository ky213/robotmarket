import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch } from "react-redux";
import { FILTER_ROBOTS } from "store/actions/robot.actions";

export default function RowRadioButtonsGroup() {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FILTER_ROBOTS,
      payload: (event.target as HTMLInputElement).value,
    });
  };

  return (
    <FormControl style={{ marginTop: "8px" }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="All"
        onChange={handleChange}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Soft" control={<Radio />} label="Soft" />
        <FormControlLabel value="Plastic" control={<Radio />} label="Plastic" />
        <FormControlLabel value="Fresh" control={<Radio />} label="Fresh" />
        <FormControlLabel value="Steel" control={<Radio />} label="Steel" />
        <FormControlLabel value="Rubber" control={<Radio />} label="Rubber" />
        <FormControlLabel value="Wooden" control={<Radio />} label="FreshWooden" />
        <FormControlLabel value="Granite" control={<Radio />} label="Granite" />
        <FormControlLabel value="Concrete" control={<Radio />} label="Concrete" />
        <FormControlLabel value="Cotton" control={<Radio />} label="Cotton" />
        <FormControlLabel value="Metal" control={<Radio />} label="Metal" />
        <FormControlLabel value="Frozen" control={<Radio />} label="Frozen" />
      </RadioGroup>
    </FormControl>
  );
}

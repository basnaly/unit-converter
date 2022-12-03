import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import { TextField } from "@mui/material";
import { LENGTH_UNITS, MASS_UNITS, TEMPERATURE_UNITS } from "../constants";

export const UnitsSelector = ({ category, unit, setUnit }) => {

	return (
		<Box
			component="form"
			sx={{
				"& > :not(style)": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField
				id="select-unit"
				select
				label="Select unit"
				sx={{ width: "200px" }}
				value={unit}
				onChange={setUnit}
			>
				{category.map((el) => (
					<MenuItem key={el} value={el}>
						{el}
					</MenuItem>
				))}
			</TextField>
		</Box>
	);
}

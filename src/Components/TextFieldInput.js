import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextFieldInput = ( {number, setNumber} ) => {

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
				id="outlined-basic"
				variant="outlined"
                inputProps={{style:{paddingTop: '11px', paddingBottom: '11px'}}}
				type="number"
				label="Enter number"
                value={number}
				onChange={setNumber}
			/>
		</Box>
	);
};

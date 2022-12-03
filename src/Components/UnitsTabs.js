import React, { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { TextFieldInput } from "./TextFieldInput";
import { UnitsSelector } from "./UnitsSelector";
import CalcUnitConverter from "./CalcUnitConverter";

export const UnitsTabs = () => {
	
	const [selectedTab, setSelectedTab] = useState("Mass");

	const handleChange = (event, tab) => {
		setSelectedTab(tab);
	};

	return (
		<React.Fragment>
			<TabContext value={selectedTab}>
				<Box className="d-flex align-items-center justify-content-evenly">
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<Tab label="Mass" value={"Mass"} />
						<Tab label="Length" value={"Length"} />
						<Tab label="Temperature" value={"Temperature"} />
					</TabList>
				</Box>
			</TabContext>

			<div className="d-flex align-items-center justify-content-center m-4">
				<CalcUnitConverter selectedTab={selectedTab}/>
			</div>
		</React.Fragment>
	);
};

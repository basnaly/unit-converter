import React, { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import CalcUnitConverter from "./CalcUnitConverter";
import { TabContentStyled } from "../styles/MuiStyles";

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

			<TabContentStyled className="d-flex justify-content-center p-4 h-100">
				<CalcUnitConverter selectedTab={selectedTab}/>
			</TabContentStyled>
		</React.Fragment>
	);
};

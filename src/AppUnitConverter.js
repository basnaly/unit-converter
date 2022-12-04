import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UnitsTabs } from "./Components/UnitsTabs";
import { myTheme } from "./styles/MuiTheme";
import { ThemeProvider } from "@mui/material/styles";
import { ConverterStyled, MainStyled } from "./styles/MuiStyles";

function AppUnitConverter() {

	return (
		<BrowserRouter>
			<ThemeProvider theme={myTheme}>
				<MainStyled className="d-flex flex-column overflow-auto vh-100">
					<ConverterStyled>Unit Converter</ConverterStyled>
					<UnitsTabs />
				</MainStyled>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default AppUnitConverter;

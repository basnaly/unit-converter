import { styled, Button } from "@mui/material";

export const MainStyled = styled("div")({
	backgroundImage: 'url("math.png")',
	backdropFilter: 'blur(50 px)',
});

export const ConverterStyled = styled("div")({
	fontSize: "34px",
	fontWeight: "bold",
	textAlign: 'center',
	padding: '10px',
    backgroundColor: '#fff9',
});

export const CalcButton = styled(Button)({
	textTransform: "none",
	color: "black",
	border: "1px solid dimgray",
	fontSize: "18px",
	backgroundColor: "lightskyblue",
	padding: "3px 10px",
});

export const ResultStyled = styled("div")({
	fontSize: "20px",
	fontWeight: 'bold',
	padding: '5px',
	textAlign: 'center'
});

export const TabContentStyled = styled("div")({
	backgroundColor: '#fff9',
});
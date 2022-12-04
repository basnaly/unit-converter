import React from "react";
import { ResultStyled } from "../styles/MuiStyles";

const CalcResult = ({ number, unit, category, result }) => {
	return (
		<div>
			{result.map((el, index) => (
				<div key={index}>
					<ResultStyled>
						{number} {unit} = {el} {category[index]}
					</ResultStyled>
				</div>
			))}
		</div>
	);
};

export default CalcResult;

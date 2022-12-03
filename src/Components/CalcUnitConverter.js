import React, { useReducer } from "react";
import { LENGTH_UNITS, MASS_FROM_KILOGRAM, MASS_UNITS, TEMPERATURE_UNITS } from "../constants";
import { CalcButton } from "../styles/MuiStyles";
import { TextFieldInput } from "./TextFieldInput";
import { UnitsSelector } from "./UnitsSelector";

const initialState = {
	number: 1,
	unit: MASS_UNITS[0],
	category: MASS_UNITS,
	result: [],
}

const reducer = (state, action) => {
	switch(action.type) {
		case 'setNumber':
			return {
				...state,
				number: action.value 
			}
		case 'setUnit':
			return {
				...state,
				unit: action.value
			}
		case 'calcMassUnits':
			let resultToKilogram = + (state.number / MASS_FROM_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Kilogram).toFixed(4)
			let resultToGram = + (state.number / MASS_FROM_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Gram).toFixed(4)
			let resultToPound = + (state.number / MASS_FROM_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Pound).toFixed(4)
			let resultToOunce = + (state.number / MASS_FROM_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Ounce).toFixed(4)
			let result = [resultToKilogram, resultToGram, resultToPound, resultToOunce]
			console.log(result)
			return{
				...state,
				result: result
			}
		default:
			return state
	}
}

const CalcUnitConverter = ({ selectedTab }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	if (selectedTab === 'Mass') {
		state.category = MASS_UNITS
	} else if (selectedTab === 'Length') {
		state.category = LENGTH_UNITS
	} else if (selectedTab === 'Temperature') {
		state.category = TEMPERATURE_UNITS
	}

	const calcUnit = () => {
		dispatch({type: 'calcMassUnits'})
	}

	return (
		<div className="d-flex flex-column align-items-center">

			<div className="d-flex align-items-center">
				<TextFieldInput 
					number={state.number}
					setNumber={(e) => dispatch({type: 'setNumber', value: e.target.value})}
				/>

				<UnitsSelector category={state.category}
					unit={state.unit}
					setUnit={(e) => dispatch({type: 'setUnit', value: e.target.value})}
				/>
			</div>

			<div>
				<CalcButton
					variant={"outlined"}
					className="m-3"
					onClick={calcUnit}
				>
					Calc
				</CalcButton>
			</div>
		</div>
	);
};

export default CalcUnitConverter;

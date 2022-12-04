import React, { useEffect, useReducer } from "react";
import { LENGTH_FROM_METER, LENGTH_UNITS, MASS_FROM_KILOGRAM, MASS_UNITS, TEMPERATURE_UNITS } from "../constants";
import { CalcButton } from "../styles/MuiStyles";
import CalcResult from "./CalcResult";
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
		case 'changeCategory':
			let changedCategory = []
			if (action.value === 'Mass') { //action.value = selectedTab
				changedCategory = MASS_UNITS
			} else if (action.value === 'Length') {
				changedCategory = LENGTH_UNITS
			} else if (action.value === 'Temperature') {
				changedCategory = TEMPERATURE_UNITS
			}
			return {
				...state,
				category: changedCategory,
				unit: changedCategory[0],
				result: []
			}
		case 'setNumber':
			return {
				...state,
				number: action.value,
				result: []
			}
		case 'setUnit':
			return {
				...state,
				unit: action.value,
				result: []
			}
		case 'calcMassUnits':
			const MassResult = state.category.map(el => 
				+ (state.number / MASS_FROM_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM[el]).toFixed(4))
				console.log(MassResult)
			return {
				...state,
				result: MassResult
			}
		case 'calcLengthUnits':
			const LengthResult = state.category.map(el => 
				+ (state.number / LENGTH_FROM_METER[state.unit] * LENGTH_FROM_METER[el]).toFixed(4))
				console.log(LengthResult)
			return {
				...state,
				result: LengthResult
			}
		case 'calcTemperatureUnits':
			const inputNumber = +state.number;

			const TEMPERATURE_FROM_CELCIUS = [ 
				inputNumber,
    			+((inputNumber * 9 / 5) + 32).toFixed(4), 
    			inputNumber + 273.15
			]

			const TEMPERATURE_FROM_FAHRENHEIT = [ 
				+((inputNumber - 32) * 5 / 9).toFixed(4), 
				inputNumber,
				+((inputNumber - 32) * 5 / 9 + 273.15).toFixed(4)
			]

			const TEMPERATURE_FROM_KELVIN = [ 
				inputNumber - 273.15, 
				+((inputNumber - 273.15) * 9 / 5 + 32).toFixed(4),
				inputNumber,	
			]

			const temperatureResult = {
				'Celcius': TEMPERATURE_FROM_CELCIUS,
				'Fahrenheit': TEMPERATURE_FROM_FAHRENHEIT, 
				'Kelvin': TEMPERATURE_FROM_KELVIN
			}
			console.log(temperatureResult[state.unit])

			return {
				...state,
				result: temperatureResult[state.unit]
			}
		default:
			return state
	}
}

const CalcUnitConverter = ({ selectedTab }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	const calcUnit = () => {
		if (selectedTab === 'Mass') {
			dispatch({type: 'calcMassUnits'})
		} else if (selectedTab === 'Length') {
			dispatch({type: 'calcLengthUnits'})
		} else if (selectedTab === 'Temperature') {
			dispatch({type: 'calcTemperatureUnits'})
		}
	}

	useEffect(() => {
		dispatch({type: 'changeCategory', value: selectedTab})
	}, [selectedTab])

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

			<div className="d-flex align-items-center">
				<CalcButton
					variant={"outlined"}
					className="m-3"
					onClick={calcUnit}
				>
					Calculate
				</CalcButton>
			</div>
			<CalcResult 
				number={state.number}
				category={state.category}
				unit={state.unit}
				result={state.result}
			/>
	
		</div>
	);
};

export default CalcUnitConverter;

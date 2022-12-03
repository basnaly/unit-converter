import React, { useEffect, useReducer } from "react";
import { MASS_UNITS, LENGTH_UNITS, TEMPERATURE_UNITS, MASS_FROM_KILOGRAM, MASS_TO_KILOGRAM } from "../constants";
import { TextFieldInput } from "./TextFieldInput";
import { UnitsSelector } from "./UnitsSelector";

const initialState = {
	number: 1,
	unit: "",
    category: MASS_UNITS,
    result: []
};

// if (category === 'Mass' && unit === 'Kilogram') {
//     {state.number} {state.unit} = {state.number} * 1000 {MASS_UNITS.[1]}
//     {state.number} {state.unit} = {state.number} * 2.20462 {MASS_UNITS.[2]}
//     {state.number} {state.unit} = {state.number} * 35.2739199982575 {MASS_UNITS.[3]}
// }

const reducer = (state, action) => {

	switch (action.type) {
        case 'changeCategory':
            let changedCategory = [];
            if (action.value === 'Mass') {
                changedCategory = MASS_UNITS
            } else if (action.value === 'Length') {
                changedCategory = LENGTH_UNITS
            } else if (action.value === 'Temperature') {
                changedCategory = TEMPERATURE_UNITS
            }
            return {
                ...state,
                category: changedCategory,
                unit: changedCategory[0]
            }
		case "setNumber":
            let calcResult = [
                +(action.value * MASS_TO_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Kilogram).toFixed(4), 
                +(action.value * MASS_TO_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Gram).toFixed(4),
                +(action.value * MASS_TO_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Pound).toFixed(4),  
                +(action.value * MASS_TO_KILOGRAM[state.unit] * MASS_FROM_KILOGRAM.Ounce).toFixed(4)
            ]
            console.log(calcResult)
			return {
				...state,
				number: action.value,
                result: []
			}
        case "setUnit":
            return {
                ...state,
                unit: action.value,
                result: []
            }
        
		default:
			return state;
	}
};

const CalcUnitConverter = ({ selectedTab }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({type: 'changeCategory', value: selectedTab})
    }, [selectedTab])

	return (
		<>
			<TextFieldInput 
                number={state.number} 
                setNumber={(e) => dispatch({type: 'setNumber', value: e.target.value})}
            />

			<UnitsSelector 
                unit={state.unit} 
                setUnit={(e) => dispatch({type: 'setUnit', value: e.target.value})}
                category={state.category}
            />
		</>
	);
};

export default CalcUnitConverter;

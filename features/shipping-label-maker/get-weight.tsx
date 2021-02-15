import React, { FC } from 'react'
import WeightForm from './weight-form'

interface GetWeightProps {
  wizardContext: any;
  onAction: (number) => void;
}

const GetWeight: FC<GetWeightProps> =({ onAction, wizardContext }) => {
  const { state, dispatch } = wizardContext

  const handleNext = (data: { weight: number }) => {
    dispatch({ type: 'SET_WEIGHT', payload: data.weight })
    onAction(2)
  }

  const handleBack = () => onAction(1)

  return (<WeightForm defaultValue={state.weight} onSubmit={handleNext} onBack={handleBack} />)
}

export default GetWeight

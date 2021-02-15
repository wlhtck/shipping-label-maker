import React, { FC } from 'react'
import ShippingOptionForm from './shipping-option-form'

interface GetShippingOptionProps {
  wizardContext: any;
  onAction: (number) => void;
}

const GetShippingOption: FC<GetShippingOptionProps> = ({ 
  wizardContext, 
  onAction
}) => {
  const { state, dispatch } = wizardContext

  const handleNext = (data: { shippingOption: number }) => {
    dispatch({ type: 'SET_SHIPPING_OPTION', payload: data.shippingOption })
    onAction(2)
  }

  const handleBack = () => onAction(1)

  return (
    <ShippingOptionForm
      defaultValue={state.shippingOption}
      onSubmit={handleNext}
      onBack={handleBack}
    />
  )
}

export default GetShippingOption

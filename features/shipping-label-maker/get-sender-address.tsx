import React, { FC } from 'react'
import { Heading } from '@chakra-ui/react'
import AddressForm from './address-form'
import { Address } from '../../types/address'

interface GetSenderAddressProps {
  wizardContext: any;
  onAction: (number) => void;
}

const GetSenderAddress = ({ onAction, wizardContext }) => {
  const { state, dispatch } = wizardContext

  const handleNext = (data: Address) => {
    dispatch({ type: 'SET_SENDER_ADDRESS', payload: data })
    onAction(2)
  }

  const handleBack = () => onAction(1)

  return (
    <>
      <Heading as="h2">Enter the sender's address</Heading>
      <AddressForm defaultValues={state.from} onSubmit={handleNext} onBack={handleBack} />
    </>
  )
}

export default GetSenderAddress

import React, { FC } from 'react'

import { ShippingOptions } from '../../types/shipping-option'

// Form Tools
import { useForm } from 'react-hook-form'
import { object, string, number } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI Components
import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";

interface ShippingOptionFormProps {
  onSubmit: (data: { shippingOption: ShippingOptions }) => void;
  onBack: () => void;
  defaultValue: ShippingOptions,
}

const ShippingOptionForm: FC<ShippingOptionFormProps> = ({
  onSubmit,
  onBack,
  defaultValue,
}) => {
  const schema = object().shape({ 
    shippingOption: string().required('Please select a shipping option'),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { shippingOption: defaultValue },
    mode: 'onBlur',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.shippingOption}>
        <FormLabel>Shipping Option: </FormLabel>
        <Select name="shippingOption" ref={register} placeholder="Select a shipping option">
          <option value={ShippingOptions.ground}>Ground</option>
          <option value={ShippingOptions.priority}>Priority</option>
        </Select>
        <FormErrorMessage>
          {errors.shippingOption && errors.shippingOption.message}
        </FormErrorMessage>
      </FormControl>
      <Flex justify="flex-end">
        <ButtonGroup>
          <Button type="button" onClick={onBack}>Back</Button>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>Next</Button>
        </ButtonGroup>
      </Flex>
    </form>
  )
}

export default ShippingOptionForm

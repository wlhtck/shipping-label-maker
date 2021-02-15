import React, { FC } from 'react'

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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

interface WeightFormProps {
  onSubmit: (data: { weight: number }) => void;
  onBack: () => void;
  defaultValue?: number;
}

const WeightForm: FC<WeightFormProps> = ({ onSubmit, onBack, defaultValue }) => {
  const schema = object().shape({ 
    weight: number().required('Weight is required'),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { weight: defaultValue },
    mode: 'onBlur',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.weight}>
        <FormLabel>Weight: </FormLabel>
        <NumberInput name="weight" placeholder="Weight">
          <NumberInputField ref={register} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>
          {errors.weight && errors.weight.message}
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

export default WeightForm

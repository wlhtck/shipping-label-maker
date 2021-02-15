import React, { FC } from 'react'

// Form Tools
import { useForm } from 'react-hook-form'
import { object, string, number } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Address } from '../../types/address'

// UI Components
import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Flex,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";

interface AddressFormProps {
  onSubmit: (data: Address) => void;
  onBack: () => void;
  defaultValues?: Address;
}

const AddressForm: FC<AddressFormProps> = ({ onSubmit, onBack, defaultValues }) => {
  const schema = object().shape({
    name: string().required('Name is required.'),
    street: string().required('Street is required'),
    city: string().required('City is required'),
    state: string().required('State is required'),
    zip: string()
      .required('Zip code is required')
      .length(5, 'Please use a 5 digit zip code'),
  })

  const { register, errors, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur'
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem colSpan={3}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Name: </FormLabel>
            <Input name="name" placeholder="Name" ref={register} />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={3}>
        <FormControl isInvalid={!!errors.street}>
          <FormLabel>Street: </FormLabel>
          <Input name="street" placeholder="Street" ref={register} />
          <FormErrorMessage>
            {errors.street && errors.street.message}
          </FormErrorMessage>
        </FormControl>
        </GridItem>
        <FormControl isInvalid={!!errors.city}>
          <FormLabel>City: </FormLabel>
          <Input name="city" placeholder="City" ref={register} />
          <FormErrorMessage>
            {errors.city && errors.city.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.state}>
          <FormLabel>State: </FormLabel>
          <Input name="state" placeholder="State" ref={register} />
          <FormErrorMessage>
            {errors.state && errors.state.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.zip}>
          <FormLabel>Zip: </FormLabel>
          <Input name="zip" placeholder="Zip" ref={register} />
          <FormErrorMessage>
            {errors.zip && errors.zip.message}
          </FormErrorMessage>
        </FormControl>
        <GridItem colSpan={2} />
        <Flex justify="flex-end">
          <ButtonGroup>
            <Button type="button" onClick={onBack}>Back</Button>
            <Button type="submit">Next</Button>
          </ButtonGroup>
        </Flex>
      </Grid>
    </form>
  )
}

export default AddressForm

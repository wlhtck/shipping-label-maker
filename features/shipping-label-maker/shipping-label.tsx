import React, { FC } from 'react'
import { Heading, Divider, Box, Text } from '@chakra-ui/react'
import { ShippingOptions } from '../../types/shipping-option'
import Address from './address'

const calculateRate = (weight, shippingOption) => {
  const shippingRate = 0.40;
  return (weight * shippingRate * (shippingOption === ShippingOptions.ground ? 1 : 1.5)).toFixed(2)
}
const ShippingLabel = ({ data }) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Address heading="From: " {...data.from} />
    <Divider />
    <Address heading="To: "{...data.to} />
    <Divider />
    <Box padding="8px">
      <Text>{`Shipping cost: $${calculateRate(data.weight, data.shippingOption)}`}</Text>
    </Box>
  </Box>
)

export default ShippingLabel

import React, { FC } from 'react'

import {
  Box,
  Text,
  Heading,
} from '@chakra-ui/react'

const Address = ({ heading, name, street, city, state, zip }) => (
  <Box maxW="sm" padding="8px">
    <Heading as="h4">{heading}</Heading>
    <Text>{name}</Text>
    <Text>{street}</Text>
    <Text>{`${city} ${state}, ${zip}`}</Text>
  </Box>
)

export default Address

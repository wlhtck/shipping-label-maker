import React, { useReducer, useState } from 'react'
import Wizard from '../../core/components/wizard'
import { WizardContext } from '../../types/wizard'
import GetSenderAddress from './get-sender-address'
import GetReceiverAddress from './get-receiver-address'
import GetWeight from './get-weight'
import GetShippingOption from './get-shipping-option'
import ShippingLabel from './shipping-label'


const shippingOption = {
  ground: 1,
  priority: 2,
}

const emptyAddress = {
  name: '',
  street: '',
  city: '',
  state: '',
  zip: '',
}

const initialState = {
  from: emptyAddress,
  to: emptyAddress,
  weight: null,
  shippingOption: null,
}

const reducer = (state, { type, payload }) => {
  console.table({ type, payload })
  switch (type) {
    case ('SET_SENDER_ADDRESS'):
      return {
        ...state,
        from: payload,
      }
      case ('SET_RECEIVER_ADDRESS'):
        return {
          ...state,
          to: payload,
        }
      case ('SET_WEIGHT'):
        console.table({
          ...state,
          weight: payload,
        })
        return {
          ...state,
          weight: payload,
        }
      case ('SET_SHIPPING_OPTION'):
        console.table({
          ...state,
          shippingOption: payload,
        })
        return {
          ...state,
          shippingOption: payload,
        }
    default: 
        return state
    }
}



const ShippingLabelMaker = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [done, setDone] = useState(false)

  const shippingLabelContext = {
    state,
    dispatch
  }

  return (done
    ? (<ShippingLabel data={state} />)
    : (
      <Wizard
        header="Shipping Label Maker"
        wizardContext={shippingLabelContext}
        steps={[
          GetSenderAddress,
          GetReceiverAddress,
          GetWeight,
          GetShippingOption,
        ]}
        onComplete={() => setDone(true)}
      />
    )
  )
}

export default ShippingLabelMaker

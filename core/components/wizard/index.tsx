// React
import React, { FC, useState, ComponentType } from 'react'

// Components
import { Heading, Progress } from '@chakra-ui/react'

// Types
import { WizardContext } from '../../../types/wizard'
import { Address } from '../../../types/address'

interface StepProps {
  wizardContext: any;
  onAction: (number) => void;
}

interface WizardProps {
  header: string;
  wizardContext: any;
  steps: ComponentType<StepProps>[];
  onComplete: () => void;
}

const Wizard: FC<WizardProps> = ({
  header,
  steps,
  wizardContext,
  onComplete
}) => {
  const [state, setState] = useState(0)

  const handleAction = (number) => {
    switch (number) {
      case (1): 
        if (state > 0) {
          setState(state-1)
        }
        break
      case (2):
        if (state < steps.length - 1) {
          setState(state+1)
        } else {
          onComplete()
        }
        break
    }
  }

  const Component = steps[state]
  return (
    <>
      <Heading as="h1">{header}</Heading>
      <Progress value={(state / steps.length) * 100} />
      <Component wizardContext={wizardContext} onAction={handleAction} />
    </>
  )
}

export default Wizard

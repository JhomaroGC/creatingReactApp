import React from 'react'
import {Text, Flex} from "@chakra-ui/react";
import { getCurrentDate } from '../utils/functions';

const GroupTitle = () => {
  return (
    <Flex alignItems="center">
      <Text color = "grey" fontSize = "24px" pt = "24px" fontWeight={700}>
        Hoy es <Text fontSize = "24px" fontWeight={500} as= "span">{getCurrentDate()}</Text>
    </Text>
    </Flex>
    
  )
}

export default GroupTitle
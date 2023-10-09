import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {Box, Heading, Input, Button } from "native-base"

const AddNewModal = () => {
  return (
    <Box backgroundColor="#ddd" flex= {"1"}>
      <Box p={6} flex= {"1"}>
      <Heading mb="2">Question</Heading>
      <Input
      placeholder = "Enter a new question..."
      fontSize= {20}
      borderColor = "#686565"
      />

      <Heading mt={6} mb={2}>Options</Heading>
      <Input
      placeholder = "Enter a new question..."
      fontSize= {18}
      borderColor = "#686565"
      mb={1}
      />
      <Input
      placeholder = "Enter a new question..."
      fontSize= {18}
      borderColor = "#686565"
      />
      <Box mt={3}>
        <Button colorScheme={"coolGray"}>New Option</Button>
      </Box> 
      </Box>
      <Box>
        <Button>Save</Button>
      </Box>
    </Box>
  )
}
export default AddNewModal
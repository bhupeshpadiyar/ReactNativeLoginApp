import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Dashboard = () => {
   const goToLogin = () => {
      Actions.login()
   }
   return (
      <TouchableOpacity style = {{ margin: 128 }} onPress = {goToLogin}>
         <Text>This is Dashboard</Text>
      </TouchableOpacity>
   )
}
export default Dashboard

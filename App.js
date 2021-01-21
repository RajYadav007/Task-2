import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

var SampleNameArray = [ "2", "3", "10", "15", "26", "35","50","63","82"];
class Inputs extends Component {
  
   state = {
      index: ''
   }
   

  
   handleIndex = (text) => {
      this.setState({ index: text })
   }
   login = ( id) => {
      alert( SampleNameArray[id-1])
   }
   render() {
      return (
         <View style = {styles.container}>
            
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Index"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleIndex}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login( this.state.index)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
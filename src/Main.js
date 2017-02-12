import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Header from './header/Header'

export default class Troump extends Component {
  render() {
    return (
        <View style={{flex: 1,paddingTop: 15, flexDirection: 'column'}}>
          <Header/>
          <View style={{flex: 9}}>
            <Text>body</Text>
          </View>
        </View>
    );
  }
}

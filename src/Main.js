import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Header from './header/Header'
import Body from './body/Body'

export default class Troump extends Component {
  render() {
    return (
        <View style={{flex: 1,paddingTop: 15, flexDirection: 'column'}}>
          <Header/>
          <Body/>
        </View>
    );
  }
}

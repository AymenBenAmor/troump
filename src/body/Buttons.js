/**
 * Created by aymenbenamor on 12/02/17.
 */
import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'

export default class Buttons extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 50, height: 50}} source={require('../assets/img/left-arrow.png')}/>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 50, height: 50}} source={require('../assets/img/rotate_arrow.png')}/>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 50, height: 50}} source={require('../assets/img/right-arrow.png')}/>
      </View>
    </View>)
  }
}
/**
 * Created by aymenbenamor on 26/02/17.
 */
import React from 'react'
import {View} from 'react-native'

export default class Cell extends React.Component {

  render() {
    const {cell} = this.props
    return (<View style={{flex: 1, borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', backgroundColor: cell.color}}>
    </View>)
  }
}
/**
 * Created by aymenbenamor on 26/02/17.
 */
import React from 'react'
import {View, Text} from 'react-native'
import Cell from './Cell'

export default class Line extends React.Component {

  render() {
    const {line, item} = this.props
    return (<View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
      {item.map((item, index) => (<Cell cell={item} line={line} column={index} key={line + '_' + index}/>))}
    </View>)
  }
}
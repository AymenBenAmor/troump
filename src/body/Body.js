/**
 * Created by aymenbenamor on 12/02/17.
 */
import React from 'react'
import {View, Text} from 'react-native'
import Buttons from './Buttons'
import Line from './Line'
import {createGrid} from '../helpers/gridHelper'

export default class Body extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      grid: createGrid()
    }
  }

  render() {
    const {grid} = this.state
    return (<View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 25, flexDirection: 'column'}}>
        {grid.map((item, index) => (<Line lineIndex={index} item={item} key={index}/>))}
      </View>
      <View style={{flex: 1}}>
        <Buttons/>
      </View>
    </View>)
  }
}

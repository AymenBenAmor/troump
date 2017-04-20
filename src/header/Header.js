/**
 * Created by aymenbenamor on 12/02/17.
 */
import React from 'react'
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native'

export default class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      paused: false
    }
  }

  openMenu = () => {
    this.setState({
      paused: true
    })
  }

  closeMenu = () => {
    this.setState({
      paused: false
    })
  }

  render() {
    return (<View style={{flexDirection: 'row'}}>
      <View>
        <TouchableOpacity onPress={this.openMenu}>
          <Image style={{width: 50, height: 50}} source={require('../assets/img/menu.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{justifyContent: 'center', alignItems: 'center', fontSize: 24, fontWeight: '700'}}>Troump</Text>
      </View>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.state.paused}
        onRequestClose={this.closeMenu}
        >
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,.5)'}}>
          <TouchableOpacity onPress={this.closeMenu}>
            <Text>Resume game</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>)
  }
}
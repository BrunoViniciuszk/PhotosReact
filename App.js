import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import PictureList from "./app/components/PictureList";
import CameraDialog from "./app/components/CameraDialog";


export default class App extends Component {

  state = {
    pictureList: [
      { id: '1', url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-abhinav-goswami-291528.jpg&fm=jpg' },
      { id: '2', url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-abhinav-goswami-291528.jpg&fm=jpg' },
      { id: '3', url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-abhinav-goswami-291528.jpg&fm=jpg' },
      { id: '4', url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-abhinav-goswami-291528.jpg&fm=jpg' }
    ],
    isModalOpen: false
  }

  onPictureSelect = (item) => { }

  openModal = () => {
    this.setState({isModalOpen: true})
   }

  closeModal = (response) => {
    this.setState({isModalOpen: false})
  }

  render() {

    const { state } = this;
    return (

      <View style={styles.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect} />
        <View style={styles.footer} >
          <Button onPress={this.openModal} title="Nova Foto" color="#0062ac">

          </Button>
        </View>
        <CameraDialog isOpen={this.state.isModalOpen} onClose={this.closeModal} />
      </View>
    )
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  footer: {
    padding: 15,
    backgroundColor: '#999',
    width: '100%',
    textAlign: 'center'
  },

});

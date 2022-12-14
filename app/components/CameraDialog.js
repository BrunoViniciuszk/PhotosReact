import React, { Component } from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Button } from "react-native";


class CameraDialog extends Component {

        static defaultProps = {
            isOpen: false,
            onClose: () => {}
        }

        state = {
            currentImage: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?cs=srgb&dl=pexels-abhinav-goswami-291528.jpg&fm=jpg'
        }

        getImageFromClipboard = () => {}

        save = () => {
            this.props.onClose();
        }

        shot = () => {}

    render() {
        const {props} = this;
        return (
            <Modal visible={props.isOpen} animationType="slide" transparent={false}>

            <View style={StyleSheet.modalView}>
                <View style={styles.previewContainer}>
                <Image source={{uri: this.state.currentImage}} style={styles.preview}/>
                <TouchableOpacity onPress={props.onClose}>
                    <Text style={styles.closeButton}>X</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.buttonContainer}>
            <Button title="Salvar" onPress={this.save} color="#0062ac">
            </Button>
            

            
            <Button title="Bater" onPress={this.shot} color="#0062ac">
            </Button>

            
            <Button title="Colar" onPress={this.getImageFromClipboard} color="#0062ac">
            </Button>
            </View>

            </Modal>
           
           
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1
    },
    previewContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    preview: {
        width: 100,
        height: 75,
        borderWidth: 2,
        borderColor: 'black'
    },
    closeButton: {
        padding: 15,
        backgroundColor: 'red',
        fontSize: 20,
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        backgroundColor: 'gray'
    }
})

export default CameraDialog;
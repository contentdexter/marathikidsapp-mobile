import React from 'react';
import { Modal, Portal, Text } from 'react-native-paper';
import {ScrollView } from 'react-native';

const InfoModal = (props) => {
    const containerStyle = {
        backgroundColor: 'white', 
        padding: 20, 
        margin: 40,
        borderRadius: 10
    };

    return <Portal>
        <Modal visible={props.visible} onDismiss={props.hideModal} contentContainerStyle={containerStyle}>
            <ScrollView>
            {props.children}
            </ScrollView>
        </Modal>
    </Portal>;
}

export default InfoModal;
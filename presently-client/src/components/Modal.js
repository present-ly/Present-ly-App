import React, { Fragment, Component } from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { Modal, TextInput, View, Text, TouchableHighlight} from 'react-native';
import { InputField } from './InputField'


const ContainerView = styled.View`
	flex: 1;
	justifyContent: center;
	alignItems: center;
	background-color: ${props => props.theme.MAIN_GREEN};
`;

const ButtonContainer = styled.View`
	top: 100;
	padding: 3%;
	margin-bottom: 40%;
`;

// TODO(rany): Translate this to redux
export default class PopModal extends Component {
	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({modalVisible: visible})
	}

	render() {
		return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
				<ContainerView>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
					</View>
				</ContainerView>
        </Modal>
		);
	}

};

			// <ButtonContainer>
					// <TouchableHighlight
						// onPress={() => {
							// this.setModalVisible(true);
						// }}>
						// <Text>Show Modal</Text>
					// </TouchableHighlight>
			// </ButtonContainer>


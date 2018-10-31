import React, { Component} from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import Modal from "react-native-modal";
import { Button } from '.'


const ContainerView = styled.View`
	flex: 1;
	alignItems: center;
`;

const ModalContainer = styled.View`
	alignItems: center;
`;

const ButtonContainer = styled.View`
	padding: 3%;
`

const ModalText = styled.Text`
	fontSize: 32;
	textAlign: center;
	color: ${props => props.theme.WHITE};
`;


class PopUpModal extends Component {

	constructor(props) {
		super(props);
	state = {
		isModalVisible: false
		}
	}
	render() {
		return(
	<ContainerView>
			<Modal isVisible={this.props.isModalVisible}>
				<ModalContainer>
					<ModalText>
						Add your friends/family!
					</ModalText>
					<ButtonContainer>
						<Button text={"Add More"}/>
					</ButtonContainer>
					<ButtonContainer>
						<Button text={"Do later"}/>
					</ButtonContainer>
				</ModalContainer>
			</Modal>
	</ContainerView>
		);
	}
}

export default PopUpModal;

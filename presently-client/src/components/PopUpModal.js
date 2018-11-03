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

class PopUpModal extends Component {

	constructor(props) {
		super(props);
	state = {
		isModalVisible: false
		}
	}
	render() {
		const { viewComp } = this.props
		return(
	<ContainerView>
			<Modal isVisible={this.props.isModalVisible}>
				<ModalContainer>
				{ this.props.viewComp }
				</ModalContainer>
			</Modal>
	</ContainerView>
		);
	}
}

export default PopUpModal;

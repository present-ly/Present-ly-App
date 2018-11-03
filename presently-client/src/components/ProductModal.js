import React, { Component } from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

const MainView = styled.View`
flex: 1;
`;

const AlertView = styled.View`
	flex: 1;
`;

const AlertText = styled.Text`
	fontSize: 12;
`;

const MainText = styled.Text`
	fontSize: 14;
`;

class ProductModal extends Component {
	render() {
	const { modalStatus } = this.props;
		console.log(modalStatus)
		return(
			<MainView>
					<MainText>
						Testing
					</MainText>
			</MainView>
		)
	}
}

export default ProductModal

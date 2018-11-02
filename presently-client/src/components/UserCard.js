import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { 
				Card, CardTitle, CardContent,
				CardAction, CardButton, CardImage
				} from 'react-native-material-cards'

const ContainerView = styled.View`
	flex: 1;
	backgroundColor: transparent;
	alignItems: center;
`;

const InfoText = styled.Text`
	height: ${props => props.height || 'null'};
	padding: 2%;
	fontSize: 10;
	textAlign: center;
`;

class UserCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ContainerView>
				<Card>
					<CardImage 
						source={{uri: 'http://placehold.it/480x270'}} 
						title="Above all i am here"
					/>
					<CardTitle 
						title="This is a title" 
						subtitle="This is subtitle"
					 />
					<CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
					<CardAction 
						separator={true} 
						inColumn={false}>
						<CardButton
							onPress={() => {}}
							title="Push"
							color="blue"
						/>
						<CardButton
							onPress={() => {}}
							title="Later"
							color="blue"
						/>
					</CardAction>
				</Card>
			</ContainerView>
		)

	}
}


export default UserCard;

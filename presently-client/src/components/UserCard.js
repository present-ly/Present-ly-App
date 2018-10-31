import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import {Col, Row, Grid} from 'react-native-easy-grid';


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
				<Grid>
					<Col>
						<InfoText height='50%'>Hello</InfoText>
					</Col>
					<Col>
						<Row>
							<InfoText>Yes</InfoText>
						</Row>
						<Row>
							<InfoText>No</InfoText>
						</Row>
					</Col>
				</Grid>
			</ContainerView>
		)
	}
}

var cardStl = {
		backgroundColor: '#fafafa',
		width: '30%',
		height: '20%',
		overflow: 'hidden',
		boxShadow: '.25px .25px 5px .25px',
		borderRadius: '2px 2px 2px 2px',
		zIndex: 5
};

var headerStl = {
		backgroundColor: '#901111', // red
		padding: '1%',
		color: '#eceff1',
		position: 'relative'
};

var contentStl = {
		color: 'rgb(0, 0, 0, 0.54)',
		padding: '2%'
};


React.render(
		Card(
				{
						userimg: 'http://www.gravatar.com/avatar/6a8561ee5706d17a4382a391720db523.png', 
						username: 'DarthLukan', 
						content: 'Dark Lord of the Sith.',
						cardStyle: cardStl,
						headerStyle: headerStl,
						contentStyle: contentStl
				}
		), document.getElementById('app')
);


export default UserCard;

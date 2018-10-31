import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { InputField, UserCard } from '../components';
import { ScrollView } from 'react-native';

// import ParallaxCard from 'react-parallax-card';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
	backgroundColor: ${props => props.theme.ISABELLINE}
`;

const TitleText = styled.Text`
	padding: 3%;
  fontSize: 24;
	fontFamily: Helvetica;
	fontWeight: bold;
  color: ${props => props.theme.TAUPE};
`;

// TODO: Do react-native-material-design and add the cards

class HomeScreen extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		console.log("Getting ready to mount")
	}

	componentDidMount(){
		console.log("finished mounting!")
	}

  render() {
    return (
      <ContainerView>
				<ScrollView>
				<Grid>
					<Row size={1}>
						<InputField text="Find someone" padding="5%"/>
					</Row>
					<Row>
						<UserCard />
					</Row>
					<Row size={2}>
						<TitleText>Hi Rany, here are some upcoming events</TitleText>
					</Row>
					<Row size={2}>
						<TitleText>Some ideas for . . .</TitleText>
						<Col>
							<TitleText> Test </TitleText>
						</Col>
					</Row>
				</Grid>
				</ScrollView>
      </ContainerView>
    );
  }
}

export default HomeScreen;

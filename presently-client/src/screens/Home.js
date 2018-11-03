import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { InputField, UserCard, ItemCarousel } from '../components';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { updateCart, changeEmailLogin } from '../actions';


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

class HomeScreen extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		console.log("Getting ready to mount")
	}

	componentDidMount(){
		console.log("this.props.updateCart: ", this.props.updateCart)
		console.log("this.props.changeEmailLogin: ", this.props.changeEmailLogin)
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
					</Row>
					<Row size={2}>
						<TitleText>Hi Rany, here are some upcoming events</TitleText>
					</Row>
						<UserCard />
					<Row size={2}>
						<TitleText>Some ideas for . . .</TitleText>
						<Col>
			{/* <TitleText> Test </TitleText> */}
						</Col>
					</Row>
				<Row>
				<ItemCarousel />

				</Row>
				</Grid>
				</ScrollView>
      </ContainerView>
    );
  }
}

const mapStateToProps = (state) =>({
	curState: state
})

export default connect(mapStateToProps, { updateCart, changeEmailLogin })(HomeScreen);

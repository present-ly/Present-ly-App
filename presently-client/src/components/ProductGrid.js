import React, { Component } from 'react';
import styled from 'styled-components/native';
import {Col, Row, Grid} from 'react-native-easy-grid';


const ContainerView = styled.view`
	flex: 1;
	justifyContent: center;
	alignItems: center;
`;

productText = styled.Text`
	fontSize: 30px;
`;

class ProductDisplay extends Component {

	state = {
		products: ''
	}

	componentDidMount(){
	state.products = this.props.getProducts()
		console.log("products: ", products)
	}

	render() {
		const { getProducts } = this.props;
		return (

			{this.state.products}

		)
	}
}

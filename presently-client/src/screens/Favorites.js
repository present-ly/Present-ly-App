import React, { Component } from 'react';
import styled from 'styled-components/native';
import { RelationTable, FlexibleRelationTable } from '../components'
import { ScrollView } from 'react-native'


const ContainerView = styled.View`
  flex: 1;
	backgroundColor: ${props => props.theme.ISABELLINE};
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${props => props.theme.WHITE};
`;

const cells = [
			{
				key: 0,
				header: 'header1',
				info: [
					{
						key: 0,
						title: 'title',
						detail: 'detail'
					},
					{
						key: 1,
						title: 'title2',
						detail: 'detail2'
					}
				]
			},
			{
			key: 1,
			header: 'header2',
			info: [
				{
					key: 0,
					title: 'title2',
					detail: 'detail2'
				}
				]
			}
		]

class FavoritesScreen extends Component {
  render() {
    return (
			<ContainerView>
			<ScrollView>
			{/*<RelationTable />*/}
				<FlexibleRelationTable cells={cells}/>
			</ScrollView>
			</ContainerView>
    );
  }
}

export default FavoritesScreen;

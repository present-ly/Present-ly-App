import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Alert } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import {
  ActivityIndicator,
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";


class RelationTable extends Component {
	render() {
		return (
			<TableView>
          <Section header="STANDARD" footer="A Footer">
            <Cell cellStyle="Basic" title="Basic" />
            <Cell cellStyle="RightDetail" title="RightDetail" detail="Detail" />
            <Cell cellStyle="LeftDetail" title="LeftDetail" detail="Detail" />
            <Cell
              cellStyle="Subtitle"
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            />
            <Cell
              cellStyle="Basic"
              title="Pressable w/ accessory"
              accessory="DisclosureIndicator"
              onPress={() => console.log("Heyho!")}
            />
          </Section>
          <Section header="DISABLED">
            <Cell cellStyle="Basic" isDisabled title="Basic" />
            <Cell
              cellStyle="RightDetail"
              isDisabled
              title="RightDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="LeftDetail"
              isDisabled
              title="LeftDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="Subtitle"
              isDisabled
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            />
            <Cell
              cellStyle="Basic"
              isDisabled
              title="Pressable w/ accessory"
              accessory="DisclosureIndicator"
              onPress={() => console.log("Heyho!")}
            />
          </Section>
          <Section header="ACCESSORY">
            <Cell
              cellStyle="Basic"
              accessory="DisclosureIndicator"
              title="Basic"
            />
            <Cell
              cellStyle="RightDetail"
              accessory="DetailDisclosure"
              title="RightDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="LeftDetail"
              accessory="Detail"
              title="LeftDetail"
              detail="Detail"
            />
            <Cell
              cellStyle="Subtitle"
              accessory="Checkmark"
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
            />
            <Cell
              cellStyle="Basic"
              accessory="Detail"
              title="Pressable w/ accessory"
              onPress={() => console.log("Heyho!")}
            />
          </Section>
          <Section header="Image" footer="A Footer">
            <Cell
              cellStyle="Basic"
              title="Basic"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: "https://facebook.github.io/react/img/logo_og.png"
                  }}
                />
              }
            />
            <Cell
              cellStyle="RightDetail"
              title="RightDetail"
              detail="Detail"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: "https://facebook.github.io/react/img/logo_og.png"
                  }}
                />
              }
            />
            <Cell
              cellStyle="LeftDetail"
              title="LeftDetail"
              detail="Detail"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: "https://facebook.github.io/react/img/logo_og.png"
                  }}
                />
              }
            />
            <Cell
              cellStyle="Subtitle"
              title="Subtitle"
              detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: "https://facebook.github.io/react/img/logo_og.png"
                  }}
                />
              }
            />
            <Cell
              cellStyle="Basic"
              title="Pressable w/ accessory"
              accessory="DisclosureIndicator"
              onPress={() => console.log("Heyho!")}
              image={
                <Image
                  style={{ borderRadius: 5 }}
                  source={{
                    uri: "https://facebook.github.io/react/img/logo_og.png"
                  }}
                />
              }
            />
            <Cell
              cellStyle="Basic"
              title="Disable image resize"
              disableImageResize
              image={
                <Image
                  style={{ height: 50, width: 50, borderRadius: 5 }}
                  source={{
                    uri: "https://facebook.github.io/react/img/logo_og.png"
                  }}
                />
              }
            />
          </Section>
          <Section header="MISC">
            <Cell
              cellStyle="RightDetail"
              title="RightDetail"
              detail="Detail"
              rightDetailColor="#6cc644"
            />
            <Cell
              cellStyle="LeftDetail"
              title="LeftDetail"
              detail="Detail"
              leftDetailColor="#6cc644"
            />
            <Cell
              cellStyle="Basic"
              title="Switch"
              cellAccessoryView={<Switch />}
              contentContainerStyle={{ paddingVertical: 4 }}
            />
            <Cell
              cellStyle="Basic"
              title="ActivityIndicator"
              cellAccessoryView={<ActivityIndicator />}
            />
            <Cell
              cellContentView={
                <TextInput
                  style={{ fontSize: 16, flex: 1 }}
                  placeholder="TextInput"
                />
              }
            />
          </Section>
          <Section header="CUSTOMCELLS">
            <Cell
              onPress={() => console.log("Heyho!")}
              contentContainerStyle={{ alignItems: "flex-start", height: 60 }}
              cellContentView={
                <Text style={{ flex: 1, fontSize: 16 }}>
                  Custom height with Cell-Component
                </Text>
              }
            />
          </Section>
        </TableView>
		)
	}
}


class ListCells extends Component {

	mapsCells(cell){
				var res = cell.map(function(info){
					console.log("info: ", info)
					var title = info.title
					var detail = info.detail
					var key = info.key
					return (
						<Cell
							cellStyle="Subtitle"
							title={title}
							detail={detail}
							onPress={()=>{
									Alert.alert(`Remove ${title}?`, "Confirm",
										[
											{text: "Yes", onPress: ()=> console.log("Yes") },
											{text: "No", onPress: ()=> console.log("No") }
										]
									)
								}
							}
						/>
							)
						}
					)
				return res
				}


	render() {
		const {cells} = this.props
		return (
			this.mapsCells(cells)
		)
	}
}


class FlexibleRelationTable extends Component {

	ComponentDidMount(){
		console.log("cells: ", this.cells)
	}

	mapsTable(cells) {
				var res = cells.map(function(cell){
				var cellHeader = cell.header

				console.log("header: ", cellHeader)
				console.log("cell: ", cell)
				console.log("cell.info: ", cell.info)

				return(

					<Section
						header={cellHeader}
					>
							<ListCells cells={cell.info}/>
					</Section>
					)

				}
			)
			return res
		}

	render() {
		const { cells } = this.props
			return (
				<TableView>
					{this.mapsTable(this.props.cells)}
				</TableView>
			)
		}
}

export { RelationTable, FlexibleRelationTable };

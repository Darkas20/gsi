import React, { Component } from "react";
import { StyleSheet, View, Image, FlatList, Dimensions } from "react-native";

import {
  Container,
  Header,
  Icon,
  Item,
  Input,
  Content,
  Spinner,
  Tabs,
  Tab,
  TabHeading
} from "native-base";

import getImageSearchResults from "./api";
import GridViewSelect from "./components/GridViewSelect";

export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
    searchTerm: "",
    gridView: 2,
    initialPage: 0,
    activeTab: 0
  };

  onChangeSearchTerm = searchTerm =>
    this.setState({
      searchTerm
    });

  loadImages(searchTerm) {
    if (this.state.activeTab !== 0) {
      this.setState({
        activeTab: 0
      });
    }
    this.setState({
      isLoading: true
    });
    getImageSearchResults(searchTerm).then(items =>
      this.setState({
        items: [...items],
        isLoading: false
      })
    );
  }

  onChangeGridView = params =>
    this.setState({
      gridView: params
    });

  render() {
    const { items, isLoading, searchTerm, gridView } = this.state;

    renderItems = ({ item }) => {
      return (
        <Image
          style={{
            height: Dimensions.get("window").width / gridView - 2,
            width: Dimensions.get("window").width / gridView - 2,
            margin: 1,
            resizeMode: "stretch"
          }}
          source={{ uri: item.link }}
        />
      );
    };

    return (
      <Container>
        <Content>
          <Header
            transparen
            noShadow
            noBorder
            searchBar
            hasTabs
            style={styles.header}
          >
            <Item>
              <Input
                placeholder="Search images"
                onChangeText={searchTerm => this.onChangeSearchTerm(searchTerm)}
                value={searchTerm}
                onSubmitEditing={() => this.loadImages(searchTerm)}
              />
              <Icon
                name="ios-search"
                onPress={() => this.loadImages(searchTerm)}
                disabled={searchTerm !== "" ? false : true}
              />
            </Item>
          </Header>
          <Tabs
            tabContainerStyle={{
              elevation: 1
            }}
          >
            <Tab
              heading={
                <TabHeading>
                  <Icon name="images" />
                </TabHeading>
              }
            >
              <View>
                {isLoading && <Spinner color="blue" />}
                {items && (
                  <FlatList
                    style={styles.container}
                    data={items}
                    renderItem={renderItems}
                    keyExtractor={item => item.title}
                    numColumns={gridView}
                    key={gridView}
                  />
                )}
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="apps" />
                </TabHeading>
              }
            >
              <GridViewSelect
                gridView={gridView}
                onChangeGridView={this.onChangeGridView}
              />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  header: {
    borderBottomWidth: 0,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "transparent"
  }
});

// AppRegistry.registerComponent("DisplayAnImage", () => DisplayAnImage);

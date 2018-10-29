import React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";

const GridViewSelect = ({ gridView, onChangeGridView }) => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          paddingTop: 15,
          paddingBottom: 5
        }}
      >
        Select grid view
      </Text>
      <Text
        style={{
          textAlign: "center",
          paddingTop: 5,
          paddingBottom: 15
        }}
      >
        Current view: 2x
        {gridView}
      </Text>
      <Grid>
        <Row style={{ height: 150 }}>
          <Col>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onChangeGridView(2)}
            >
              <Image
                source={require("../img/grid-view2.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onChangeGridView(3)}
            >
              <Image
                source={require("../img/grid-view3.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </Col>
        </Row>
        <Row style={{ height: 150 }}>
          <Col>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onChangeGridView(4)}
            >
              <Image
                source={require("../img/grid-view4.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </Col>
          <Col>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onChangeGridView(5)}
            >
              <Image
                source={require("../img/grid-view5.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    width: "100%",
    height: 150,
    resizeMode: "stretch"
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch"
  }
});

export default GridViewSelect;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import image from "../img/nube.png";

import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Body = () => {
  return (

    <View style={styles.mainContainer}>
      <View style={styles.Header}>
      <AntDesign name="enviroment" style={styles.Icons1} />
        <Text style={styles.txt}>Nueva Guinea</Text>
        <AntDesign name="down" style={styles.Icons2} />
        <AntDesign name="bells" style={styles.Icons3} />
      </View>
      
      <View>
      <Image
        source={image} style={{height: 150, width: 150, marginLeft: 90, }}
      />

      <Text style={styles.grade}>28°</Text>
      <Text style={styles.grade1}>Precipitation</Text>
      <Text style={styles.grade1}>Max.:31° Min.:25°</Text>

        <View style={styles.box1}>

        <MaterialIcons name="grain" style={styles.iconbox1} />
        <Text style={styles.textbox1}>6%</Text>
        <Feather name="thermometer" style={styles.iconbox2} />
        <Text style={styles.textbox2}>90%</Text>
        <FontAwesome5 name="wind" style={styles.iconbox3} />
        <Text style={styles.textbox3}>19 km/h</Text>

      </View>

      <View style={styles.box2}>
        <View style={styles.boxgrades}>
          <View>
            <Text style={styles.texboxgrades}>29°C</Text>
            <FontAwesome5 name="cloud-sun" style={styles.iconboxend} />
            <Text style={styles.texboxgrades}>15.00°C</Text>
          </View>

          <View>
            <Text style={styles.texboxgrades}>26°C</Text>
            <FontAwesome5 name="cloud-sun" style={styles.iconboxend} />
            <Text style={styles.texboxgrades}>16.00°C</Text>
          </View>

          <View>
            <Text style={styles.texboxgrades}>24°C</Text>
            <FontAwesome5 name="cloud" style={styles.iconboxend} />
            <Text style={styles.texboxgrades}>17.00°C</Text>
          </View>

          <View>
            <Text style={styles.texboxgrades}>23°C</Text>
            <FontAwesome5 name="cloud-moon" style={styles.iconboxend} />
            <Text style={styles.texboxgrades}>18.00°C</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxend}>
        <Text style={styles.boxend1}>
          Next Fore Cast free
          <AntDesign name="calendar" style={styles.boxen2} />
        </Text>

        <Text style={styles.boxend2}>
          Monday
          <Entypo name="water" style={styles.boxen2} />
          <Text style={styles.boxendicon}>13°c 10c°</Text>
        </Text>

        <Text style={styles.boxend2}>
          Tuesday
          <Feather name="cloud-lightning" style={styles.boxen2} />
          <Text style={styles.boxendicon}>17°c 12c°</Text>
        </Text>
      </View>
    </View>
        
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
    borderRadius: 50,
    backgroundColor: "#0D3880",
  },
  Icons1: {
    color: "#ffff",
    paddingTop: 1,
    fontSize: 20,
    marginLeft: 30,

  },

  Icons2: {
    color: "#ffff",
    fontSize: 12,
    paddingTop: 9,
    marginLeft: 10,
  },

  Icons3: {
    color: "#ffff",
    paddingTop: 5,
    fontSize: 20,
    marginLeft: 70,
  },

  txt: {
    color: "#fff",
    paddingTop: 1,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  grade: {
    color: "#ffff",
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  grade1: {
    color: "#ffff",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 1,
  },

  box1: {
    marginTop: 10,
    backgroundColor: "#191970",
    width: "80%",
    height: 35,
    borderRadius: 15,
    marginLeft: 35,
  },

  iconbox1: {
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 60,
    marginTop: 10,
  },

  iconbox2: {
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 90,
    marginTop: -15,
  },

  iconbox3: {
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 150,
    marginTop: -20,
  },

  textbox1: {
    color: "#FFFFFF",
    fontSize: 15,
    marginLeft: 40,
    marginTop: -22,
  },

  textbox2: {
    color: "#FFFFFF",
    fontSize: 15,
    marginLeft: 105,
    marginTop: -20,
  },

  textbox3: {
    color: "#FFFFFF",
    fontSize: 15,
    marginLeft: 170,
    marginTop: -20,
  },

  box2: {
    marginTop: 20,
    marginLeft: 35,
    backgroundColor: "#191970",
    width: "80%",
    height: 150,
    borderRadius: 10,
  },

  boxgrades: {
    marginTop: 20,
    width: "80%",
    height: "50%",
    backgroundColor: "#191970",
    flexDirection: "row",
    borderRadius: 10,
  },

  texboxgrades: {
    color: "#ffff",
    marginLeft: 10,
    marginTop: 15,
  },

  boxend: {
    marginTop: 35,
    backgroundColor: "#191970",
    width: "80%",
    height: 100,
    borderRadius: 10,
    marginLeft: 35,
    marginBottom: 20,
  },

  boxend1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  boxen2: {
    marginLeft: 70,
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  boxend2: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 14,
    color: "#FFFFFF",
  },

  boxendicon: {
    color: "#FFFF",

    marginTop: 10,
    marginLeft: 50,
    fontSize: 14,
  },

  iconboxend: {
    fontSize: 30,
    color: "#FFFFFF",
    marginLeft: 20,
    marginTop: 7,
  },

  iconboxend1: {
    fontSize: 30,
    color: "#FFFFFF",
    marginLeft: 20,
    marginTop: 7,
  },

  mainContainer: {
    marginTop: 90,
    backgroundColor: "#0D3989",
    width: "110%",
    height: "100%",
    borderRadius: 20,
    
  },
});

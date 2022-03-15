import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const UserCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{props.username}</Text>
      <View>
      <Text>{props.name}</Text>
      <Text style={styles.email}>{props.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C8C4C3",
    padding: 7,
    marginTop: 10,
  },
  email:{
    fontSize:12,
    fontStyle:"italic",
    color:"grey"
  },
  username:{
    fontWeight:"bold",
    fontSize:15
  }
});

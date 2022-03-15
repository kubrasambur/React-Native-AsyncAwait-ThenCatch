import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import UserCard from "./components/UserCard/UserCard";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    //  async - await yapısında işlem sonucunu beklemeden geçmez. -- TERCİH EDİLİR--

    const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);
    
    /*  then catch ile kullanırsak istek atarız o kod satırı okunur,
        then yapısını atlar daha sonra cevap geldiğinde then yapısı çalışır

    axios.get(URL).then((response) => {
      setLoading(false);
      setUserList(response.data);
    });
    
    */
  }

  const renderUser = ({ item }) => (
    <UserCard name={item.name} username={item.username} email={item.email} />
  );

  //uygulama açıldığı anda verileri çekmek için kullandık
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      // loading true ise ActiviyIndicator ü göster : dan sonrası = değilse Flatlist i göster
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
      {/* <View style={styles.containerbtn}>
        <Button title="Fetch Data" onPress={fetchData} style={styles.button} />
      </View> */}
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  containerbtn: {
    alignItems: "center",
  },
});

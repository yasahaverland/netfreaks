import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#f2cd18d9',
      padding: 20,
  
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#595858'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    image: {
      width: 100,
      height: 170,
      resizeMode: 'cover',
      borderRadius: 5,
      margin: 5,
    }
  });

  export default styles
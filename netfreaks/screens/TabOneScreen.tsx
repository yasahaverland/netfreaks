import { StyleSheet, Image, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import categories from '../assets/data/categories';
import styles from '../components/HomeCategory/styles';

import HomeCategory from '../components/HomeCategory';

const firstCategory = categories.items[0];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList 
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     backgroundColor: '#f2cd18d9',
//     padding: 20,

//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#595858'
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
//   image: {
//     width: 100,
//     height: 170,
//     resizeMode: 'cover',
//     borderRadius: 5,
//     margin: 5,
//   }
// });

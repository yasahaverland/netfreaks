import { StyleSheet, Image, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import categories from '../assets/data/categories';

const firstCategories = categories.items[0];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular on Netfreaks</Text>
        <FlatList 
          data={firstCategories.movies}
          renderItem={({item}) => (
            <Image style={styles.image} source={{ uri: item.poster}} />
          )}
          horizontal
        />
    </View>
  );
}

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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title,click}) => {
  return (
    <View style={styles.item}>
    <View style={{flex:1,justifyContent: 'space-between', flexDirection: 'row',alignItems: 'center'}}>
      <View style={{flex: 1,justifyContent: 'flex-start', flexDirection: 'row',alignItems: 'center'}}>
      <Text
        style={{
          marginLeft: 15,
          fontSize: 25,
        }}>
        {title}
      </Text>
      <Button
        style={{
          width: 20,
          height: 20,
          marginRight: 0,
        }}
        title={'按钮'}
        //source={require('/Users/ahs/untitled/default.png')}
        onPress={() => console.log('Simple Button pressed') }
      />
      </View>
      <View style={{flex:1,justifyContent:'flex-start'}}>
      <Text style={{fontSize: 20, textAlign: 'right'}} numberOfLines={1} ellipsizeMode={'tail'}>{'售货中状态'}</Text>
      </View>
    </View>
      <Text style={{fontSize: 20, marginLeft: 15}}>{'测试文字'}</Text>
</View>
  );
};

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} click={click}/>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );

  const click = () => {
    console.log('点击了按钮')
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#d23131',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 32,
  },
});


export default App;

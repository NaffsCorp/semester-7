import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  Linking,
  ToastAndroid,
  ImageBackground,
} from 'react-native';

interface Mahasiswa {
  namaMhs: string;
  npmMhs: string;
}

interface AppState {
  header: string;
  value: boolean;
  username: string;
  dataMahasiswa: Mahasiswa[];
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      header: 'Home',
      value: true,
      username: '',
      dataMahasiswa: [
        {
          namaMhs: 'Ahmad',
          npmMhs: '170001',
        },
        {
          namaMhs: 'Budi',
          npmMhs: '180001',
        },
        {
          namaMhs: 'Fadhlan',
          npmMhs: '190001',
        },
        {
          namaMhs: 'Fadhil',
          npmMhs: '200001',
        },
        {
          namaMhs: 'Mawar',
          npmMhs: '210001',
        },
        {
          namaMhs: 'Nisa',
          npmMhs: '220001',
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor={'#09bd75'} />

        <View style={styles.imagecontainer}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            {this.state.header}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.image}
          onPress={() =>
            Alert.alert('Information', 'Anda akan menghapus gambar ini?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ])
          }>
          <ImageBackground
            style={{
              width: 300,
              height: 300,
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 20,
            }}
            source={require('./src/images/beautiful-anime-character-cartoon-scene.jpg')}>
            <Text style={{color: 'white', fontSize: 15}}>React-Native</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://www.prinafsika.world')}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Open Website
          </Text>
        </TouchableOpacity>

        <FlatList
          style={{flex: 1, paddingTop: 20}}
          data={this.state.dataMahasiswa}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.flatListItem}
              onPress={() =>
                ToastAndroid.show(item.namaMhs + ' di klik', ToastAndroid.SHORT)
              }>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                {item.namaMhs}
              </Text>
              <Text style={{color: 'white'}}>{item.npmMhs}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.npmMhs}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03fc98',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    elevation: 3,
    borderRadius: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#03fc98',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    color: 'black',
  },
  switch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imagecontainer: {
    backgroundColor: '#03fc98',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 20,
  },
  flatListItem: {
    marginBottom: 20,
    backgroundColor: '#03fc98',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
});

export default App;

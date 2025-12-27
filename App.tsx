import { useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  // const [name, setName] = useState<string>("Phúckk");
  // const [test , setTest] = useState({
  //   name : 'Phúckk',
  //   age : 18
  // });

  const [count, setCount] = useState<number>(0);
  const [acount, setAcount] = useState({
    username: '',
    age: ''
  });
  const usernamRef = useRef(null);

  return (
    //Bọc trong là các View
    <View style={styles.container}>
      <Text style={styles.textStyle1}>Tên Tài Khoản </Text>
      <TextInput id='username' nativeID='username' style={styles.textINput}
        multiline
        value={acount.username}
        onChangeText={(value) => setAcount({ ...acount, username: value })}
        ref={usernamRef}
      />
      <Text style={styles.textStyle1}>Mật khẩu </Text>
      <TextInput id='age' nativeID='age' style={styles.textINput}
        multiline
        keyboardType='numeric'
        value={acount.age}
        maxLength={3}
        onChangeText={(value) => setAcount({ ...acount, age: value })}

      />
      <View >
        <Button
          color={"red"}
          title="Choose" onPress={() => {
            //lấy giá trị từ TextInput

            // Alert.alert(`Tài khoản: ${acount.username} \n Mật khẩu: ${acount.age}`);
            Alert.alert(`Tên tài khoản: ${usernamRef.current?.value}`);
          }} />
      </View>
      <Text>{JSON.stringify(acount)}</Text>
    </View>

  );
}



const styles = StyleSheet.create({

  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textStyle1: {
    color: 'red',
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: 10,
  },
  textINput: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 12,

  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
  butonStyle: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
});


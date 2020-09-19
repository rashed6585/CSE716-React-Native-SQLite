import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import {openDatabase} from 'react-native-sqlite-storage';

//Connction to access the pre-populated UserDatabase.db
var db = openDatabase({
  name: 'test.db',
  createFromLocation: '~UserDatabase_D.db',
  location: 'Library',
});

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Mytext text="CSE716 Advance Database System" />
          <Mybutton
            title="Input"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="View Output All"
            customClick={() => navigation.navigate('ViewAll')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

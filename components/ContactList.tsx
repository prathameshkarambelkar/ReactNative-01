import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Prathamesh K',
      status: 'Student',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1647997577562816512/kuK-zecY_400x400.jpg',
    },
    {
      uid: 2,
      name: 'Prathamesh K',
      status: 'Student',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1647997577562816512/kuK-zecY_400x400.jpg',
    },
    {
      uid: 3,
      name: 'Prathamesh K',
      status: 'Student',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1647997577562816512/kuK-zecY_400x400.jpg',
    },
    {
      uid: 4,
      name: 'Prathamesh K',
      status: 'Student',
      imageUrl:
        'https://pbs.twimg.com/profile_images/1647997577562816512/kuK-zecY_400x400.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    backgroundColor: '#12CBC4',
    margin: 8,
    borderRadius: 8
  },
  userImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 8
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus: {
    fontSize: 16
  },
});

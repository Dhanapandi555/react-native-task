import {View, Text,StyleSheet} from 'react-native';
import React from 'react';


const Card = ({duration, title}) => {
  console.log(duration.replace('.', ':').slice(0, 4));
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.duration}>
        {duration.replace('.', ':').slice(0, 4)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 80,
    elevation: 1,
    paddingHorizontal: 20,
    zIndex:20
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  duration: {
    fontSize: 20,
    color: 'black',
  },
});

export default Card;

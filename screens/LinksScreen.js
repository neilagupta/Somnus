import React from 'react';
import { Text, TextInput, Slider, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Data',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

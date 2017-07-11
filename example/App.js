import React from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

const styles = StyleSheet.create({
  sampleText: {
    margin: 14,
  },
});

function SampleText({ children }){
  return <Text style={styles.sampleText}>{children}</Text>;
}

function MyNavScreen({ navigation, banner }) {
  return <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
      title="Go to a photos screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>;
};

function MyHomeScreen({ navigation }) {
  return <MyNavScreen banner="Home Screen" navigation={navigation} />;
}
MyHomeScreen.navigationOptions = {
  title: 'Welcome',
};

function MyPhotosScreen({ navigation }) {
  return <MyNavScreen
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />;
}
MyPhotosScreen.navigationOptions = {
  title: 'Photos',
};

function MyProfileScreen({ navigation }) {
  return <MyNavScreen
    banner={`${navigation.state.params.mode === 'edit' ? 'Now Editing ' : ''}${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />;
}
MyProfileScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

const SimpleStack = StackNavigator(
  {
    Home: {
      screen: MyHomeScreen,
    },
    Profile: {
      path: 'people/:name',
      screen: MyProfileScreen,
    },
    Photos: {
      path: 'photos/:name',
      screen: MyPhotosScreen,
    },
  },
  {
  transitionConfig: getSlideFromRightTransition,
});

export default SimpleStack;

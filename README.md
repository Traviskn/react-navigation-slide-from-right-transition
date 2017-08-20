# Slide From Right Transition Config for React Navigation

This is a slide from right transition config ported from the codebase of [react navigation](https://github.com/react-community/react-navigation/) to enable usage on Android.

![Example App Screen Capture](https://raw.githubusercontent.com/traviskn/react-navigation-slide-from-right-transition/master/static/react-navigation-slide-from-right.gif)

## Motivation
On iOS, the default transition animation for React Navigation's card stack is a slide from right animation.
I had a project which required the same slide from right animation on Android, so I decided to pull out the
transition config into this library.  See the corresponding issue [here](https://github.com/react-community/react-navigation/issues/705) to track any potential progress on getting a slide from right transition on Android.

## Installation and Usage

- Install this library

`npm install --save react-navigation-slide-from-right-transition`

- Pass down the custom transition configuration to your `react-navigation` StackNavigator:

```javascript
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

/* ... your react component code here ... */

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
}, {
  transitionConfig: getSlideFromRightTransition
});
```

- Now your stack navigator will slide from the right when you push screens onto the stack, and slide to the left when you pop screens off of the stack on Android!

## Example

Check out the example app included in the github repo to see the slide-from-right transition in action!
I assume you already have the react-native-cli installed, as well as the required Android dependencies.

```
git clone https://github.com/Traviskn/react-navigation-slide-from-right-transition.git

cd react-navigation-slide-from-right-transition/example
npm install
```

Use `react-native run-android` to run the example.

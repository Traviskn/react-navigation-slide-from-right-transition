# Slide From Right Transition Config for React Navigation

This is a slide from right transition config ported from the codebase of [react navigation](https://github.com/react-community/react-navigation/) to enable usage on Android.

## Motivation
On iOS, the default transition animation for React Navigation's card stack is a slide from right animation.
I had a project which required the same slide from right animation on Android, so I decided to pull out the
transition config into this library.  See the corresponding issue [here](https://github.com/react-community/react-navigation/issues/705) to track any potential progress on getting a slide from right transition on Android.

## Installation and Usage

- Install this library
`npm install --save react-navigation-slide-from-right-transition-config`

- Pass down the custom transition configuration to your `react-navigation` StackNavigator:

```javascript
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransitionConfig from 'react-navigation-slide-from-right-transition-config';

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen
  }
}, {
  transitionConfig: getSlideFromRightTransitionConfig
});
```

- Now your stack navigator will slide from the right when you push screens onto the stack, and slide to the left when you pop screens off of the stack on Android!

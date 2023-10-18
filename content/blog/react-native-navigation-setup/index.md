---
title: Navigation setup in React Native
date: "2023-10-11T22:12:03.284Z"
description: React Navigation basics.
---

In a typical React Native application, you'll often find the need to manage multiple screens and navigate between them while passing data.

This is where navigation libraries come to the rescue. In this blog post, we will explore React Navigation, the most popular navigation library for React Native applications.

## Installation

Before diving into React Navigation, we need to ensure we have the necessary packages installed:

If you want to follow along with the code example, you can clone the [repo](https://github.com/jamzi/introduction-to-react-native-with-expo).

Checkout to the branch `2-navigation-start` and install the packages (`yarn / npm install`).

Alternatively, you can manually install the required packages using the following command:

> npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

**Tip**: Expo CLI offers an install command that not only checks for compatible package versions but also runs the package manager's install command.

Now, let's briefly describe the installed libraries:

- @react-navigation/native and @react-navigation/native-stack: These serve as the foundational libraries for React Navigation.
- react-native-screens: This is a helpful dependency for handling native screens efficiently.
- react-native-safe-area-context: This library aids in managing safe areas, such as screens with notches.

Additionally, I've included some TypeScript configuration for navigation, which will simplify our development process. Once the packages are installed, we can get started with the following steps:

## Adding a Navigation Container

The `NavigationContainer` is crucial for managing navigation state and connecting your navigator to the app. It should encompass your entire application code at the root level.

```js
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <Text>App.tsx</Text>
    </NavigationContainer>
  )
}
```

## Creating a Stack Navigator

React Navigation's native stack navigator provides a method for transitioning between screens and managing navigation history. Think of it like how a web browser handles navigation state - your app pushes and pops items from the navigation stack.
Begin by defining a stack navigator and then proceed to specify the screens within it.

```js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

            </Stack.Navigator>
        </NavigationContainer>
    );
}
```

## Adding screens

Screens are contained within a navigator and serve as the user interface elements where we handle navigation to other screens and process any parameters passed to them.

For our example, we will introduce two screens: the Home screen (the default screen) and a Details screen. You can also set default options for screens, such as titles and initial parameters.

```js
import DetailsScreen from "./src/DetailsScreen"
import HomeScreen from "./src/HomeScreen"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

## Navigating between screens

While inside a screen, we are given access to props, including navigation and route. We can utilize the navigation prop to transition to another screen using the `navigation.navigate` method. Here, you can also pass any parameters you want to transmit to the destination screen, like an ID or a data object.

**Tip**: If you find yourself without direct access to the navigation prop, such as when you're within a child component, you can leverage the `useNavigation` hook from React Navigation to retrieve the navigation object and access the same methods (navigation, goBack, etc.).

```js
import { HomeScreenProps } from "./navigation/types"

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const navigateToDetails = () => {
    navigation.navigate("Details", { email: "test@test.com" })
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Navigate to Details" onPress={navigateToDetails} />
    </View>
  )
}
```

## Reading the passed params

When navigating to another screen and passing parameters, you can retrieve these parameters using the route prop accessible within the screen. For example, to access the email, you can use the following code.

```js
import { DetailsScreenProps } from "./navigation/types"

export default function DetailsScreen({
  navigation,
  route,
}: DetailsScreenProps) {
  const email = route.params?.email

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{email}</Text>
    </View>
  )
}
```

## Challenge

Add a button to the Details screen that allows you to navigate back to the Home screen. But there's a catch - don't use the same navigate method we used to navigate to the Details screen.

**Need a hint?** Check out the [React Navigation docs](https://reactnavigation.org/docs/navigation-prop/).

## Resources

If you're keen on exploring more advanced routing topics like tabs, drawers, or deep linking, be sure to visit the React Navigation documentation.

Additionally, you might want to check out Expo Router, a convenient package with some cool features that's easier to use and builds upon the foundation of React Navigation.

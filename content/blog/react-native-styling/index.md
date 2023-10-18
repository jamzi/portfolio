---
title: Basics of styling in React Native
date: "2023-10-16T22:12:03.284Z"
description: Make it pop!
---

Styling a React Native app is really similar to how you would style a web application with CSS.

## Styling with StyleSheet

The StyleSheet API is exposed by React Native, allowing you to declare the styles using a JavaScript object.

```js
const App = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "lightblue",
    }}
  >
    <Text>Home Screen</Text>
  </View>
)
```

If you've worked on a web project with CSS, the style properties will feel familiar. For layouts, you can use Flexbox, which is fully supported.

Note that a few Flexbox properties, like `flex-direction`, have different default than on the web. For example, in React Native, the default is `column` due to the vertical nature of mobile screens. All dimensions in React Native are unitless and represent density-independent pixels.

There are also some convenient properties, like `marginHorizontal`, which combines `margin-left` and `margin-right` properties.

**Deep dive**:

Under the hood, React Native uses the Yoga layout engine, built internally by Meta, the creators of React Native. There is a [playground](https://yogalayout.com/playground) website, where you can experiment with different layouts and see how they will render in React Native.

**Tip**: I would encourage you to avoid writing too many inline styles and define most of the styles inside the `StyleSheet.create` method. It will make your code cleaner. You can then add some dynamic styles inline when need to access different parts of the props or state. I usually add them at the end of the file because my mentality is that when you navigate to a file, you want to see the component code first.

If you want to follow along with the code example, you can clone the [repo](https://github.com/jamzi/introduction-to-react-native-with-expo).

Checkout to the branch `3-user-interface-start` and install the packages (`yarn / npm install`).

```js
import { StyleSheet, Text, View } from "react-native"

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>React Native</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
  },
  text: { fontSize: 20 },
})
```

## Using images

React Native includes a variety of core components, and the Image component is one of them. It is similar to the browser image tag. You can load network, static or disk images.

If you add some local images (for example, an empty state image), it's best to save them in the /assets folder at the root of the project. This is also where the app icon and the splash screen reside. If you would like to use another image for app icon / splashscreen with a different path, you can adjust the `icon` and `splash.image` properties in the app.json configuration.

**Tip**: While the built-in image component is great for most use cases, there is a benefit to using a specialized Image library like Expo Image. It's more performant and it has better caching while providing extra features like BlurHash, which displays a blurred version of the image while loading, improving the percieved loading speed.

## Handling safe areas

As React Native developers, we need to support many different devices with distinct hardware features like notches or software features like status or navigation bars.

When trying to place UI elements on the screen, you may notice that these features overlap your content.

We want to display our content only in the "safe areas", where there is no overlap.

For this, we will use the some helpers from the `react-native-safe-area-context` library, which was installed in our previous blog post about navigation.

This library provides a helper React hook called `useSafeAreaInsets`, which is the best way to get the safe area measurements and use them on a screen.

```js
import { useSafeAreaInsets } from "react-native-safe-area-context"

const App = () => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.text}>React Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
  },
  text: { fontSize: 20 },
})
```

In the example above you can see how we can combine the container styles with some dynamic style from the component.

## Challenge

Add an image from a local source (assets folder) and rotate it by 45 degrees.

**Need a hint?** Check out the [React Native's Image component docs](https://reactnative.dev/docs/image/).

## Resources

React Native core components: https://reactnative.dev/docs/components-and-apis

Expo Image: https://docs.expo.dev/versions/latest/sdk/image/

Handling safe areas: https://reactnavigation.org/docs/handling-safe-area/

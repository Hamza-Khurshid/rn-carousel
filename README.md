# rn-carousel
A simple carousel widget built with React Native

## Setup
- "npm install" or "yarn install"
- "npx react-native run-android" to run on android device
- "cd ios; pod install; cd../" (Only for ios)
- "npx react-native run-ios" to run on ios device

These commands will setup node_modules and run application on emulator/simulator.

## Summary
+ It is a simple Carousel application that shows images from a JSON file in carousel. Initially carousel has four images and two buttons to go next and previous. Clicking on next/prev button will slide to next/prev four images.

### Project Structure
             
+ source
	+ commonComponents
        + carousel
            + index.js
            + data.json
            + CarouselItem.js
            + style.js
	+ screens
		+ home
		    + index.js

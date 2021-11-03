# MyPlaces - Share your favorite places with friends.
**Backend files for the MyPlaces app. ([MyPlaces Frontend](https://github.com/alban44980/places-client))**

[![All Contributors](https://img.shields.io/badge/all_contributors-4-yellow.svg?style=flat-square)](#contributors-)
[![GitHub license](https://img.shields.io/github/license/alban44980/places-client)](https://github.com/alban44980/places-server/blob/develop/LICENSE)[![GitHub release](https://img.shields.io/github/release/alban44980/places-server](https://github.com/alban44980/places-server/releases/tag/0.9.0)

<p align="center">
 <img src="./readmeFiles/myplaceslogo1.png" alt="myplaces logo" width="300px;" >
</p>

MyPlaces is an app for people who believe the recommendation of a friend is more valuable than that of a stranger.

No longer will people have to send large notes and messages for recommended places. Just say 'Add me on MyPlaces'. 

<p align="center">
 <img src="./readmeFiles/myplaces1.png" >
</p>

So what is a Place? A Place is exactly that. A Place anywhere in the world that is recommended, created either by the current user or another user. Each Place has an image, description, location and relevant tags (such as nature, food and drink, or music), so you can search for and find exactly what you are looking for. Users can signup and create a personal account and profile page. Once logged in, if you have friends already, you will be able to view a list of friends, cities and their Places, as well as a search functionality. From here, users can search based a specific city, filtering by friend or tags and view all the available Places.

The map feature populates the map with the location of your friends Places based on your current location. With the ability to search over the world. When selected, each place displays a preview of the Place and its related tags.

<p align="center">
 <img src="./readmeFiles/myplaces2.png" >
</p>

Places can be added or removed from the users SavedPlaces list at anytime. Accessible on the Profile page, so the best recommendations are never missed or never forgotten. 

A user can easily view their friends list and add/remove friends at any time.

<p align="center">
 <img src="./readmeFiles/myplaces3.png" >
</p>

Finally, the user can add their own Place or Places, anywhere in the world that they recommend. Simply upload an image, description, location with relevant tags. Other users can now search your profile and follow you to see your places.

Enjoy!


## Table of Contents:

[MyPlaces Frontend](https://github.com/alban44980/places-client)
[Tech Stack](#tech-stack)  
[Running MyPlaces](#running-myplaces)  
[Developers Team](#developers-team)  


## Tech Stack

[React Native](https://reactnative.dev/)  
[Typescript](https://www.typescriptlang.org/)  
[Expo](https://expo.io/)  
[Redux](https://redux.js.org/)  
[Auth0](https://auth0.com/)  
[Express](https://expressjs.com/)  
[PostgreSQL](https://www.postgresql.org/)  
[Sequelize](https://sequelize.org/)   
[Google Places API](https://cloud.google.com/maps-platform/places)


## The server

- Fork & clone the [MyPlaces Backend](https://github.com/alban44980/places-server)
- Make sure you have postgreSQL installed on your machine mac || windows
- Run npm i in the places-server directory
- Adjust the necessary env variables to match your system
- Run npm run dev to start the server


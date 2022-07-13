# Genre Pioneers

This project calls a music catalogue API, and filters for album releases based on genre and returns the 3 earliest albums in the data that is returned.
Essentially, what it does is to show the "pioneering" albums of the particular genre.

### Technical Used

- React.js
- Within React:
  - useState, useEffect, props, url fetching

### Wireframes

The main file, App.js, contains the headers and description for the app. There is only one main component called in this file called "Input".

The components are nested in such a manner:

App.js > Input.js > APICaller.js > ImagePlaceholder.js

It is done in this manner so as to maintain the flow of data from one component to the next, as well as to delineate the separate processes needed for the app to function. 

### User Stories

User must be able to:

- Search for music genres
- See the three earliest albums from that genre
- Key in another search for another genre that returns the albums from the new genre

---

## Planning and Development Process

# Input.js
Input.js contains the search query form, which contains the text input box as well as the submit button.
Appended below the search query form is the component "APICaller", which, as its name suggests, functions as the component which issues the calls from the API.
Within Input.js itself, the data that is stored is the search query string, as well as the query to be sent upon submission of the form. This string query (the "genre" to be searched) has its state set upon form submission. This state is then passed to the APICaller through props. "APICaller" exists in the return part of this component.

# APICaller.js
Within the APICaller component lies two actions. The first is the function that calls upon the API to return a URL request based on the string query (the "genre") whose state was set in Input.js. This query is passed into the URL string which then requests for the data from the API.
The API returns an array of albums with information of importance pertaining to cover image, album title, and year of release. This array is then sorted with the earliest releases being at the beginning of the array.
This API caller function is couched in a useEffect such that the API will only make the call upon the state of the search query being set in the "Input" component.

There are three states that are set within this component. They consist of the the cover image, title, and year of release of the first three albums in the array that was previously sorted. This information is then passed into the next component, "ImagePlaceholder", which is in the return section of this component.

# ImagePlaceholder.js
The ImagePlaceholder.js component, as the name suggests, is a placeholder for the structure of the images and descriptions that will be returned in the page itself. This component merely holds the structure that the images and album descriptions will be displayed in, and thus leaves all the data manipulation to its parent "APICaller" component through props. 

### Problem-Solving Strategy

Thought of a straight-line method to separate the different components with their different functions to eventually arrive at a complete app. See "Wireframes".

### Unsolved problems

- a nil return for when the API does not contain the genre
- expanding the data list beyond the rate-limit of 100 per query to get more accurate results 

## APIs Used

API used: https://www.discogs.com/developers

The discogs API was used as it was relevant to the information being searched (music genre) since the idea of the app was formulated on the coders love of the roots of music.

---

## Acknowledgments

- Discogs.com 

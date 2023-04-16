# MERN-Application-Project

## Shmovie Fanatics

A movie library app that allows users to search and discover all different types of movies and leave reviews. 

## Features

1. Users can search specific movie titles or they can browse by genre. 
2. Users can leave reviews/ratings on specific movies. 
3. Users can watch movie trailers. 
4. Users can create & have their own profiles where they save their favorite movies. 
5. Users prompted by movie-related voting polls upon opening the app. 
6. Users can comment on other user's comments, creating threads on movie reviews.
7. Like/dislike feature for comments.
8. Views for specific movies and actors. 

## App Description

On the main home page, there will be a navbar, gallery and sidebar. By default, the gallery will display new/upcoming movie images, titles and release year. The navbar has a Home button that shows on all views. The sidebar has a seachbox where users can search different movie titles. 

Upon hovering over a gallery item, that specific movie item will expand and display a larger movie image, the movie name, release year, genre & average rating. 

Upon clicking on said movie, a movie view/component pops up displaying more details info about the movie. 

## Components and State Management

- NavBar: 
- SideBar: manage state at app level; holds searchbar and state changes based on what's input in searchbar
- Gallery: Displays gallery item; static
- Gallery Item: when data's input in the searchbar, the GalleryItems change accordingly. 
- Movie: This component is displayed once a GalleryItem is clicked. 
- Review/Ratings
- Actor
- About 
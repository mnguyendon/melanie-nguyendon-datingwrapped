# Project Title

Dating Wrapped

## Overview

What is your app? Brief description in a couple of sentences.

Dating Wrapped is an app that allows you to track your dates throughout the year so you can explore your dating patterns.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

Dating these days is quite exhausting so if you have an app that allows you to show your dating patterns it could help you avoid the wrong person. Looking back at your dating history can also be fun if you don't take your dating life too seriously.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

The market for my app are those who are actively dating or those who enjoy chaos. The main idea for this app stemmed from tiktok users who have made powerpoint presentations on their dating lives. With an app you can skip the step of using a google spreadsheet and have something thats easily accessible to track any horror stories.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- SCSS
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Login page (main)
- Register page
- User home
- Past Dates
- Past Date profile
- New Person Form
- New Date Form

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Users:
Each user represents an individual who uses the Dating Wrapped app.
Data associated with users includes:

- Email
- Password (hashed for security)

Past Dates:
Past dates represent instances of dates that users have gone on.

People:
People represent individuals whom users have dated.

Relationships:
Each user can have multiple past dates, but each past date belongs to only one user.
Each past date can have only one partner, but each partner can be associated with multiple past dates.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET /past-dates Retrieve a list of all past dates for the logged-in user.
GET /past-dates/:id Retrieve details of a specific past date by its ID.
POST /new-date Add a new date for the logged-in user.
POST /new-person Add a new person for the logged-in user
POST /register Add user account
POST /login Login a user

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

Registration: User passwords will be securely hashed and stored, and upon successful registration, a JWT will be generated and sent to the client.
Login: Users will provide credentials for login, which will be verified by the server, and a JWT will be issued upon successful authentication.
JWT Usage: JWTs will be securely stored in client-side local storage and included in request headers for subsequent authenticated requests, with server middleware verifying JWTs on protected routes.
Authorization: Certain routes will be protected and require valid JWTs for access, with server-side authorization checks ensuring users can only access or modify their own data.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

DELETE /past-dates/:id Delete a specific past date for the logged-in user.
DELETE /-dates/:id Delete a specific past date for the logged-in user.

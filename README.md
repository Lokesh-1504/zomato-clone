[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/JTy-CUJF)
# Project Assignment: Zomato Restaurant Listing & Searching
 
## Key Use Cases
 
### Data Loading
Create an independent script to load the Zomato restaurant data available [here](https://www.kaggle.com/datasets/shrutimehta/zomato-restaurants-data) into a database.
 
### Web API Service
Develop a web API service with the following endpoints to serve the content loaded in the previous step:
  - **Get Restaurant by ID**: Retrieve details of a specific restaurant by its ID.
  - **Get List of Restaurants**: Fetch a list of restaurants with pagination support.
 
### User Interface
Develop a web application with the following pages, which must connect to the web API service:
  - **Restaurant List Page**: Display a list of restaurants. Clicking on a restaurant should navigate the user to the restaurant's detail page.
  - **Restaurant Detail Page**: Show details of a specific restaurant.
  - **Location search**: Search restaurants in given latitude and longitude range (e.g restaurants in 3 km of a given latitude and longitude)
  - **Image search**: Upload an image of a food like icecream, pasta etc., and search restaurants which offer those cuisines.

## Additional Use Cases (Optional)
If time allows, implement the following additional features, ensuring they are supported in both the API and the UI:
- **Filtering Options**:
  - By Country
  - By Average Spend for Two People
  - By Cuisines
- **Search Functionality**: Enable search for restaurants by name and description.






# My Submission

## Project Overview
This project is a Zomato-like food delivery web application where users can explore, filter, and order food from a wide variety of restaurants. The platform allows users to filter restaurants by country, search within a specific radius, and choose based on their preferred cuisine. Built with modern web technologies, this application aims to deliver a user-friendly experience for browsing and ordering food online.

## Features Explanation
1. Country-Wise Filter
This filter allows users to choose restaurants based on their country of residence. Users can select from a list of supported countries, and the application will display only the restaurants available in that country.

![Screenshot (146)](https://github.com/user-attachments/assets/47c9f885-6b21-40a7-b77d-7a2930f971c0)

# Country-India
![Screenshot (151)](https://github.com/user-attachments/assets/9c8a6512-30e2-40f7-916e-83c72127fb49)

# Country-New Zealand
![Screenshot (152)](https://github.com/user-attachments/assets/b2c8e103-0ed6-41db-9144-43031698ac0c)


2. Cuisine-Wise Filter
Users can select their preferred cuisine, such as North Indian, Italian, Chinese, etc., to refine the list of restaurants. The cuisine filter is multi-select, allowing users to pick more than one option.

![Screenshot (145)](https://github.com/user-attachments/assets/1211dd4c-0bb3-42c1-ab70-6dc8d8e7321d)

# Cuicine-Beverages
![Screenshot (149)](https://github.com/user-attachments/assets/b9014895-20eb-4a0d-b6b3-15cfecf70723)

# Cuicine-Italian
![Screenshot (150)](https://github.com/user-attachments/assets/03afd3f0-901c-4e42-bc4d-143e87fa50d5)


3. Radius-Wise Filter
This feature enables users to filter restaurants based on proximity to their location. Users can specify their current location and set a radius in kilometers or miles. Only restaurants within that radius are displayed.

![Screenshot (144)](https://github.com/user-attachments/assets/7b9900c5-2e0d-4de7-a953-87de78107a8e)

4. Get Restaurant by ID
   ![Screenshot (147)](https://github.com/user-attachments/assets/d398b47a-cc89-4036-a0f6-93c0e3b005b7)

   ![Screenshot (148)](https://github.com/user-attachments/assets/8a803332-1cfd-48b1-968f-2c5f5be3621e)






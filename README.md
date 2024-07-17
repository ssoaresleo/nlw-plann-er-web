<a id="readme-top"></a>

<p align="center">
  <img src="https://github.com/user-attachments/assets/1dcf0219-5814-42e4-9e2c-c310908398b7" alt="Descrição da imagem">
</p>

<h1 align="center">Plann.er</h1>

## Topics

- [Stacks](#stacks)
- [About](#about)
- [How to Use](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Licence](#licence)

## About

<p align="start">
    A desktop application for creating travel plans for work or vacations with friends, registering activities, adding important links, and inviting new participants. This project was developed during Rocketseat's NLW event in the React track.
</p>

## Stacks

- React
- TypeScript
- Tailwind
- Zod
- React Hook Form

## Features

- Create a trip
- Add guests
- Add activities to the trip
- Add important links to the trip
- Add more guests to the trip
- Update trip destination and date

<!-- GETTING STARTED -->
## Getting Started

To run the Planner application locally, follow these steps.

### Prerequisites

To run the application, you need to clone the backend repository as well. You can find the backend repository at the following link:

 ```sh
   git clone https://github.com/ssoaresleo/nlw-journey-rocketseat
   ```

### Installation

Before running the application, you need to set up both the frontend and backend environments:

### Frontend

Download the frontend source code.

1. Clone the repo
   ```sh
   git clone https://github.com/ssoaresleo/nlw-plann-er-web
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server to run the application in development mode.
   ```sh
   npm run dev
   ```

### Backend

Assuming you have already cloned the backend repository, follow these steps to set it up.

1. Install NPM packages
   ```sh
   npm install
   ```
2. Start the backend using Docker
   ```sh
   docker-compose up
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Here are some examples of how to use the application after configuration

### Creating a Trip

#### Step 1

To create a trip, the first step is to choose the destination, start date, and end date of the trip. This information helps in organizing and planning the itinerary effectively.

![trip-step-1](https://github.com/user-attachments/assets/31047505-f9e1-4339-a01b-3830746f1f3c)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Step 2

In this step, you can enter multiple email addresses of people you want to invite to join the trip. They will receive invitations to collaborate and plan together.

![trip-step-2](https://github.com/user-attachments/assets/b0e9cc78-e3aa-4f67-a382-8a2b85403606)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Step 3

Confirm the trip details by providing the owner's name and email address for final confirmation. The owner will receive an email to confirm the creation of the trip. After confirmation, they will be redirected to a screen displaying trip details. Confirmation emails will also be sent to participants, informing them about the trip.

![trip-step-3](https://github.com/user-attachments/assets/516469e9-c808-4e85-87dc-a7f8de39212f)

**Note:** Confirmation emails for participants will appear in the terminal of the backend.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Trip Details

Here is an example of the Trip Details screen, where users can view all the information related to a specific trip. This screen typically includes details such as destination, dates, invited guests, activities planned, and important links.

![trip-details](https://github.com/user-attachments/assets/98827e05-fb3e-4181-8e56-798c452166b0)

## Participant Confirmation

Here is an example of the Participant Confirmation screen. When invited to join a trip, participants receive an email with a link to confirm their participation.

![trip-confirmation-participant](https://github.com/user-attachments/assets/0e260cdd-b843-45f5-93db-90e1b9476c38)

This section demonstrates how participants interact with the invitation confirmation process in your application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Developers

[<img src="https://avatars.githubusercontent.com/u/100442262?v=4" width=80> <br><sub>Leonardo Henrique</sub>](https://github.com/ssoaresleo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

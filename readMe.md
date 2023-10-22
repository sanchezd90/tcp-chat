# TCP Chat App

The TCP Chat App is a basic chat program that uses TCP/IP to connect. This app was developed using AI tools, primarily as a learning exercise to explore the integration of AI capabilities in the app development process. 

## Description

It has a backend with three main parts: Server, Client, and httpServer. The Server helps manage connections between clients so they can chat smoothly. The Client lets users connect to the server and talk to each other. The httpServer allows you to check messages and get simple info using a web browser. It also has a frontend that displays the chats stored in the database. 

## Role of AI tools

I used chatGPT primarily to build the frontend components the fastest way possible so that I could focus on the development of the backend services. The entire development of the frontend took me less than 20 minutes. 

I also used chatGPT as aid in the creation of this readMe.dm. It took me less than 30 minutes, being this the very first readMe file I've ever written. 

## Installation

1. Clone the repository: `git clone https://github.com/sanchezd90/tcp-chat`
2. Follow the steps for the backend and frontend installation. 


### Backend

1. Open a terminal and navigate to the backend folder.
2. Run the following command `npm install` to install the required dependencies


### Frontend

1. Open another terminal and navigate to the frontend folder.
2. Run the following command `npm install` to install the required dependencies


## Configuration

### Backend

Create a `.env` file in the backend root directory and set the following variables:

```javascript
PORT=<port_number>
HOST=<host_address>
HTTP_PORT=<http_port_number>
PATH_DB_FILE=<path_to_database_file>
```

## Usage

### Server

The `Server` sets up a server using the Node.js net module to handle TCP connections. It also utilizes the dotenv module for managing environment variables and the readline-sync module to facilitate synchronous user input. The script creates a TCP server on the specified port (or default port 3000) and listens for incoming connections. When a client connects, it prompts the user to input a message to send to the client and saves this message using the saveMessage function from the saveMessage.js file. It also listens for various events such as data transmission, connection closure, and errors, logging appropriate messages in each case.

To start the server, run in the backend root directory:

```bash
npm run server.js
```

### Client

The `Client` service allows users to connect to the server and send and receive messages. After configuring the port and host from environment variables using 'dotenv', it establishes a TCP connection to the designated host and port. The 'sendMessage' function prompts the client to input a message, which is then sent to the server. If the client input is "--close", the connection is terminated. The script also listens for data from the server, prints the received message to the console, and calls the 'sendMessage' function again for further interaction. Additionally, the script utilizes a utility function 'saveMessage' to save the exchanged messages to a file specified as a command line argument.

To start the client, run in the backend root directory:

```bash
npm run client.js <username>
```

### HTTP Server

The `httpServer` service provides an HTTP interface for retrieving chat messages and basic information about the API.

To start the server, run in the backend root directory:

```bash
npm run httpServer.js
```

## Data Structure Description

The JSON data stored in the database comprises entries that follow a specific structure. Each entry is represented as an object with the following key-value pairs:

- **id**: A unique identifier represented as a string. 
- **user**: A string field that denotes the user associated with the entry. This could be the username or name of the user who posted the message.
- **message**: A string field containing the content of the message posted by the user.
- **date**: A string field representing the date when the message was posted. 

**Example Entry:**
```json
{
    "id": "699f19c1-cbfa-405c-b82a-1dfdf8fb1355",
    "user": "Daniel",
    "message": "Hello world!",
    "date": "10/21/2023"
}
```


## Frontend

Upon loading, the application fetches messages from the specified API endpoint using the fetch API. The retrieved messages are then displayed in a visually organized format within the application's interface. 

To start the frontend, run in the frontend root directory:

```bash
npm run dev
```

## Contributing

Contributions are always welcome! Please follow the standard GitHub workflow:

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
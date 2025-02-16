# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a subtle bug in a Node.js server: unexpected termination due to an unhandled promise rejection.  Asynchronous operations are common in server-side code, and a missing `.catch()` block can lead to hard-to-debug crashes.

## Bug Description
The server starts and listens on port 3000, responding with a simple JSON message.  However, if an asynchronous operation (simulated in this example) rejects, the server terminates without clear indication.  This is an uncommon type of bug that often causes confusion. 

## How to Reproduce
1. Clone this repository.
2. Run `node server.js`.
3. You'll see "Server is listening on port 3000".
4. (The bug might not manifest immediately. It requires an unhandled promise rejection.  You could try introducing a network error or a database connection failure in the `asyncFunction` to simulate a real-world scenario, which will more reliably trigger the issue.)
5. The server will crash and terminate without a helpful error message in the console.

## Solution
The solution is to add error handling using `.catch()` to any asynchronous function that might reject promises, so that the server gracefully handles them rather than crashing. This is often overlooked when working with promises in Node.js.
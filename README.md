# Gemini Chat Application

## Overview

Gemini is a chat application built with React, featuring a dynamic sidebar and a responsive main content area. The application allows users to interact with various chat prompts, display recent chats, and access different settings. It integrates a modern UI with a flexible sidebar that can be toggled and a main area that adapts based on user interaction.

## Features

- **Responsive Design**: Fully responsive layout with a collapsible sidebar.
- **Dynamic Sidebar**: Includes options to start new chats, view recent prompts, and access settings.
- **Main Content Area**: Displays prompts and results, with dynamic loading and input handling.
- **Context API**: Utilizes React Context for state management.
- **Animations**: Smooth transitions and animations for enhanced user experience.

## Components

### `App`
The root component that renders the `Sidebar` and `Main` components.

### `Sidebar`
A component that provides navigation options and displays recent prompts. It includes:
- A menu button for toggling the sidebar.
- Options for starting new chats and viewing recent prompts.
- Additional options like Help, History, and Settings.

### `Main`
The main content area that displays:
- A greeting message and prompt cards.
- The result of the current prompt.
- An input field for entering prompts and sending them.

### `ContextProvider`
Provides context and state management for the application, including:
- Input handling.
- Prompt history management.
- Loading and result display.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gemini-chat-app.git

Navigate to the project directory:
cd gemini-chat-app

Install dependencies:
npm install

Start the development server:
npm start


Usage
Use the menu button to toggle the sidebar visibility.
Click on "New Chat" to start a new conversation.
Select from recent prompts to load previous conversations.
Enter a prompt in the input field and press Enter or click the send button to get a response.
Technologies Used
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
React Context API: For state management.
React Icons: For adding icons.

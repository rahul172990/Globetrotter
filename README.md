# 🌍 Globetrotter

**Globetrotter** is a full-stack web app where users get cryptic clues about famous places and must guess the correct destination. Once they guess, they unlock fun facts, trivia, and surprises about the destination! It’s a fun and educational way to explore the world.

---

## 🚀 Features

- **Cryptic Clues**: Get 1–2 random clues about a famous destination.
- **Multiple Choice**: Guess the correct destination from a set of options.
- **Instant Feedback**:
  - � **Correct Answer**: Confetti animation + fun fact.
  - 😢 **Incorrect Answer**: Sad-face animation + fun fact.
- **Score Tracking**: Track your correct and incorrect answers.
- **Play Again**: Load a new random destination and keep playing.

## Tech Stack

  - HTML5
  - CSS3
  - JavaScript (ES6+)
  - Next.js

- **Database:**
  - MongoDB

- **Version Control:**
  - Git
  - GitHub


## Installation and Setup
To get a local copy of the project up and running, follow these steps:

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahul172990/Globetrotter.git
   cd Globetrotter
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Using yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   NEXT_PUBLIC_API_SECRET_KEY=mongo_connection_string
   ```

4. **Run the application:**
   Using npm:
   ```bash
   npm run dev
   ```
   Using yarn:
   ```bash
   yarn start
   ```

5. **Access the application:**
   Open your browser and go to `http://localhost:3000`

## Usage
[Provide instructions on how to use the project, including any relevant commands or features.]

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Norebase Frontend Developer Test

This project is a simple web application that displays information on cryptocurrency coin prices using the [CoinLore API](https://docs.coinlore.com/#/). The application fetches a list of coin prices from the `/tickers` endpoint and displays them in a paginated table.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org) installed. You can check by running:
  ```bash
  node -v
  ```

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

### Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

Start the development server with:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page will auto-update as you edit the files.

### How It Works

1. **Fetching Data**: The app fetches cryptocurrency data from the CoinLore API using the `/tickers` endpoint.
2. **Displaying Data**: The coins are displayed in a table format.
3. **Pagination**: The table is paginated, displaying 10 items per page. Users can navigate through pages using the "Previous" and "Next" buttons.

### Editing the Project

You can start editing the main page by modifying `app/page.tsx`. Any changes made will reflect in the browser automatically.

## Requirements

- The application meets the following requirements:
  - Fetches data from the CoinLore API.
  - Displays coin prices in a table.
  - Implements pagination with 10 items per page.
  - Follows UI and UX considerations as outlined in the challenge.

## Learn More

To learn more about Next.js and the CoinLore API, you can refer to:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [CoinLore API Documentation](https://docs.coinlore.com/#/)

## Deploy on GitHub Pages

To deploy your application, follow these steps:

1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy it to [GitHub Pages](https://pages.github.com/) or another hosting platform of your choice.

Make sure to submit links to both your public repository and the deployed web page.

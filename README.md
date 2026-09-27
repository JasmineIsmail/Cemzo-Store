# Product Listing Page

A responsive Product Listing Page built with **React** as part of a Frontend Developer technical assignment.

The application fetches product data from an API and provides users with a clean interface to browse and search products.

## Features

* Fetch products from an external API
* Display products in a responsive layout
* Search products by name
* Search results displayed in a dropdown
* Case-insensitive product search
* Product details including title, price, image, and other relevant information
* Responsive design for different screen sizes
* Component-based React architecture

## Tech Stack

* React
* JavaScript
* Tailwind CSS
* REST API
* Vite

## API Integration

The application uses an external product API to retrieve product information.

The API request is handled separately in the `services` directory to keep API-related logic organized and maintainable.

Example:

```javascript
import fetchProducts from './services/products';

const result = await fetchProducts();
const products = result.products;
```

## Search Functionality

The search component allows users to search products by their name.

The search is:

* Case-insensitive
* Based on partial product-name matching
* Displayed as a dropdown
* Updated based on the user's search input

Example:

```javascript
const filtered = products.filter((product) =>
  product.title
    .toLowerCase()
    .includes(searchText.toLowerCase())
);
```

## Installation

Clone the repository:

```bash
git clone https://github.com/JasmineIsmail/Cemzo-Store.git
```


``

The application will be available at the local development URL shown by Vite.

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Build

```bash
npm run build
```

Creates a production build.

### Preview

```bash
npm run preview
```

Previews the production build locally.

## Responsive Design

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

## Author

**Jasmine Ismail**

Frontend / MERN Stack Developer

GitHub: https://github.com/JasmineIsmail

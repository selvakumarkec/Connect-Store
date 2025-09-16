# Connect Store

> A responsive, feature-rich marketplace for searching, filtering, and managing digital assets.

 [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#license)

---

## Table of Contents

- [Purpose](#purpose)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)


---

## Purpose

This project was developed as part of an assessment for **Connect-Store**.  
It showcases a modern, responsive front-end application that allows users to:

-  Search items by title or creator
-  Filter by pricing options (Paid / Free / View-Only) and adjust price ranges
-  Sort items alphabetically or by price (low ↔ high)
-  Experience infinite scrolling with a loading spinner
-  Enjoy a dark theme with polished UI interactions and hover animations


---

## Features

- **Dynamic Filtering**
  - Toggle Paid, Free, and View-Only items
  - Dual-thumb price-range slider for precise filtering

- **Search & Sort**
  - Debounced keyword search for optimized performance
  - Sort dropdown: Name, Highest Price, Lowest Price

- **Infinite Scrolling**
  - Automatically load more content as you scroll

- **Responsive Design**
  - 1–4 column grid adapting to different screen sizes

- **Dark Theme & Animations**
  - CSS variables for theming
  - Hover effects, glows, and card lift animations for enhanced UX

---

## Tech Stack

- **Framework:** React + Vite  
- **Routing:** React Router DOM  
- **State Management:** Redux Toolkit  
  - Store folder with multiple slices  
  - Combined reducers for scalability  
- **Data Fetching:** Axios with centralized API setup 
- **Environment Variables:** `.env` for API keys & configs  
- **Custom Hooks:**  
  - Debounce for optimized search  
  - URL params for state persistence  
- **Styling:**  
  - CSS with custom properties (variables)  
  - Media queries 
  - Animations 
  - Component-level refinements (skeleton loader, hover effects)  
- **UI Enhancements:**  
  - Infinite scrolling with optimizations 
  - Loading skeleton for better UX  


---

## Getting Started

### Prerequisites

- Node.js (v20+) & npm
- Git

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/selvakumarkec/Connect-Store.git
   cd Connect-Store
   ```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/selvakumarkec/Connect-Store.git
   cd Connect-Store

   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Run the development server**

   ```bash
   npm run dev

   ```

   Visit http://localhost:3000

### Usage

- 🔍 Search for items by title or creator  
- ⚖️ Refine results using pricing filters or the price-range slider  
- 📊 Reorder items with the **Sort by** dropdown  
- 🔄 Scroll down to load more content automatically 



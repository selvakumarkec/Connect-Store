# Connect Store

> A modern, responsive content marketplace to browse, filter, and sort digital assets.

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
- [Testing](#testing)
- [Live Demo](#live-demo)

---

## Purpose

This project was developed as part of an assessment for **Connect-Store**.  
It demonstrates a front-end application that fetches a catalog of items, lets users:

- 🔍 Search by title or creator
- ⚖️ Filter by pricing options (Paid / Free / View-Only) and price range
- 📊 Sort alphabetically or by price (low ↔ high)
- 🔄 Infinite scroll with loading spinner
- 🌙 Dark theme, polished UI interactions & hover animations

---

## Features

- **Dynamic Filtering**
  - Toggle Paid, Free, and View-Only
  - Dual-thumb price-range slider
- **Search & Sort**
  - Debounced keyword search
  - Sort dropdown: Name, Highest Price, Lowest Price
- **Infinite Scrolling**
  - Auto-load more content as you scroll
- **Responsive Design**
  - 1–4 column grid on different breakpoints
- **Dark Theme & Animations**
  - CSS variables, hover shines, glows, and card lifts

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



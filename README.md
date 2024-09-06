# React + Vite

# Biom Project - README

## Project Overview

This project is a landing page for Biom, an eco-friendly wipes brand. The site emphasizes sustainability, clean design, and user-friendly navigation. The sections of the page are designed with responsive layouts, interactive hover effects, and custom animations to enhance user engagement. The components include a navbar, hero section, product review carousel, and various sections that highlight the features and benefits of the product.

## Live Demo

[Live Demo Link (if available)](https://hulkapstask-git-master-emirascerics-projects.vercel.app)

---

## Tech Stack

### **Languages & Frameworks**
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **React** (`18.2.0`)

### **Libraries/Dependencies**
- **Tailwind CSS** (`v3.3.0`) - For utility-first responsive styling.
- **React Hooks** - Used for state management and effects (`useState`, `useEffect`).
- **Font Awesome** - For icons in the footer and header.
- **React Icons** - For adding scalable vector icons.
- **DaisyUI** (`v2.52.0`) - Component library built on top of Tailwind CSS for quick component designs.

---

## Features

- **Responsive Design**: The website is fully responsive, ensuring compatibility across devices and screen sizes.
- **Smooth Hover Animations**: Interactive hover effects that add a dynamic feel to the images and buttons.
- **Horizontal Scrolling**: For sections like "Instagram Section" and "Meet Biom", horizontal scrolling is enabled on hover for better UX.
- **Video Background**: The "Ocean Wipes" section uses a background video for an immersive experience.
- **Carousel for Reviews**: Users can navigate through different customer reviews by clicking on the dots.
- **Iconography**: Visual enhancement through icons that communicate product features clearly.

---

## Project Setup

### Installation Instructions

1. Clone the repository:

```bash
git clone https://github.com/emirasceric/hulapkstask
cd biom-landing-page
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the project in your browser:

```
http://localhost:5173
```

---

## Sections Breakdown

- **Navbar**: The navigation bar includes links to different sections of the page. It adapts to smaller screens using a hamburger menu.
- **Hero Section**: A visually appealing banner with a large background image and a clear CTA button.
- **Instagram Section**: Displays a scrollable gallery of product images and encourages users to follow Biom on Instagram.
- **Meet Biom**: A section that showcases the features of the Biom dispenser with vertical scrolling text and detailed product descriptions.
- **Reviews Carousel**: A user-driven carousel that displays customer reviews. Dots at the bottom allow switching between reviews.
- **Footer Section**: Provides links to important pages like "Shop," "FAQs," and social media links.

---

## Challenges and Reflection

### Approach
I aimed for a clean and eco-friendly design that reflects the brand’s message. The site is highly interactive, with hover animations and smooth scrolling transitions. I focused on creating a balance between visual aesthetics and functionality. 

### What I Liked
- **Tailwind CSS**: Its utility-first approach made the styling process much faster and more efficient. It allowed me to easily apply responsive styling without writing custom CSS.
- **React Component Structure**: Breaking the site down into reusable components made the project more manageable and scalable. Each section like "Hero", "Instagram Section", and "Reviews" was encapsulated within its own component, allowing for better maintainability.

### Challenges
- **Horizontal Scroll**: Implementing horizontal scrolling using the mouse wheel in sections like "Instagram Section" required custom handling of the `wheel` event. Handling the interactions while keeping the UI responsive was challenging, especially for touch devices.
- **Hover Effects**: Achieving smooth hover transitions with responsive scaling across different screen sizes required careful use of CSS transitions and Tailwind's responsive classes.

### What I Didn’t Like
- **Cross-Browser Compatibility**: Ensuring consistent appearance and behavior across different browsers, especially with animations and scrolling behaviors, required extra effort.

---

## Estimated Time to Complete

The project took approximately **5 days** to complete. This included time for the following:
- Project planning and component breakdown.
- Development of individual sections and components.
- Styling with Tailwind CSS and DaisyUI.
- Implementing animations and hover effects.
- Testing responsiveness and cross-browser compatibility.
- Debugging and minor refinements.

---



---

Thank you for taking the time to check out this project! I hope you enjoy it! Feel free to contribute or fork it for your own use.


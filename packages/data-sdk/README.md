# Wireshape Product Data SDK

**SDK for fetching and displaying food and beverage product blockchain registry data.**

## Overview

Wireshape offers the largest structured database of food and beverages in South America and a growing database of products from the United States. Our solution provides comprehensive and reliable product information, enhancing your supermarket e-commerce. With quick integration to any e-commerce platform and AI automation for new products, Wireshape Vision AI generates structured product data from product label images, allowing for automated registration in your supermarket and e-commerce system.

### Key Features

- **Largest Food and Beverages Database**: Access thousands of products with complete and up-to-date data.
- **AI-Powered Product Registration**: Generate product data sheets automatically from product label photos, eliminating manual processes and reducing the time from hours to seconds.
- **Simple and Fast Integration**: Easily integrate with any e-commerce platform for seamless product data updates.
- **Comprehensive Product Information**:
  - **Ingredients**: Detailed lists of ingredients.
  - **Nutritional Information**: Information on calories, fats, proteins, carbohydrates, and more.
  - **Allergens**: Alerts about the presence of allergenic substances.
  - **Measurements and Weight**: Accurate data for logistics and transportation planning.
  - **Packaging Information**: Details on packaging type, material, and recyclability.
  - **Blockchain Registry**: Secure and transparent product data tracking.

### CDN (unpkg)

Integrate the SDK directly into your web project via unpkg. Here's an example:

```html
<div id="wireshape-data-sdk">
  <!-- The product technical data sheet will be inserted here by the SDK -->
</div>

<script type="module">
  import WireshapeDataSDK from "https://unpkg.com/@wireshape/data-sdk/dist/index.min.js";
  // If installed npm package
  // import WireshapeDataSDK from "@wireshape/data-sdk"

  // Initialize the SDK with static parameters
  const wireshape = new WireshapeDataSDK({
    language: "pt", // "en" or "pt"
    integrationKey: "yourIntegrationKey",
  });
  wireshape.initialize();

  // Directly call getProduct to display product information
  wireshape.getProduct("742832975803");
</script>
```

## Installation

### NPM

```sh
npm install @wireshape/data-sdk
```

### React

Integrate the SDK into a React project using npm. Here's an example:

```jsx
import React, { useEffect } from "react";
import WireshapeDataSDK from "@wireshape/data-sdk";

const ProductData = () => {
  useEffect(() => {
    // Initialize the SDK with static parameters
    const wireshape = new WireshapeDataSDK({
      language: "pt", // "en" or "pt"
      integrationKey: "yourIntegrationKey",
    });
    wireshape.initialize();

    // Directly call getProduct to display product information
    wireshape.getProduct("742832975803");
  }, []);

  return <div id="wireshape-data-sdk">{/* The product technical data sheet will be inserted here by the SDK */}</div>;
};

export default ProductData;
```

### Vue

Integrate the SDK into a Vue project using npm. Here's an example:

```html
<template>
  <div id="wireshape-data-sdk">
    <!-- The product technical data sheet will be inserted here by the SDK -->
  </div>
</template>

<script>
  import { onMounted } from "vue";
  import WireshapeDataSDK from "@wireshape/data-sdk";

  export default {
    name: "ProductData",
    setup() {
      onMounted(() => {
        // Initialize the SDK with static parameters
        const wireshape = new WireshapeDataSDK({
          language: "pt", // "en" or "pt"
          integrationKey: "yourIntegrationKey",
        });
        wireshape.initialize();

        // Directly call getProduct to display product information
        wireshape.getProduct("742832975803");
      });
    },
  };
</script>
```

## How the AI Automation Works

1. **Take Photos of the Label**: Capture 2 to 4 clear photos of the product label, ensuring all necessary information is visible.
2. **Upload Photos to the Platform**: Enter the product barcode and upload the captured label photos.
3. **AI Processing**: Click "Process" to generate the product data sheet and integrate it into your e-commerce platform.

## Start for Free

Enhance your supermarket e-commerce with reliable and comprehensive product data, plus AI automation. Get started at [Wireshape Data](https://data.wireshape.com/auth).

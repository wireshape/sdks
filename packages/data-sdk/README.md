# Wireshape Product Data SDK

**SDK for fetching and displaying product registry data.**

## Overview

Enhance your supermarket e-commerce with Wireshape's comprehensive and reliable product (Food and Beverage) information. Our solution offers quick integration with any e-commerce platform and AI automation for new products. With Wireshape Vision AI, generate structured product data from product label images, allowing for automated registration in your e-commerce system.

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

## Installation

### NPM

```sh
npm install
```

### CDN (unpkg)

Integrate the SDK directly into your web project via unpkg. Here's an example:

```html
<div id="wireshape-data-sdk">
  <!-- The product technical data sheet will be inserted here by the SDK -->
</div>

<script type="module">
  import WireshapeDataSDK from "https://unpkg.com/@wireshape/data-sdk/dist/index.min.js";

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

## How It Works

1. **Take Photos of the Label**: Capture 2 to 4 clear photos of the product label, ensuring all necessary information is visible.
2. **Upload Photos to the Platform**: Enter the product barcode and upload the captured label photos.
3. **AI Processing**: Click "Process" to generate the product data sheet and integrate it into your e-commerce platform.

## Start for Free

Enhance your supermarket e-commerce with reliable and comprehensive product data, plus AI automation. Get started at [Wireshape Data](https://data.wireshape.com/auth).

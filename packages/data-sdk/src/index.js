// src/index.js

export default class WireshapeDataSDK {
  constructor({ language, integrationKey }) {
    this.baseURL = "https://stag-data.wireshape.com/sdk";
    this.language = language;
    this.integrationKey = integrationKey;
    this.currentIFrameHeight = 0;
    this.iframe = null;
  }

  initialize() {
    const sdkContainer = document.getElementById("wireshape-data-sdk");
    if (!sdkContainer) {
      console.error('Element with id "wireshape-data-sdk" not found.');
      return;
    }

    this.iframe = document.createElement("iframe");
    this.iframe.id = "contentFrame";
    this.iframe.style.width = "100%";
    this.iframe.style.border = "none";
    this.iframe.scrolling = "no";
    sdkContainer.appendChild(this.iframe);

    window.addEventListener("message", this.handleReceiveMessage.bind(this));
  }

  getProduct(barcode) {
    if (!this.iframe) {
      console.error("SDK not initialized. Please call initialize() first.");
      return;
    }

    const src = `${this.baseURL}/${barcode}&language=${encodeURIComponent(
      this.language
    )}&integrationKey=${encodeURIComponent(this.integrationKey)}`;
    this.iframe.src = src;
  }

  handleReceiveMessage(event) {
    if (event.origin !== "https://stag-data.wireshape.com") return;
    if (!event.data || typeof event.data !== "object") return;

    const { eventName, payload } = event.data;

    if (eventName === "SET_HEIGHT" && payload?.height) {
      this.currentIFrameHeight = payload.height;
      console.log("Adjusting iFrame height to:", this.currentIFrameHeight);
      this.iframe.style.height = `${this.currentIFrameHeight}px`;
    } else {
      console.warn("Unknown event or height not defined:", eventName, payload);
    }
  }
}

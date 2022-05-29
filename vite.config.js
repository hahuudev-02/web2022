const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        deitlaProducts: resolve(__dirname, 'deital.html'),
        products: resolve(__dirname, 'products.html')
      }
    }
  }
})
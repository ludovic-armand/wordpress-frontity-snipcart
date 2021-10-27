const settings = {
  "name": "wordpress-frontity-snipcart",
  "state": {
    "frontity": {
      "url": "https://snipcart-hotsauce-shop.azurewebsites.net/",
      "title": "Snipcart Hot Sauce Shop",
      "description": "The Hottest Hot Sauce Shop!"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Shop",
              "/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://snipcart-hotsauce-shop.azurewebsites.net/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

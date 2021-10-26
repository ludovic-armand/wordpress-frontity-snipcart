const settings = {
  "name": "wordpress-frontity-snipcart",
  "state": {
    "frontity": {
      "url": "https://wordpress-snipcart.herokuapp.com/",
      "title": "Snipcart Hot Sauce Shop",
      "description": "The Hottest Hot Sauce Shop!",
      "postTypes": [{
        type: "products",
        endpoint: "products",
        archive: "/products"
      }]
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
          "api": "https://wordpress-snipcart.herokuapp.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

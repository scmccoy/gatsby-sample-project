const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shane.mccoy/OneDrive/Desktop/sandbox/gatsby-sample-project/.cache/dev-404-page.js"))),
  "component---src-pages-beers-js": hot(preferDefault(require("/Users/shane.mccoy/OneDrive/Desktop/sandbox/gatsby-sample-project/src/pages/beers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/shane.mccoy/OneDrive/Desktop/sandbox/gatsby-sample-project/src/pages/index.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/shane.mccoy/OneDrive/Desktop/sandbox/gatsby-sample-project/src/pages/order.js"))),
  "component---src-pages-pizzas-js": hot(preferDefault(require("/Users/shane.mccoy/OneDrive/Desktop/sandbox/gatsby-sample-project/src/pages/pizzas.js"))),
  "component---src-pages-slicemasters-js": hot(preferDefault(require("/Users/shane.mccoy/OneDrive/Desktop/sandbox/gatsby-sample-project/src/pages/slicemasters.js")))
}


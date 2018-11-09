This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

When deploying on netlify, I received a mixed content error. The problem was coming from the node_modules/giphy-api/http_browser.js file line 48. In fact on line 45, there was a conditional and I forced protocol to be 'https'.
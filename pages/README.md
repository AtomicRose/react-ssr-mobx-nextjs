# About the website pages

## Browser path & directory path

For the best, you should control the browser path as same as the directory path under the directory named `pages`.
For example, the file named `index.js` should be the root path of website. It will like `https://www.example.com/`

## About components & widgets

These components are both called container React-Component.
But these components in the directory of components should not associated with the business. Usually they just control a single part of UI in the website and get data from props. We also could call them `Simple UI Component`. For anther, these widgets may apply many `Simple UI Component`, may use ajax to get data. For examples, `Login Box`, `Pay Platform`, `City Selector`. A widget can include many widgets. You see, `Login Box` may include `Phone Message Verification` and `Image Code Verification`.

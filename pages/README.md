# About the website pages

## Browser path & directory path

For the best, you should control the browser path as same as the directory path under the directory named `pages`.
For example, the file named `index.js` should be the root path of website. It will like `https://www.example.com/`

## About components & widgets

These components are both called container React-Component.
But these components in the directory of components should not associated with the business. Usually they just control a single part of UI in the website and get data from props. We also could call them `Simple UI Component`. For anther, these widgets may apply many `Simple UI Component`, may use ajax to get data. For examples, `Login Box`, `Pay Platform`, `City Selector`. A widget can include many widgets. You see, `Login Box` may include `Phone Message Verification` and `Image Code Verification`.

## after version v1.3.0, we suggest to use atomic-design

The contents in directory named widgets. We should move them to `templates` like `Layout.js` and move `header.js` to `organisms`

```shell
components
|_atoms
|_molecules
|_organisms
|_templates
```

Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts. They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.

Molecules are the composition of one or more components of atoms. Here we begin to compose complex components and reuse some of those components. Molecules can have their own properties and create functionalities by using atoms, which don’t have any function or action by themselves.

Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. At this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.

Template. In this state we stop composing components and begin to set their context. Moreover, the templates create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered. That’s why it looks like a wireframe.

Pages are the navigate parts of the application and it’s where the components are distributed in one specific template. The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyse if all the components are independent enough or if we need to split them in smaller parts. `We write pages in the root of directory named pages`

Detail See: https://github.com/danilowoz/react-atomic-design#molecules

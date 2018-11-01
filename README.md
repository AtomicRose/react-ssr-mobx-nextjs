# React-SSR-Mobx-NextJS-Framework

The framework used react, nextjs, mobx. Also you can use antd.

## version 1.2.0

## Update Logs

### v1.2.0

* Add Debug

#### How to use Debug

All files are included in `utils/debug`

``` shell
import debug from 'UTILS/debug'
```

We defined 5 kinds log.

``` javascript
debug.error('Error...')
debug.info('Info...')
debug.warning('Warning...')
debug.success('Success...')
debug.log('Special log')
```

Also you can defined by yourself.

``` javascript
import createDebug from 'UTILS/debug/myDebug'
const myDebugLog = createDebug({
    enableBrowser: true, // default true
    enableTerminal: false, // default false
    categories: [
        {
            text: 'MyDebug',
            fontColor: '#0066CC',
            bgColor: '#ccffff'
        },
        {
            text: 'UserInfo',
            fontColor: '#FFFFFF',
            bgColor: '#FF3300'
        }
    ]
})
const userInfo = {
    name: 'Jack Ma',
    from: 'Hangzhou'
}
myDebugLog('Hello', userInfo)
```

Ok, the last step. Set `localStorage`. You can set different values to filter different kinds logs.

``` javascript
localStorage.debug = '*' // all debug log will show
localStorage.debug = 'MyDebug' // match first category 'MyDebug', other logs will hide includes 5 kinds default logs.
// So we usually set first categories' text = __APP_NAME__. __APP_NAME__ is the global variable which you defined in package.json called name.
localStorage.debug = 'React-SSR-Mobx-NextJS-Framework:ERROR' // match first & second categories. Now the error type logs will show.
```

#### Tips

Please be careful with your sensitive data.

### v1.1.0

* Update NextJS to v7.0.x
* Update babel to v7.1.x

### v1.0.5

Fixed some bug.

### v1.0.4

Add `next-optimized-images` plugins support. Now you can use images like this:

``` javascript
import React from 'react';

export default () => (
  <div>
    <img src={require('./images/my-image.jpg')} />
    <img src={require('./images/my-small-image.png')} />
    <img src={require('./images/my-icon.svg')} />
  </div>
);
```

``` css
.Header {
  background-image: url('./images/my-image.jpg');
}
```

Detail see: https://github.com/cyrilwanner/next-optimized-images


### v1.0.3

* Modify the `/pages/_app.js`. Now you can use the mobx store in antd's Form component.

``` javascript
export default Form.create({
    onFieldsChange: (props, fields) => {
        // now, props include mobx's rootStore.
    },
    mapPropsToFields: (props) => {
        // now, props include mobx's rootStore.
        return {}
    }
})(ExampleModule)
```

### v1.0.2

* Update the npm scripts. Now, all shell start with `NODE_ENV=production`. It can render pages much more faster.
* Add screen-media support and mobile phone adaptation scheme support.

## How to run the framework

### Step 1

Clone or download the source.

### Step 2

Go to the root directory and run `npm install`

### Step 3

Set some configs.

`package.json`

You need to set the attributes including `name, version`

`server/server.js`

You could set the default port in this file. In line `const PORT = process.env.PORT || 3000`

### Step 4

Run the command `npm run dev`. Then you can view at http://localhost:3000

## More operations

* `npm run build-[env] [--aPort=3800]` compile the source before you start the server.
* `npm run start-[env] [--aPort=3800]` start ssr server
* `npm run restart-[env] [--aPort=3800]` restart ssr server

The default env includes: `test, alpha, prod`.
You can start the server through another prot, just setting `aPort`.

## Config the application

### Compile file

You can edit all compile configs in this file `next.config.js`. In fact, it includes much webpack configs. Yep, you can setting the application compile configs as the same as `webpack.config.js`.

### Set alias

The webpack includes much usefull plugins. One of these, you can set the alias in config file. Then you can use it instead of the relative path string like `./../../`.

### Running environment

The application has 4 kinds of running environments.

* `__PROD__` production
* `__ALPHA__` alpha, this environment is same to the production env. Except the route hosts
* `__TEST__` test, for testing
* `__DEV__` development, when you are developing, you should use this environment

These environments will be used in anyone module file if you need. And you just need to set the env in server shell. In this application, you can set in `package.json`

For example, `config/hosts.js`. Usually, we will edit the api hosts in this file. But you will find this problem. If I want to deploy the application, I must to modify the hosts file which instead of by production host(domain) and when I want to test I must to modify the hosts file again.

So, we can compile different source code through the environment parameter.

### Product directory

``` shell
|_API                       // all the ajax request should list in this directory
|_config                    // application config files
|_dist                      // compiled code
|_pages                     // all the react pages
    |_components            // react-components. 
    |_layout                // application layout files
    |_scss                  // styles
    |_widgets               // react-widgets
|_server                    // server-side-render, route
|_store                     // mobx store
|_utils                     // some usefull modules
|_static                    // static files
```

## How to use the ant-design

* `npm install --save-antd`
* `import {Button} from 'antd'`

There is a problem about the antd style import. So we copy the css file to `static/antd.css`. Then, in the file `pages/_documents.js` we can write like

``` html
 {/* -----Here is the antd css------ */}
<link rel="stylesheet" href={`${publicRuntimeConfig.staticFolder}/antd.css`} />
```

if you would not use antd, please delete it.

## Mobile phone adaptation scheme

First, you should add code in `pages/_documents.js` like
``` html
{/* -----Here is the mobile phone adaptation scheme support */}
<script src={`${publicRuntimeConfig.staticFolder}/js/mediascreen.js`}></script>
```

Second, setting the scale between `px` and `rem` based your design draft size, in file `pages/scss/fn.scss`

``` scss
$base-px: 75px;
```

For example, if your draft uses the iphone 6 size (375 * 667). The screen width(DIP) is 375px, the DPR is 2. So we set `$base-px: 75px;` because of `375 * 2 / 10 = 75`.

Third, use ```rem``` in all style files. You can use these function like. The pixel number from your draft px size. In fact, only the Pixel unit will be changed to rem unit.

``` scss
.example {
    width: px2rem(10px);
    margin: px2rem(10px) px2rem(10px) px2rem(10px) px2rem(10px);
    @include px2rem('margin', 0 auto 10px 50%);
    @include px2rem('padding', 10px 10% 10rem );
    @include px2px('border', 1px solid #ccc);
    border-radius: px2px(4px);
}
```

### Why use px2px function

``` shell
DPR = DP / DIP
```

First, If you set the `border-width: 1px` in the screen which DPR > 1, the screen it shows `DPR * 1` (DP). So when you set it in the screen with DPR=4, then line looks like 4px unit.

Second, If you use the function `px2rem`, the compiled size could close to 0. Because this mobile phone adaptation scheme will set the html's font-size by depending the mobile's DPR and DIP. The font size may be large and you may get like `with: 0.0000007rem`. In some browsers, the html style will be rendered with `0rem`. As a result, you can't see these lines.

You just need to use it which the px size <= 4.
# &#x1F446; <!-- :point_up_2:  --> dash-draggable

`dash-draggable` is a Dash component library for building grid layouts in dash with draggable and resizable components.

**Note:** This project is still at an early stage &#x1F6B6;, don't hesitate to report potential bugs and to suggest features &#x1F60a;.

## &#x1F4BB; Installation

### Pip <!-- / Conda -->

```
pip install dash-draggable
```

**Note:** This library requires [dash](https://plotly.com/dash/).

## &#x25B6; Demo

### Live Examples

-   [Simple live example](https://dash-draggable.herokuapp.com/)
      <!-- - [Fixed width]()
      - [Responsive]() -->

![Image](./docs/assets/img/draggable_dashboard_sm.gif)

### Run locally

Get started with:

1. Install Dash and its dependencies: https://dash.plotly.com/installation
2. Run `python usage.py` to experiment with a basic example (Note: you need to be connected to internet to run this example)
3. Visit http://localhost:5080 in your web browser

## &#x1F4DA; Documentation

The documentation is still in progress, you can find it [here](https://dash-draggable.readthedocs.io/en/latest/).

## &#x1F6B6; Upcoming features

-   Design: Add themes
-   Drag freely (without grid)
-   Drag and drop items in list (trello-like)

Don't hesitate to suggest other features &#x1F4AC;

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## Credits

-   [STRML/react-grid-layout](https://github.com/STRML/react-grid-layout)

<!--
### Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    $ npm install
    ```
2. Create a virtual env and activate.
    ```
    $ virtualenv venv
    $ . venv/bin/activate
    ```
    _Note: venv\Scripts\activate for windows_

3. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
4. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```

### Write your component code in `src/lib/components/DashDraggable.react.js`.

- The demo app is in `src/demo` and you will import your example component code into your demo app.
- Test your code in a Python environment:
    1. Build your code
        ```
        $ npm run build
        ```
    2. Run and modify the `usage.py` sample dash app:
        ```
        $ python usage.py
        ```
- Write tests for your component.
    - A sample test is available in `tests/test_usage.py`, it will load `usage.py` and you can then automate interactions with selenium.
    - Run the tests with `$ pytest tests`.
    - The Dash team uses these types of integration tests extensively. Browse the Dash component code on GitHub for more examples of testing (e.g. https://github.com/plotly/dash-core-components)
- Add custom styles to your component by putting your custom CSS files into your distribution folder (`dash_draggable`).
    - Make sure that they are referenced in `MANIFEST.in` so that they get properly included when you're ready to publish your component.
    - Make sure the stylesheets are added to the `_css_dist` dict in `dash_draggable/__init__.py` so dash will serve them automatically when the component suite is requested.
- [Review your code](./review_checklist.md)

### Create a production build and publish:

1. Build your code:
    ```
    $ npm run build
    ```
2. Create a Python distribution
    ```
    $ python setup.py sdist bdist_wheel
    ```
    This will create source and wheel distribution in the generated the `dist/` folder.
    See [PyPA](https://packaging.python.org/guides/distributing-packages-using-setuptools/#packaging-your-project)
    for more information.

3. Test your tarball by copying it into a new environment and installing it locally:
    ```
    $ pip install dash_draggable-0.0.1.tar.gz
    ```

4. If it works, then you can publish the component to NPM and PyPI:
    1. Publish on PyPI
        ```
        $ twine upload dist/*
        ```
    2. Cleanup the dist folder (optional)
        ```
        $ rm -rf dist
        ```
    3. Publish on NPM (Optional if chosen False in `publish_on_npm`)
        ```
        $ npm publish
        ```
        _Publishing your component to NPM will make the JavaScript bundles available on the unpkg CDN. By default, Dash serves the component library's CSS and JS locally, but if you choose to publish the package to NPM you can set `serve_locally` to `False` and you may see faster load times._

5. Share your component with the community! https://community.plotly.com/c/dash
    1. Publish this repository to GitHub
    2. Tag your GitHub repository with the plotly-dash tag so that it appears here: https://github.com/topics/plotly-dash
    3. Create a post in the Dash community forum: https://community.plotly.com/c/dash -->

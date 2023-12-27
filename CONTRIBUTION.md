# Contribution Guidelines

Hello :wave: and welcome to **דאטאבוס**, a project of [hasadna](https://open-bus-map-search.hasadna.org.il)!

We glad to see you decided to contribute to our project!

[Join our discord](https://discord.gg/deBdkmufS4) to get connected with the project's development team.

# Where to start

You welcome to explore the [list of project's issues](https://github.com/hasadna/open-bus-map-search/issues), the points we need help with
Some of them marked with `help wanted` or `good first issue` - can be good for a beginners

Also! you can look at the project and if you find some point that can be improved (it can be unclear documentation as well as UI or backend problem) - you wellcome to add issue to the project issues (which considers a contribution too)

# Running the Project Locally

Follow these steps to run the project on your local machine:

1. **Fork the Repository:**
   Before you clone the repository to your local machine, you need to create a fork of it on GitHub. This allows you to make changes without affecting the original project. To fork the repository, click the "Fork" button at the top right of this page.

2. **Clone the Repository:**
   After forking, you need to clone the repository to your local machine. You can do this by running the following command in your terminal:

   ```bash
   git clone https://github.com/<Your GitHub Username>/open-bus-map-search.git
   ```
   Make sure to replace <Your GitHub Username> with your actual GitHub username.

3. **Navigate to the Project Directory:**
    Once the repository is cloned, navigate to the project directory by running:

    ```bash
    cd open-bus-map-search
    ```
4. **Install Dependencies:**
   The project uses Yarn to manage dependencies. If you don't have Yarn installed, you can install it by following the instructions on the [Yarn website](https://classic.yarnpkg.com/en/docs/install). Once Yarn is installed, you can install the project dependencies by running:
    ```bash
    yarn
    ```
5. **Run the Project:**
    After all dependencies are installed, you can start the project by running:
    ```bash
    yarn start
    ```
    The project should now be running on your local machine. Open your web browser and navigate to http://localhost:3000 to view the project.


# How to open the PR

- If you're new to GitHub, here is a [tutorial describing Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
- create a branch
- branch better to be named after issue (or feature) it tries so solve, e.g. `feat/add-close-button-to-modal`
- Please make sure that the project works on your computer
- do changes and then - do commit (`git commit -m "feat: add some feature"`)
- push the branch to remote repo (`git push`)
- go to the original repo and create a pr (by pressing `create a pr` button)
- tag one of the maintainers as reviewers


# Commit message convention

- commit messages better to be short and explain clearly what the change is about
- `fix` change that tries to fix some bug, e.g. `fix: make close button visible at mobile`
- `feat` change that add some new functionality, e.g. `feat: add a modal component`
- `docs` change that adds some documentation, e.g. `docs: add project description at readme`
- `reafctor` change that makes the code better, e.g. `reafctor: split App component to subcomponents`
- `chore` all the other things `chore: upgrade react package to new 18 version`

## testing the project:

### tests beter to be run locally

| command             | description                                                     |
| ------------------- | --------------------------------------------------------------- |
| `yarn test:unit`    | Run the unit tests using `watch` option (good for development). |
| `yarn test:unit:ci` | Run the unit tests (good for ci).                               |
| `yarn test:e2e`     | Run the e2e (playwright) tests (good for ci).                   |
| `yarn test:e2e:ui`  | Run the e2e (playwright) tests with user interface.             |
| `yarn test`         | Run all the kind of tests.                                      |

- additional helpful flags - https://playwright.dev/docs/test-cli

## useful resources:

- [the design file](https://www.figma.com/file/Plw8Uuu6U96CcX5tJyRMoW/Public-Transportation-visual-informaiton?type=design&node-id=0-1&mode=design&t=Dh8lI3EJ37unxvoe-0)
- [data model schema](https://github.com/hasadna/open-bus-stride-db/blob/main/DATA_MODEL.md)
- [API documentation and examples (swagger)](https://open-bus-stride-api.hasadna.org.il/docs)
- [the deployed website](https://open-bus-map-search.hasadna.org.il/dashboard)

## Troubleshooting

we're here to help! feel free to join our [Slack channel](https://join.slack.com/t/hasadna/shared_invite/zt-21qipktl1-7yF4FYJVxAqXl0wE4DlMKQ)

# Related Repositories

- the API client
- the data API

## API client

The client is a JS library that provides methods and data models. for example:  
https://github.com/hasadna/open-bus-map-search/blob/main/src/model/busStop.ts#L4  
[link to repo](https://github.com/iliakap/open-bus-stride-client).

## data API

The API is backend code that provides us with data and aggregations from the DB
You can see it's endpoints here:  
https://open-bus-stride-api.hasadna.org.il/docs  
[link to repo](https://github.com/hasadna/open-bus-stride-api).

## FAQ

### Why do I get a red `x` commit status?

- lint - you have lint errors. fix them by running `yarn lint:fix`
- tests - you have test errors. see them by running `yarn test:unit:ci`
- build - you have build errors. see them by running `yarn build`
- pr title validation - you have an invalid pr title. please edit the title of your PR with conventional commit formatting. examples: `feat: add new feature`, `fix: fix a bug` or `docs: update README.md`
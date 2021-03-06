# bcgov/landuseplanning-admin

Administrative front-end for the Land Use Planning application. Based on the PRC Application [bcgov/nrts-prc-admin](https://github.com/bcgov/nrts-prc-admin).

* [Admin](https://github.com/bcgov/landuseplanning-admin) - front-end for admin users.
* [Public](https://github.com/bcgov/landuseplanning-public) - front-end for public users.
* [Api](https://github.com/bcgov/landuseplanning-api) - back-end that serves both admin and public requests.

# Pre-requisites

| Package | Version |
| ------- | ------- |
| Angular CLI | 6.2.x |
| Yarn | >= 1.10.1 |
| TSLint | >=5.11.0 |
| TypeScript | >=2.3.4 |


We use a version manager so as to allow concurrent versions of node and other software.  [asdf](https://github.com/asdf-vm/asdf) is recommended.  Installation of *asdf* and required node packages is covered [here](https://github.com/bcgov/eagle-dev-guides/blob/master/dev_guides/node_npm_requirements.md)

# Fork, Build and Run

1. After installing Node and Yarn, you can fork or straight download a copy of this application to start your own app.
1. First download all the dependencies with `yarn install`.
1. Run `npm start` to start the webpack server to run the application on port 4200.

    Go to http://localhost:4200 to verify that the application is running.

    :bulb: To change the default port, open `.angular-cli.json`, change the value on `defaults.serve.port`.
    
1. Run `npm run build` to just build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, like so: `ng serve --prod` to run in production mode.
1. Run `npm run lint` to just lint your app code using TSLint.

## Angular Code scaffolding

A brief guide to Angular CLI's code scaffolding can be found in [eagle-common-components](https://github.com/bcgov/eagle-dev-guides/blob/master/dev_guides/angular_scaffolding.md)

```
ng new my-app --routing --style scss
```
## Getting Help

Instructions on how running tests unit tests and end-to-end tests can be found in our [test documentation](https://github.com/bcgov/eagle-dev-guides/blob/master/dev_guides/angular_scaffolding.md#running-tests).

# OpenShift Build and Deployment

For dev, test, and production builds on OpenShift/Jenkins see [openshift/README.md](https://github.com/bcgov/landuseplanning-admin/blob/master/openshift/README.md) for detailed instructions on how to setup in an OpenShift environment using [nginx](https://www.nginx.com/).

# How to Contribute

Feel free to create pull requests from the default "dev" branch, click here to create one automatically: <https://github.com/bcgov/landuseplanning-admin/pull/new/dev>

# Documentation

[Navbar Component](https://github.com/bcgov/landuseplanning-admin/tree/dev/src/app/shared/components/navbar)

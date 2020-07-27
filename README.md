[![New Relic One Catalog Project header](https://github.com/newrelic/open-source-office/raw/master/examples/categories/images/New_Relic_One_Catalog_Project.png)](https://github.com/newrelic/open-source-office/blob/master/examples/categories/index.md#nr1-catalog)

# New Relic One - NRQL Lessons

![CI](https://github.com/newrelic/nr1-learn-nrql/workflows/CI/badge.svg) ![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/newrelic/nr1-learn-nrql?include_prereleases&sort=semver) [![Snyk](https://snyk.io/test/github/newrelic/nr1-learn-nrql/badge.svg)](https://snyk.io/test/github/newrelic/nr1-learn-nrql)

The NRQL Lessons Nerdpack is an application to help quicken users of NRQL for dashboarding and alerting to get faster understanding and value from the power of the query language. This application is developed to break down learning the query language into four levels. Each level extends your understanding of NRQL and helps you not only see what the queries would look like but to also use New Relic One's Query Builder to execute that query live, and even test and try what you've learned to validate your experience.

1. Level One: Learning the Ropes
2. Level Two: Controlling Your Data
3. Level Three: Advancing Your Dashboarding
4. Level Four: NRQL Ninja

Each level is designed to take your skill level up in hopefully easily understood examples and descriptions with live data from your account. We have primarily built this application to work with APM data. If you do not currently use New Relic APM data you may see some empty results but the logic should largely still persist to other event types. We hope to build in fallback queries in the future to ensure that this learning tool may work in multiple data set scenarios.

## Open source license

This project is distributed under the [Apache 2 license](LICENSE).

## Install using NR1 Application Catalog

This application is primarily designed to be installed via the New Relic Application Catalog. 

Navigate to your Apps section and look for the NRQL Lessons application. Once you have clicked into the application you will be offered clear details about the goals of the application and a Manage Access button top right. You simply click Manage Access and ensure to select an account where you wish to make this app visible for all users.

## Install using NR1 CLI

This is also an Open Source application so you can quickly and easily deploy it manually without the Application Catalog using NR1 CLI.

Ensure that you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [npm](https://www.npmjs.com/get-npm) installed. If you're unsure whether you have one or both of them installed, run the following commands (they will return version numbers):

```bash
git --version
npm -v
```

Install the [New Relic One CLI](https://one.newrelic.com/launcher/developer-center.launcher). Follow the instructions to set up your New Relic development environment

```bash
git clone https://github.com/newrelic/nr1-learn-nrql.git
cd nr1-learn-nrql
npm install
nr1 nerdpack:uuid -gf
nr1 nerdpack:publish
nr1 nerdpack:subscribe  -C STABLE
```
This will subscribe the application to the account you have as your default profile. You can check this using `nr1 profiles:default`. If you are not ready to deploy it to your account or want to test out changes you've made locally you can simply

```bash
git clone https://github.com/newrelic/nr1-learn-nrql.git
cd nr1-learn-nrql
npm install
** Make Any Desired Changes **
nr1 nerdpack:uuid -gf
nr1 nerdpack:serve
```

Then visit [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local), navigate to Apps, then NRQL Lessons, and :sparkles: enjoy!

# Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

## Community

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

[https://discuss.newrelic.com/t/new-relic-nrql-lessons-nerdpack/109646](https://discuss.newrelic.com/t/new-relic-nrql-lessons-nerdpack/109646)

## Issues / enhancement requests

Issues and enhancement requests can be submitted in the [Issues tab of this repository](https://github.com/newrelic/nr1-learn-nrql/issues). Please search for and review the existing open issues before submitting a new issue.

# Contributing

Contributions are encouraged! If you submit an enhancement request, we'll invite you to contribute the change yourself. Please review our [Contributors Guide](CONTRIBUTING.md).

Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. If you'd like to execute our corporate CLA, or if you have any questions, please drop us an email at opensource+learn_nrql@newrelic.com

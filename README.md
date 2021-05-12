[![New Relic One Catalog Project header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/New_Relic_One_Catalog_Project.png)](https://opensource.newrelic.com/oss-category/#new-relic-one-catalog-project)

# New Relic One - NRQL Lessons

![CI](https://github.com/newrelic/nr1-learn-nrql/workflows/CI/badge.svg) ![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/newrelic/nr1-learn-nrql?include_prereleases&sort=semver) [![Snyk](https://snyk.io/test/github/newrelic/nr1-learn-nrql/badge.svg)](https://snyk.io/test/github/newrelic/nr1-learn-nrql)

The NRQL (New Relic Query Language) Lessons Nerdpack will help you quickly learn the value and power of our query language. We've developed this application for dashboard and alerts users, but everyone will get something out of it. We've broken this content into four levels, from simple to complex. Each level will expand your understanding of NRQL in a different way.

1. Level One: Learning the Ropes
2. Level Two: Controlling Your Data
3. Level Three: Advancing Your Dashboarding
4. Level Four: NRQL Power User

Each level uses easily understanable examples and descriptions with live data from your account to improve your NRQL skill.

We built these lessons with APM data in mind. If you're not using APM data, you may see some empty results, even though the query logic will still work. In future, we plan to include fallback queries so that lessons will work regardless of the data you're using.

## Open source license

This project is distributed under the [Apache 2 license](LICENSE).

## Install using New Relic One Application Catalog

This application is primarily designed to be installed via the New Relic Application Catalog.

In [New Relic One](https://one.newrelic.com), navigate to your Apps section and click the NRQL Lessons application. The application will give you clear details about the goals of each lesson. The Manage Access button in the top right will let you choose the account where you want to make this app visible. It will be visible to all users of that account.

## Install using New Relic One CLI

NRQL Lessons is also an Open Source application. You can quickly and easily deploy it manually using the New Relic One CLI.

Ensure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [npm](https://www.npmjs.com/get-npm) installed. If you're unsure whether you have them installed, run the following commands (they'll return version numbers if they're installed):

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
This last command will subscribe the application to the account you've set as your default profile. You can check this using `nr1 profiles:default`. If you're not ready to deploy it to your account or want to test out changes you've made locally you can use:

```bash
git clone https://github.com/newrelic/nr1-learn-nrql.git
cd nr1-learn-nrql
npm install
** Make Any Desired Changes **
nr1 nerdpack:uuid -gf
nr1 nerdpack:serve
```

Once you've done that, visit [https://one.newrelic.com/?nerdpacks=local](https://one.newrelic.com/?nerdpacks=local), navigate to Apps, then NRQL Lessons, and :sparkles: enjoy!

# Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

## Community

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

[https://discuss.newrelic.com/t/new-relic-nrql-lessons-nerdpack/109646](https://discuss.newrelic.com/t/new-relic-nrql-lessons-nerdpack/109646)

## Issues / enhancement requests

Issues and enhancement requests can be submitted in the [Issues tab of this repository](https://github.com/newrelic/nr1-learn-nrql/issues). Please search for and review the existing open issues before submitting a new issue.

## Security
This project adheres to the New Relic [security policy](https://github.com/newrelic/nr1-learn-nrql/security/policy).

# Contributing

Contributions are encouraged! If you submit an enhancement request, we'll invite you to contribute the change yourself. Please review our [Contributors Guide](CONTRIBUTING.md).

Keep in mind that when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. If you'd like to execute our corporate CLA, or if you have any questions, please drop us an email at opensource+learn_nrql@newrelic.com

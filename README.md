# Xero-OpenAPI
An OpenAPI (Swagger) specification for the Xero API with OAuth 2.0 security schema.

## Description
This repository holds the official Xero [OpenAPI](https://www.openapis.org/) descriptions.   

OpenAPI spec 3.0
In Release (used for one or more SDKs)
* [Accounting](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_accounting.yaml)
* [Identity](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-identity.yaml)
* [Bank Feeds](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_bankfeeds.yaml)
* [Fixed Assets](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_assets.yaml)
* [Project](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-projects.yaml)
* [Payroll AU](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-au.yaml)
* [Payroll UK](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-uk.yaml)
* [Payroll NZ](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-nz.yaml)
* [Files](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_files.yaml)


## Contribution guide

:loudspeaker: Announcement for all active contributors for Xero-OpenAPI repo :loudspeaker:

We have enabled [commit linting](https://github.com/conventional-changelog/commitlint/#what-is-commitlint) in this repo to ensure that all commit messages follow the conventional commits standards. Please make sure your commit messages are properly formatted or the PR checks will fail. :no_entry_sign:

You can refer to the [conventional commits documentation](https://www.conventionalcommits.org/en/v1.0.0/#summary) for better understanding. 

**Context:**

We have automated the release process in xero-OpenAPI using [semantic-release package](https://github.com/semantic-release/semantic-release). In brief this package analyses all the commits in the repo to determine the next version number, generate the release notes and publish the package, hence the commit message is important for the release to happen successfully. Please read more on the conventional commit [documentation](https://www.conventionalcommits.org/en/v1.0.0/#summary) before landing your commits, each commit message will determine the release notes ! 


**Example:**

If your commit message is - ``feat: Added a new parameter in the get_account method`` - It will do a **minor version update**. 

Following release notes will be generated -

```
Release notes 

 Feature - 
   - Added a new parameter in the get_account method 
```

If your commit message is - ``fix: fixed the null issue with get_invoice method`` - It will do a **patch version update**. 

Following release notes will be generated - 

```
Release notes 

 Fix - 
   - fixed the null issue with get_invoice method
```


if your commit message is as below it will do a **major version update** (Breaking change)

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6
```


## Code Generators
We are using [OpenAPI generator](https://github.com/OpenAPITools/openapi-generator) along with these OAS yaml files to generate our new SDKs.

## Preview
There are lots of tools available for viewing and editing OpenAPI descriptions in a nicely formatted way. A popular tool is SwaggerHub - a version of which is [hosted here](https://app.swaggerhub.com/home). 

Once you sign up or login, you can create a new API under your account and import a Xero API spec.

![SwaggerUI Example](images/import-api.png)

## Updates
If you find something missing or incorrect please [open an issue](https://github.com/XeroAPI/Xero-OpenAPI/issues/new) or send us a pull request.

## License

This software is published under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

	Copyright (c) 2019 Xero Limited

	Permission is hereby granted, free of charge, to any person
	obtaining a copy of this software and associated documentation
	files (the "Software"), to deal in the Software without
	restriction, including without limitation the rights to use,
	copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the
	Software is furnished to do so, subject to the following
	conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	OTHER DEALINGS IN THE SOFTWARE.

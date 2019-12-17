# Xero-OpenAPI
An OpenAPI (Swagger) specification for the Xero API with OAuth 2.0 security schema.

## Description
This repository holds the official Xero [OpenAPI](https://www.openapis.org/) descriptions.   

OpenAPI spec 3.0
* [Accounting - yaml](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/accounting-yaml/Xero_accounting_2.0.0_swagger.yaml)
* [Identity - yaml](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/identity-yaml/Xero-identity-1.0.0-swagger.yaml)
* [Bank Feeds - yaml](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/bankfeeds-yaml/Xero_bankfeeds_1.0.0_swagger.yaml)

In Development
* Fixed Assets - yaml
* Payroll AU - yaml
* Payroll NZ/UK - yaml
* Project - yaml
* Xero HQ - yaml

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

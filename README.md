# Xero-OpenAPI
An OpenAPI (Swagger) specification for the Xero API with OAuth 2.0 security schema.

## Description
This repository holds the official Xero [OpenAPI](https://www.openapis.org/) descriptions.   

OpenAPI spec 3.0
* [Accounting - yaml](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/accounting-yaml/Xero_accounting_2.0.0_swagger.yaml)
* [Identity - yaml](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/identity-yaml/Xero_identity_1.0.0_swagger.yaml)

In Development

* [Bank Feeds - yaml](https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/bankfeeds-yaml/Xero_bankfeeds_1.0.0_swagger.yaml)
* Fixed Assets - yaml
* Payroll AU - yaml
* Payroll NZ/UK - yaml
* Project - yaml
* Xero HQ - yaml

## Preview
There are lots of tools available for viewing and editing OpenAPI descriptions in a nicely formatted way. A popular tool is SwaggerHub - a version of which is [hosted here](https://app.swaggerhub.com/home). 

Once you sign up or login, you can create a new API under your account and import a Xero API spec using the 'raw' URL of the spec file e.g.: `https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/oas3/spec/v3/Xero_accounting_2.0.0_swagger.yaml`

![SwaggerUI Example](images/import-api.png)

## Updates
If you find something missing or incorrect then please [open an issue](https://github.com/XeroAPI/Xero-OpenAPI/issues/new) or send us a pull request. There are lots of tools for editing OpenAPI definitions including the SwaggerHub. Just use the import instructions above.

![Swagger Hub Example](images/swaggerhub.png)

## Postman
Postman will automatically import OpenAPI definitions but the OpenAPI spec doesn't support OAuth1.0a. To use our OpenAPI definitions to make requests in Postman you will need to also import the Xero OAuth1a Postman collection from our [Xero-Postman repo](https://github.com/XeroAPI/Xero-Postman).

![Postman Example](images/postman.png)

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

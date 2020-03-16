

/*
 * GET /api.xro/2.0/Accounts
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Accounts = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Accounts');
};

/*
 * PUT /api.xro/2.0/Accounts
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Accounts = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Accounts');
};

/*
 * GET /api.xro/2.0/Accounts/{AccountID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * AccountID(type: string) - path parameter - Unique identifier for retrieving single object
 */
exports.getApi_xro2_0Accounts2 = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Accounts2');
};

/*
 * POST /api.xro/2.0/Accounts/{AccountID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * AccountID(type: string) - path parameter - Unique identifier for retrieving single object
 */
exports.postApi_xro2_0Accounts = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Accounts');
};

/*
 * DELETE /api.xro/2.0/Accounts/{AccountID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * AccountID(type: string) - path parameter - Unique identifier for retrieving single object
 */
exports.deleteApi_xro2_0Accounts = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_deleteApi_xro2_0Accounts');
};

/*
 * GET /api.xro/2.0/Accounts/{AccountID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * AccountID(type: string) - path parameter - Unique identifier for Account object
 */
exports.getApi_xro2_0AccountsAttachments = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0AccountsAttachments');
};

/*
 * GET /api.xro/2.0/Accounts/{AccountID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * AccountID(type: string) - path parameter - Unique identifier for Account object
 * AttachmentID(type: string) - path parameter - Unique identifier for Attachment object
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Accounts3 = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Accounts/{AccountID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * AccountID(type: string) - path parameter - Unique identifier for Account object
 * FileName(type: string) - path parameter - Name of the attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Accounts4 = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Accounts/{AccountID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * AccountID(type: string) - path parameter - Unique identifier for Account object
 * FileName(type: string) - path parameter - Name of the attachment
 */
exports.putApi_xro2_0Accounts2 = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Accounts2');
};

/*
 * POST /api.xro/2.0/Accounts/{AccountID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * AccountID(type: string) - path parameter - Unique identifier for Account object
 * FileName(type: string) - path parameter - Name of the attachment
 */
exports.postApi_xro2_0Accounts2 = function(req, res) {
	req.check('AccountID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Accounts2');
};

/*
 * GET /api.xro/2.0/BatchPayments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Batchpayments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Batchpayments');
};

/*
 * PUT /api.xro/2.0/BatchPayments
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Batchpayments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Batchpayments');
};

/*
 * GET /api.xro/2.0/BatchPayments/{BatchPaymentID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BatchPaymentID(type: string) - path parameter - Unique identifier for BatchPayment
 */
exports.getApi_xro2_0BatchpaymentsHistory = function(req, res) {
	req.check('BatchPaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0BatchpaymentsHistory');
};

/*
 * PUT /api.xro/2.0/BatchPayments/{BatchPaymentID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BatchPaymentID(type: string) - path parameter - Unique identifier for BatchPayment
 */
exports.putApi_xro2_0BatchpaymentsHistory = function(req, res) {
	req.check('BatchPaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0BatchpaymentsHistory');
};

/*
 * GET /api.xro/2.0/BankTransactions
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * page(type: integer) - query parameter - Up to 100 bank transactions will be returned in a single API call with line items details
 */
exports.getApi_xro2_0Banktransactions = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Banktransactions');
};

/*
 * PUT /api.xro/2.0/BankTransactions
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Banktransactions = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Banktransactions');
};

/*
 * POST /api.xro/2.0/BankTransactions
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Banktransactions = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Banktransactions');
};

/*
 * GET /api.xro/2.0/BankTransactions/{BankTransactionID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 */
exports.getApi_xro2_0Banktransactions2 = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Banktransactions2');
};

/*
 * POST /api.xro/2.0/BankTransactions/{BankTransactionID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 */
exports.postApi_xro2_0Banktransactions2 = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Banktransactions2');
};

/*
 * GET /api.xro/2.0/BankTransactions/{BankTransactionID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 */
exports.getApi_xro2_0BanktransactionsAttachments = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0BanktransactionsAttachments');
};

/*
 * GET /api.xro/2.0/BankTransactions/{BankTransactionID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 * AttachmentID(type: string) - path parameter - Xero generated unique identifier for an attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Banktransactions3 = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/BankTransactions/{BankTransactionID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 * FileName(type: string) - path parameter - The name of the file being attached
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Banktransactions4 = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/BankTransactions/{BankTransactionID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 * FileName(type: string) - path parameter - The name of the file being attached
 */
exports.putApi_xro2_0Banktransactions2 = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Banktransactions2');
};

/*
 * POST /api.xro/2.0/BankTransactions/{BankTransactionID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 * FileName(type: string) - path parameter - The name of the file being attached
 */
exports.postApi_xro2_0Banktransactions3 = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Banktransactions3');
};

/*
 * GET /api.xro/2.0/BankTransactions/{BankTransactionID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 */
exports.getApi_xro2_0BanktransactionsHistory = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/BankTransactions/{BankTransactionID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BankTransactionID(type: string) - path parameter - Xero generated unique identifier for a bank transaction
 */
exports.putApi_xro2_0BanktransactionsHistory = function(req, res) {
	req.check('BankTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/BankTransfers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Banktransfers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Banktransfers');
};

/*
 * PUT /api.xro/2.0/BankTransfers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Banktransfers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Banktransfers');
};

/*
 * GET /api.xro/2.0/BankTransfers/{BankTransferID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 */
exports.getApi_xro2_0Banktransfers2 = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Banktransfers2');
};

/*
 * GET /api.xro/2.0/BankTransfers/{BankTransferID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 */
exports.getApi_xro2_0BanktransfersAttachments = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0BanktransfersAttachments');
};

/*
 * GET /api.xro/2.0/BankTransfers/{BankTransferID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 * AttachmentID(type: string) - path parameter - Xero generated unique identifier for an Attachment to a bank transfer
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Banktransfers3 = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/BankTransfers/{BankTransferID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 * FileName(type: string) - path parameter - The name of the file being attached to a Bank Transfer
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Banktransfers4 = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/BankTransfers/{BankTransferID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 * FileName(type: string) - path parameter - The name of the file being attached to a Bank Transfer
 */
exports.putApi_xro2_0Banktransfers2 = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Banktransfers2');
};

/*
 * POST /api.xro/2.0/BankTransfers/{BankTransferID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 * FileName(type: string) - path parameter - The name of the file being attached to a Bank Transfer
 */
exports.postApi_xro2_0Banktransfers = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Banktransfers');
};

/*
 * GET /api.xro/2.0/BankTransfers/{BankTransferID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 */
exports.getApi_xro2_0BanktransfersHistory = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/BankTransfers/{BankTransferID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BankTransferID(type: string) - path parameter - Xero generated unique identifier for a bank transfer
 */
exports.putApi_xro2_0BanktransfersHistory = function(req, res) {
	req.check('BankTransferID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/BrandingThemes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApi_xro2_0Brandingthemes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Brandingthemes');
};

/*
 * GET /api.xro/2.0/BrandingThemes/{BrandingThemeID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BrandingThemeID(type: string) - path parameter - Unique identifier for a Branding Theme
 */
exports.getApi_xro2_0Brandingthemes2 = function(req, res) {
	req.check('BrandingThemeID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Brandingthemes2');
};

/*
 * GET /api.xro/2.0/BrandingThemes/{BrandingThemeID}/PaymentServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * BrandingThemeID(type: string) - path parameter - Unique identifier for a Branding Theme
 */
exports.getApi_xro2_0BrandingthemesPaymentservices = function(req, res) {
	req.check('BrandingThemeID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0BrandingthemesPaymentservices');
};

/*
 * POST /api.xro/2.0/BrandingThemes/{BrandingThemeID}/PaymentServices
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * BrandingThemeID(type: string) - path parameter - Unique identifier for a Branding Theme
 */
exports.postApi_xro2_0BrandingthemesPaymentservices = function(req, res) {
	req.check('BrandingThemeID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0BrandingthemesPaymentservices');
};

/*
 * GET /api.xro/2.0/Contacts
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * IDs(type: array) - query parameter - Filter by a comma separated list of ContactIDs. Allows you to retrieve a specific set of contacts in a single call.
 * page(type: integer) - query parameter - e.g. page=1 - Up to 100 contacts will be returned in a single API call.
 * includeArchived(type: boolean) - query parameter - e.g. includeArchived=true - Contacts with a status of ARCHIVED will be included in the response
 */
exports.getApi_xro2_0Contacts = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Contacts');
};

/*
 * PUT /api.xro/2.0/Contacts
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Contacts = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Contacts');
};

/*
 * POST /api.xro/2.0/Contacts
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Contacts = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Contacts');
};

/*
 * GET /api.xro/2.0/Contacts/{ContactID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 */
exports.getApi_xro2_0Contacts2 = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Contacts2');
};

/*
 * POST /api.xro/2.0/Contacts/{ContactID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 */
exports.postApi_xro2_0Contacts2 = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Contacts2');
};

/*
 * GET /api.xro/2.0/Contacts/{ContactID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 */
exports.getApi_xro2_0ContactsAttachments = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ContactsAttachments');
};

/*
 * GET /api.xro/2.0/Contacts/{ContactID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 * AttachmentID(type: string) - path parameter - Unique identifier for a Attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Contacts3 = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Contacts/{ContactID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 * FileName(type: string) - path parameter - Name for the file you are attaching
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Contacts4 = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Contacts/{ContactID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 * FileName(type: string) - path parameter - Name for the file you are attaching
 */
exports.putApi_xro2_0Contacts2 = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Contacts2');
};

/*
 * POST /api.xro/2.0/Contacts/{ContactID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 * FileName(type: string) - path parameter - Name for the file you are attaching
 */
exports.postApi_xro2_0Contacts3 = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Contacts3');
};

/*
 * GET /api.xro/2.0/Contacts/{ContactID}/CISSettings
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 */
exports.getApi_xro2_0ContactsCissettings = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ContactsCissettings');
};

/*
 * GET /api.xro/2.0/Contacts/{ContactID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 */
exports.getApi_xro2_0ContactsHistory = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Contacts/{ContactID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 */
exports.putApi_xro2_0ContactsHistory = function(req, res) {
	req.check('ContactID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/ContactGroups
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Contactgroups = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Contactgroups');
};

/*
 * PUT /api.xro/2.0/ContactGroups
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Contactgroups = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Contactgroups');
};

/*
 * GET /api.xro/2.0/ContactGroups/{ContactGroupID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactGroupID(type: string) - path parameter - Unique identifier for a Contact Group
 */
exports.getApi_xro2_0Contactgroups2 = function(req, res) {
	req.check('ContactGroupID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Contactgroups2');
};

/*
 * POST /api.xro/2.0/ContactGroups/{ContactGroupID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ContactGroupID(type: string) - path parameter - Unique identifier for a Contact Group
 */
exports.postApi_xro2_0Contactgroups = function(req, res) {
	req.check('ContactGroupID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Contactgroups');
};

/*
 * PUT /api.xro/2.0/ContactGroups/{ContactGroupID}/Contacts
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ContactGroupID(type: string) - path parameter - Unique identifier for a Contact Group
 */
exports.putApi_xro2_0ContactgroupsContacts = function(req, res) {
	req.check('ContactGroupID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0ContactgroupsContacts');
};

/*
 * DELETE /api.xro/2.0/ContactGroups/{ContactGroupID}/Contacts
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactGroupID(type: string) - path parameter - Unique identifier for a Contact Group
 */
exports.deleteApi_xro2_0ContactgroupsContacts = function(req, res) {
	req.check('ContactGroupID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * DELETE /api.xro/2.0/ContactGroups/{ContactGroupID}/Contacts/{ContactID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ContactGroupID(type: string) - path parameter - Unique identifier for a Contact Group
 * ContactID(type: string) - path parameter - Unique identifier for a Contact
 */
exports.deleteApi_xro2_0Contactgroups = function(req, res) {
	req.check('ContactGroupID', 'Invalid parameter').notEmpty();
	req.check('ContactID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/CreditNotes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * page(type: integer) - query parameter - e.g. page=1 – Up to 100 credit notes will be returned in a single API call with line items shown for each credit note
 */
exports.getApi_xro2_0Creditnotes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Creditnotes');
};

/*
 * PUT /api.xro/2.0/CreditNotes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Creditnotes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Creditnotes');
};

/*
 * POST /api.xro/2.0/CreditNotes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Creditnotes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Creditnotes');
};

/*
 * GET /api.xro/2.0/CreditNotes/{CreditNoteID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 */
exports.getApi_xro2_0Creditnotes2 = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Creditnotes2');
};

/*
 * POST /api.xro/2.0/CreditNotes/{CreditNoteID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 */
exports.postApi_xro2_0Creditnotes2 = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Creditnotes2');
};

/*
 * GET /api.xro/2.0/CreditNotes/{CreditNoteID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 */
exports.getApi_xro2_0CreditnotesAttachments = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0CreditnotesAttachments');
};

/*
 * GET /api.xro/2.0/CreditNotes/{CreditNoteID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 * AttachmentID(type: string) - path parameter - Unique identifier for a Attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Creditnotes3 = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/CreditNotes/{CreditNoteID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 * FileName(type: string) - path parameter - Name of the file you are attaching to Credit Note
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Creditnotes4 = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/CreditNotes/{CreditNoteID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 * FileName(type: string) - path parameter - Name of the file you are attaching to Credit Note
 * IncludeOnline(type: boolean) - path parameter - Set an attachment to be included with the invoice when viewed online (through Xero)
 */
exports.putApi_xro2_0Creditnotes2 = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('IncludeOnline', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Creditnotes2');
};

/*
 * POST /api.xro/2.0/CreditNotes/{CreditNoteID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 * FileName(type: string) - path parameter - Name of the file you are attaching to Credit Note
 */
exports.postApi_xro2_0Creditnotes3 = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Creditnotes3');
};

/*
 * GET /api.xro/2.0/CreditNotes/{CreditNoteID}/pdf
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 */
exports.getApi_xro2_0CreditnotesPdf = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/CreditNotes/{CreditNoteID}/Allocations
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 */
exports.putApi_xro2_0CreditnotesAllocations = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0CreditnotesAllocations');
};

/*
 * GET /api.xro/2.0/CreditNotes/{CreditNoteID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 */
exports.getApi_xro2_0CreditnotesHistory = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/CreditNotes/{CreditNoteID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * CreditNoteID(type: string) - path parameter - Unique identifier for a Credit Note
 */
exports.putApi_xro2_0CreditnotesHistory = function(req, res) {
	req.check('CreditNoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Currencies
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Currencies = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Currencies');
};

/*
 * PUT /api.xro/2.0/Currencies
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Currencies = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Currencies');
};

/*
 * GET /api.xro/2.0/Employees
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Employees = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Employees');
};

/*
 * PUT /api.xro/2.0/Employees
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Employees = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Employees');
};

/*
 * POST /api.xro/2.0/Employees
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Employees = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Employees');
};

/*
 * GET /api.xro/2.0/Employees/{EmployeeID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * EmployeeID(type: string) - path parameter - Unique identifier for a Employee
 */
exports.getApi_xro2_0Employees2 = function(req, res) {
	req.check('EmployeeID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Employees2');
};

/*
 * POST /api.xro/2.0/Employees/{EmployeeID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * EmployeeID(type: string) - path parameter - Unique identifier for a Employee
 */
exports.postApi_xro2_0Employees2 = function(req, res) {
	req.check('EmployeeID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Employees2');
};

/*
 * GET /api.xro/2.0/ExpenseClaims
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Expenseclaims = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Expenseclaims');
};

/*
 * PUT /api.xro/2.0/ExpenseClaims
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Expenseclaims = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Expenseclaims');
};

/*
 * GET /api.xro/2.0/ExpenseClaims/{ExpenseClaimID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ExpenseClaimID(type: string) - path parameter - Unique identifier for a ExpenseClaim
 */
exports.getApi_xro2_0Expenseclaims2 = function(req, res) {
	req.check('ExpenseClaimID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Expenseclaims2');
};

/*
 * POST /api.xro/2.0/ExpenseClaims/{ExpenseClaimID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ExpenseClaimID(type: string) - path parameter - Unique identifier for a ExpenseClaim
 */
exports.postApi_xro2_0Expenseclaims = function(req, res) {
	req.check('ExpenseClaimID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Expenseclaims');
};

/*
 * GET /api.xro/2.0/ExpenseClaims/{ExpenseClaimID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ExpenseClaimID(type: string) - path parameter - Unique identifier for a ExpenseClaim
 */
exports.getApi_xro2_0ExpenseclaimsHistory = function(req, res) {
	req.check('ExpenseClaimID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/ExpenseClaims/{ExpenseClaimID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ExpenseClaimID(type: string) - path parameter - Unique identifier for a ExpenseClaim
 */
exports.putApi_xro2_0ExpenseclaimsHistory = function(req, res) {
	req.check('ExpenseClaimID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Invoices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * IDs(type: array) - query parameter - Filter by a comma-separated list of InvoicesIDs.
 * InvoiceNumbers(type: array) - query parameter - Filter by a comma-separated list of InvoiceNumbers.
 * ContactIDs(type: array) - query parameter - Filter by a comma-separated list of ContactIDs.
 * Statuses(type: array) - query parameter - Filter by a comma-separated list Statuses. For faster response times we recommend using these explicit parameters instead of passing OR conditions into the Where filter.
 * page(type: integer) - query parameter - e.g. page=1 – Up to 100 invoices will be returned in a single API call with line items shown for each invoice
 * includeArchived(type: boolean) - query parameter - e.g. includeArchived=true - Contacts with a status of ARCHIVED will be included in the response
 * createdByMyApp(type: boolean) - query parameter - When set to true you'll only retrieve Invoices created by your app
 */
exports.getApi_xro2_0Invoices = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Invoices');
};

/*
 * PUT /api.xro/2.0/Invoices
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Invoices = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Invoices');
};

/*
 * POST /api.xro/2.0/Invoices
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Invoices = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Invoices');
};

/*
 * GET /api.xro/2.0/Invoices/{InvoiceID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.getApi_xro2_0Invoices2 = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Invoices2');
};

/*
 * POST /api.xro/2.0/Invoices/{InvoiceID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.postApi_xro2_0Invoices2 = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Invoices2');
};

/*
 * GET /api.xro/2.0/Invoices/{InvoiceID}/pdf
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.getApi_xro2_0InvoicesPdf = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Invoices/{InvoiceID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.getApi_xro2_0InvoicesAttachments = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0InvoicesAttachments');
};

/*
 * GET /api.xro/2.0/Invoices/{InvoiceID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 * AttachmentID(type: string) - path parameter - Unique identifier for an Attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Invoices3 = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Invoices/{InvoiceID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 * FileName(type: string) - path parameter - Name of the file you are attaching
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Invoices4 = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Invoices/{InvoiceID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 * FileName(type: string) - path parameter - Name of the file you are attaching
 * IncludeOnline(type: boolean) - path parameter - Set an attachment to be included with the invoice when viewed online (through Xero)
 */
exports.putApi_xro2_0Invoices2 = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('IncludeOnline', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Invoices2');
};

/*
 * POST /api.xro/2.0/Invoices/{InvoiceID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 * FileName(type: string) - path parameter - Name of the file you are attaching
 */
exports.postApi_xro2_0Invoices3 = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Invoices3');
};

/*
 * GET /api.xro/2.0/Invoices/{InvoiceID}/OnlineInvoice
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.getApi_xro2_0InvoicesOnlineinvoice = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0InvoicesOnlineinvoice');
};

/*
 * POST /api.xro/2.0/Invoices/{InvoiceID}/Email
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.postApi_xro2_0InvoicesEmail = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Invoices/{InvoiceID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.getApi_xro2_0InvoicesHistory = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Invoices/{InvoiceID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * InvoiceID(type: string) - path parameter - Unique identifier for an Invoice
 */
exports.putApi_xro2_0InvoicesHistory = function(req, res) {
	req.check('InvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/InvoiceReminders/Settings
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApi_xro2_0InvoiceremindersSettings = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0InvoiceremindersSettings');
};

/*
 * GET /api.xro/2.0/Items
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Items = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Items');
};

/*
 * PUT /api.xro/2.0/Items
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Items = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Items');
};

/*
 * POST /api.xro/2.0/Items
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Items = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Items');
};

/*
 * GET /api.xro/2.0/Items/{ItemID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ItemID(type: string) - path parameter - Unique identifier for an Item
 */
exports.getApi_xro2_0Items2 = function(req, res) {
	req.check('ItemID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Items2');
};

/*
 * POST /api.xro/2.0/Items/{ItemID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ItemID(type: string) - path parameter - Unique identifier for an Item
 */
exports.postApi_xro2_0Items2 = function(req, res) {
	req.check('ItemID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Items2');
};

/*
 * DELETE /api.xro/2.0/Items/{ItemID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ItemID(type: string) - path parameter - Unique identifier for an Item
 */
exports.deleteApi_xro2_0Items = function(req, res) {
	req.check('ItemID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Items/{ItemID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ItemID(type: string) - path parameter - Unique identifier for an Item
 */
exports.getApi_xro2_0ItemsHistory = function(req, res) {
	req.check('ItemID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Items/{ItemID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ItemID(type: string) - path parameter - Unique identifier for an Item
 */
exports.putApi_xro2_0ItemsHistory = function(req, res) {
	req.check('ItemID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Journals
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * offset(type: integer) - query parameter - Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned
 * paymentsOnly(type: boolean) - query parameter - Filter to retrieve journals on a cash basis. Journals are returned on an accrual basis by default.
 */
exports.getApi_xro2_0Journals = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Journals');
};

/*
 * GET /api.xro/2.0/Journals/{JournalID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * JournalID(type: string) - path parameter - Unique identifier for a Journal
 */
exports.getApi_xro2_0Journals2 = function(req, res) {
	req.check('JournalID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Journals2');
};

/*
 * GET /api.xro/2.0/LinkedTransactions
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * page(type: integer) - query parameter - Up to 100 linked transactions will be returned in a single API call. Use the page parameter to specify the page to be returned e.g. page=1.
 * LinkedTransactionID(type: string) - query parameter - The Xero identifier for an Linked Transaction
 * SourceTransactionID(type: string) - query parameter - Filter by the SourceTransactionID. Get the linked transactions created from a particular ACCPAY invoice
 * ContactID(type: string) - query parameter - Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.
 * Status(type: string) - query parameter - Filter by the combination of ContactID and Status. Get  the linked transactions associaed to a  customer and with a status
 * TargetTransactionID(type: string) - query parameter - Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice
 */
exports.getApi_xro2_0Linkedtransactions = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Linkedtransactions');
};

/*
 * PUT /api.xro/2.0/LinkedTransactions
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Linkedtransactions = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Linkedtransactions');
};

/*
 * GET /api.xro/2.0/LinkedTransactions/{LinkedTransactionID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * LinkedTransactionID(type: string) - path parameter - Unique identifier for a LinkedTransaction
 */
exports.getApi_xro2_0Linkedtransactions2 = function(req, res) {
	req.check('LinkedTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Linkedtransactions2');
};

/*
 * POST /api.xro/2.0/LinkedTransactions/{LinkedTransactionID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * LinkedTransactionID(type: string) - path parameter - Unique identifier for a LinkedTransaction
 */
exports.postApi_xro2_0Linkedtransactions = function(req, res) {
	req.check('LinkedTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Linkedtransactions');
};

/*
 * DELETE /api.xro/2.0/LinkedTransactions/{LinkedTransactionID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * LinkedTransactionID(type: string) - path parameter - Unique identifier for a LinkedTransaction
 */
exports.deleteApi_xro2_0Linkedtransactions = function(req, res) {
	req.check('LinkedTransactionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/ManualJournals
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * page(type: integer) - query parameter - e.g. page=1 – Up to 100 manual journals will be returned in a single API call with line items shown for each overpayment
 */
exports.getApi_xro2_0Manualjournals = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Manualjournals');
};

/*
 * PUT /api.xro/2.0/ManualJournals
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Manualjournals = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Manualjournals');
};

/*
 * POST /api.xro/2.0/ManualJournals
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Manualjournals = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Manualjournals');
};

/*
 * GET /api.xro/2.0/ManualJournals/{ManualJournalID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ManualJournalID(type: string) - path parameter - Unique identifier for a ManualJournal
 */
exports.getApi_xro2_0Manualjournals2 = function(req, res) {
	req.check('ManualJournalID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Manualjournals2');
};

/*
 * POST /api.xro/2.0/ManualJournals/{ManualJournalID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ManualJournalID(type: string) - path parameter - Unique identifier for a ManualJournal
 */
exports.postApi_xro2_0Manualjournals2 = function(req, res) {
	req.check('ManualJournalID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Manualjournals2');
};

/*
 * GET /api.xro/2.0/ManualJournals/{ManualJournalID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ManualJournalID(type: string) - path parameter - Unique identifier for a ManualJournal
 */
exports.getApi_xro2_0ManualjournalsAttachments = function(req, res) {
	req.check('ManualJournalID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ManualjournalsAttachments');
};

/*
 * GET /api.xro/2.0/ManualJournals/{ManualJournalID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ManualJournalID(type: string) - path parameter - Unique identifier for a ManualJournal
 * AttachmentID(type: string) - path parameter - Unique identifier for a Attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Manualjournals3 = function(req, res) {
	req.check('ManualJournalID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/ManualJournals/{ManualJournalID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ManualJournalID(type: string) - path parameter - Unique identifier for a ManualJournal
 * FileName(type: string) - path parameter - The name of the file being attached to a ManualJournal
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Manualjournals4 = function(req, res) {
	req.check('ManualJournalID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/ManualJournals/{ManualJournalID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ManualJournalID(type: string) - path parameter - Unique identifier for a ManualJournal
 * FileName(type: string) - path parameter - The name of the file being attached to a ManualJournal
 */
exports.putApi_xro2_0Manualjournals2 = function(req, res) {
	req.check('ManualJournalID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Manualjournals2');
};

/*
 * POST /api.xro/2.0/ManualJournals/{ManualJournalID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ManualJournalID(type: string) - path parameter - Unique identifier for a ManualJournal
 * FileName(type: string) - path parameter - The name of the file being attached to a ManualJournal
 */
exports.postApi_xro2_0Manualjournals3 = function(req, res) {
	req.check('ManualJournalID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Manualjournals3');
};

/*
 * GET /api.xro/2.0/Organisation
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApi_xro2_0Organisation = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Organisation');
};

/*
 * GET /api.xro/2.0/Organisation/{OrganisationID}/CISSettings
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * OrganisationID(type: string) - path parameter - The unique Xero identifier for an organisation
 */
exports.getApi_xro2_0OrganisationCissettings = function(req, res) {
	req.check('OrganisationID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0OrganisationCissettings');
};

/*
 * GET /api.xro/2.0/Overpayments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * page(type: integer) - query parameter - e.g. page=1 – Up to 100 overpayments will be returned in a single API call with line items shown for each overpayment
 */
exports.getApi_xro2_0Overpayments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Overpayments');
};

/*
 * GET /api.xro/2.0/Overpayments/{OverpaymentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * OverpaymentID(type: string) - path parameter - Unique identifier for a Overpayment
 */
exports.getApi_xro2_0Overpayments2 = function(req, res) {
	req.check('OverpaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Overpayments2');
};

/*
 * PUT /api.xro/2.0/Overpayments/{OverpaymentID}/Allocations
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * OverpaymentID(type: string) - path parameter - Unique identifier for a Overpayment
 */
exports.putApi_xro2_0OverpaymentsAllocations = function(req, res) {
	req.check('OverpaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0OverpaymentsAllocations');
};

/*
 * GET /api.xro/2.0/Overpayments/{OverpaymentID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * OverpaymentID(type: string) - path parameter - Unique identifier for a Overpayment
 */
exports.getApi_xro2_0OverpaymentsHistory = function(req, res) {
	req.check('OverpaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Overpayments/{OverpaymentID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * OverpaymentID(type: string) - path parameter - Unique identifier for a Overpayment
 */
exports.putApi_xro2_0OverpaymentsHistory = function(req, res) {
	req.check('OverpaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Payments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Payments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Payments');
};

/*
 * PUT /api.xro/2.0/Payments
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Payments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Payments');
};

/*
 * POST /api.xro/2.0/Payments
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Payments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Payments');
};

/*
 * GET /api.xro/2.0/Payments/{PaymentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * PaymentID(type: string) - path parameter - Unique identifier for a Payment
 */
exports.getApi_xro2_0Payments2 = function(req, res) {
	req.check('PaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Payments2');
};

/*
 * POST /api.xro/2.0/Payments/{PaymentID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * PaymentID(type: string) - path parameter - Unique identifier for a Payment
 */
exports.postApi_xro2_0Payments2 = function(req, res) {
	req.check('PaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Payments2');
};

/*
 * GET /api.xro/2.0/Payments/{PaymentID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * PaymentID(type: string) - path parameter - Unique identifier for a Payment
 */
exports.getApi_xro2_0PaymentsHistory = function(req, res) {
	req.check('PaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Payments/{PaymentID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * PaymentID(type: string) - path parameter - Unique identifier for a Payment
 */
exports.putApi_xro2_0PaymentsHistory = function(req, res) {
	req.check('PaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/PaymentServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApi_xro2_0Paymentservices = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Paymentservices');
};

/*
 * PUT /api.xro/2.0/PaymentServices
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Paymentservices = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Paymentservices');
};

/*
 * GET /api.xro/2.0/Prepayments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * page(type: integer) - query parameter - e.g. page=1 – Up to 100 prepayments will be returned in a single API call with line items shown for each overpayment
 */
exports.getApi_xro2_0Prepayments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Prepayments');
};

/*
 * GET /api.xro/2.0/Prepayments/{PrepaymentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * PrepaymentID(type: string) - path parameter - Unique identifier for a PrePayment
 */
exports.getApi_xro2_0Prepayments2 = function(req, res) {
	req.check('PrepaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Prepayments2');
};

/*
 * PUT /api.xro/2.0/Prepayments/{PrepaymentID}/Allocations
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * PrepaymentID(type: string) - path parameter - Unique identifier for Prepayment
 */
exports.putApi_xro2_0PrepaymentsAllocations = function(req, res) {
	req.check('PrepaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0PrepaymentsAllocations');
};

/*
 * GET /api.xro/2.0/Prepayments/{PrepaymentID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * PrepaymentID(type: string) - path parameter - Unique identifier for a PrePayment
 */
exports.getApi_xro2_0PrepaymentsHistory = function(req, res) {
	req.check('PrepaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Prepayments/{PrepaymentID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * PrepaymentID(type: string) - path parameter - Unique identifier for a PrePayment
 */
exports.putApi_xro2_0PrepaymentsHistory = function(req, res) {
	req.check('PrepaymentID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/PurchaseOrders
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Status(type: string) - query parameter - Filter by purchase order status
 * DateFrom(type: string) - query parameter - Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31
 * DateTo(type: string) - query parameter - Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31
 * order(type: string) - query parameter - Order by an any element
 * page(type: integer) - query parameter - To specify a page, append the page parameter to the URL e.g. ?page=1. If there are 100 records in the response you will need to check if there is any more data by fetching the next page e.g ?page=2 and continuing this process until no more results are returned.
 */
exports.getApi_xro2_0Purchaseorders = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Purchaseorders');
};

/*
 * PUT /api.xro/2.0/PurchaseOrders
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Purchaseorders = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Purchaseorders');
};

/*
 * POST /api.xro/2.0/PurchaseOrders
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Purchaseorders = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Purchaseorders');
};

/*
 * GET /api.xro/2.0/PurchaseOrders/{PurchaseOrderID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * PurchaseOrderID(type: string) - path parameter - Unique identifier for a PurchaseOrder
 */
exports.getApi_xro2_0Purchaseorders2 = function(req, res) {
	req.check('PurchaseOrderID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Purchaseorders2');
};

/*
 * POST /api.xro/2.0/PurchaseOrders/{PurchaseOrderID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * PurchaseOrderID(type: string) - path parameter - Unique identifier for a PurchaseOrder
 */
exports.postApi_xro2_0Purchaseorders2 = function(req, res) {
	req.check('PurchaseOrderID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Purchaseorders2');
};

/*
 * GET /api.xro/2.0/PurchaseOrders/{PurchaseOrderNumber}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * PurchaseOrderNumber(type: string) - path parameter - Unique identifier for a PurchaseOrder
 */
exports.getApi_xro2_0Purchaseorders3 = function(req, res) {
	req.check('PurchaseOrderNumber', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Purchaseorders3');
};

/*
 * GET /api.xro/2.0/PurchaseOrders/{PurchaseOrderID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * PurchaseOrderID(type: string) - path parameter - Unique identifier for a PurchaseOrder
 */
exports.getApi_xro2_0PurchaseordersHistory = function(req, res) {
	req.check('PurchaseOrderID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/PurchaseOrders/{PurchaseOrderID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * PurchaseOrderID(type: string) - path parameter - Unique identifier for a PurchaseOrder
 */
exports.putApi_xro2_0PurchaseordersHistory = function(req, res) {
	req.check('PurchaseOrderID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Quotes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * DateFrom(type: string) - query parameter - Filter for quotes after a particular date
 * DateTo(type: string) - query parameter - Filter for quotes before a particular date
 * ExpiryDateFrom(type: string) - query parameter - Filter for quotes expiring after a particular date
 * ExpiryDateTo(type: string) - query parameter - Filter for quotes before a particular date
 * ContactID(type: string) - query parameter - Filter for quotes belonging to a particular contact
 * Status(type: string) - query parameter - Filter for quotes of a particular Status
 * page(type: integer) - query parameter - e.g. page=1 – Up to 100 Quotes will be returned in a single API call with line items shown for each quote
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Quotes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Quotes');
};

/*
 * PUT /api.xro/2.0/Quotes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Quotes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Quotes');
};

/*
 * POST /api.xro/2.0/Quotes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Quotes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Quotes');
};

/*
 * GET /api.xro/2.0/Quotes/{QuoteID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for an Quote
 */
exports.getApi_xro2_0Quotes2 = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Quotes2');
};

/*
 * POST /api.xro/2.0/Quotes/{QuoteID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for an Quote
 */
exports.postApi_xro2_0Quotes2 = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Quotes2');
};

/*
 * GET /api.xro/2.0/Quotes/{QuoteID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for an Quote
 */
exports.getApi_xro2_0QuotesHistory = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Quotes/{QuoteID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for an Quote
 */
exports.putApi_xro2_0QuotesHistory = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Quotes/{QuoteID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for Quote object
 */
exports.getApi_xro2_0QuotesAttachments = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0QuotesAttachments');
};

/*
 * GET /api.xro/2.0/Quotes/{QuoteID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for Quote object
 * AttachmentID(type: string) - path parameter - Unique identifier for Attachment object
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Quotes3 = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Quotes/{QuoteID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for Quote object
 * FileName(type: string) - path parameter - Name of the attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Quotes4 = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Quotes/{QuoteID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for Quote object
 * FileName(type: string) - path parameter - Name of the attachment
 */
exports.putApi_xro2_0Quotes2 = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Quotes2');
};

/*
 * POST /api.xro/2.0/Quotes/{QuoteID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * QuoteID(type: string) - path parameter - Unique identifier for Quote object
 * FileName(type: string) - path parameter - Name of the attachment
 */
exports.postApi_xro2_0Quotes3 = function(req, res) {
	req.check('QuoteID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Quotes3');
};

/*
 * GET /api.xro/2.0/Receipts
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Receipts = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Receipts');
};

/*
 * PUT /api.xro/2.0/Receipts
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Receipts = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Receipts');
};

/*
 * GET /api.xro/2.0/Receipts/{ReceiptID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 */
exports.getApi_xro2_0Receipts2 = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Receipts2');
};

/*
 * POST /api.xro/2.0/Receipts/{ReceiptID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 */
exports.postApi_xro2_0Receipts = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Receipts');
};

/*
 * GET /api.xro/2.0/Receipts/{ReceiptID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 */
exports.getApi_xro2_0ReceiptsAttachments = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReceiptsAttachments');
};

/*
 * GET /api.xro/2.0/Receipts/{ReceiptID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 * AttachmentID(type: string) - path parameter - Unique identifier for a Attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Receipts3 = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Receipts/{ReceiptID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 * FileName(type: string) - path parameter - The name of the file being attached to the Receipt
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Receipts4 = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Receipts/{ReceiptID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 * FileName(type: string) - path parameter - The name of the file being attached to the Receipt
 */
exports.putApi_xro2_0Receipts2 = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Receipts2');
};

/*
 * POST /api.xro/2.0/Receipts/{ReceiptID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 * FileName(type: string) - path parameter - The name of the file being attached to the Receipt
 */
exports.postApi_xro2_0Receipts2 = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Receipts2');
};

/*
 * GET /api.xro/2.0/Receipts/{ReceiptID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 */
exports.getApi_xro2_0ReceiptsHistory = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/Receipts/{ReceiptID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * ReceiptID(type: string) - path parameter - Unique identifier for a Receipt
 */
exports.putApi_xro2_0ReceiptsHistory = function(req, res) {
	req.check('ReceiptID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/RepeatingInvoices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Repeatinginvoices = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Repeatinginvoices');
};

/*
 * GET /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 */
exports.getApi_xro2_0Repeatinginvoices2 = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Repeatinginvoices2');
};

/*
 * GET /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}/Attachments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 */
exports.getApi_xro2_0RepeatinginvoicesAttachments = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0RepeatinginvoicesAttachments');
};

/*
 * GET /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{AttachmentID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 * AttachmentID(type: string) - path parameter - Unique identifier for a Attachment
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Repeatinginvoices3 = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	req.check('AttachmentID', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 * FileName(type: string) - path parameter - The name of the file being attached to a Repeating Invoice
 * contentType(type: string) - header parameter - The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
 */
exports.getApi_xro2_0Repeatinginvoices4 = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	req.check('contentType', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 * FileName(type: string) - path parameter - The name of the file being attached to a Repeating Invoice
 */
exports.putApi_xro2_0Repeatinginvoices = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Repeatinginvoices');
};

/*
 * POST /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 * FileName(type: string) - path parameter - The name of the file being attached to a Repeating Invoice
 */
exports.postApi_xro2_0Repeatinginvoices = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	req.check('FileName', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Repeatinginvoices');
};

/*
 * GET /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}/History
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 */
exports.getApi_xro2_0RepeatinginvoicesHistory = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api.xro/2.0/RepeatingInvoices/{RepeatingInvoiceID}/History
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * RepeatingInvoiceID(type: string) - path parameter - Unique identifier for a Repeating Invoice
 */
exports.putApi_xro2_0RepeatinginvoicesHistory = function(req, res) {
	req.check('RepeatingInvoiceID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api.xro/2.0/Reports/TenNinetyNine
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * reportYear(type: string) - query parameter - The year of the 1099 report
 */
exports.getApi_xro2_0ReportsTenninetynine = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsTenninetynine');
};

/*
 * GET /api.xro/2.0/Reports/AgedPayablesByContact
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * contactId(type: string) - query parameter - Unique identifier for a Contact
 * date(type: string) - query parameter - The date of the Aged Payables By Contact report
 * fromDate(type: string) - query parameter - The from date of the Aged Payables By Contact report
 * toDate(type: string) - query parameter - The to date of the Aged Payables By Contact report
 */
exports.getApi_xro2_0ReportsAgedpayablesbycontact = function(req, res) {
	req.checkQuery('contactId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsAgedpayablesbycontact');
};

/*
 * GET /api.xro/2.0/Reports/AgedReceivablesByContact
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * contactId(type: string) - query parameter - Unique identifier for a Contact
 * date(type: string) - query parameter - The date of the Aged Receivables By Contact report
 * fromDate(type: string) - query parameter - The from date of the Aged Receivables By Contact report
 * toDate(type: string) - query parameter - The to date of the Aged Receivables By Contact report
 */
exports.getApi_xro2_0ReportsAgedreceivablesbycontact = function(req, res) {
	req.checkQuery('contactId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsAgedreceivablesbycontact');
};

/*
 * GET /api.xro/2.0/Reports/BalanceSheet
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * date(type: string) - query parameter - The date of the Balance Sheet report
 * periods(type: integer) - query parameter - The number of periods for the Balance Sheet report
 * timeframe(type: string) - query parameter - The period size to compare to (MONTH, QUARTER, YEAR)
 * trackingOptionID1(type: string) - query parameter - The tracking option 1 for the Balance Sheet report
 * trackingOptionID2(type: string) - query parameter - The tracking option 2 for the Balance Sheet report
 * standardLayout(type: boolean) - query parameter - The standard layout boolean for the Balance Sheet report
 * paymentsOnly(type: boolean) - query parameter - return a cash basis for the Balance Sheet report
 */
exports.getApi_xro2_0ReportsBalancesheet = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsBalancesheet');
};

/*
 * GET /api.xro/2.0/Reports/BankSummary
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * fromDate(type: string) - query parameter - The from date for the Bank Summary report e.g. 2018-03-31
 * toDate(type: string) - query parameter - The to date for the Bank Summary report e.g. 2018-03-31
 */
exports.getApi_xro2_0ReportsBanksummary = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsBanksummary');
};

/*
 * GET /api.xro/2.0/Reports
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApi_xro2_0Reports = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Reports');
};

/*
 * GET /api.xro/2.0/Reports/{ReportID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ReportID(type: string) - path parameter - Unique identifier for a Report
 */
exports.getApi_xro2_0Reports2 = function(req, res) {
	req.check('ReportID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Reports2');
};

/*
 * GET /api.xro/2.0/Reports/BudgetSummary
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * date(type: string) - query parameter - The date for the Bank Summary report e.g. 2018-03-31
 * period(type: integer) - query parameter - The number of periods to compare (integer between 1 and 12)
 * timeframe(type: integer) - query parameter - The period size to compare to (1=month, 3=quarter, 12=year)
 */
exports.getApi_xro2_0ReportsBudgetsummary = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsBudgetsummary');
};

/*
 * GET /api.xro/2.0/Reports/ExecutiveSummary
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * date(type: string) - query parameter - The date for the Bank Summary report e.g. 2018-03-31
 */
exports.getApi_xro2_0ReportsExecutivesummary = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsExecutivesummary');
};

/*
 * GET /api.xro/2.0/Reports/ProfitAndLoss
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * fromDate(type: string) - query parameter - The from date for the ProfitAndLoss report e.g. 2018-03-31
 * toDate(type: string) - query parameter - The to date for the ProfitAndLoss report e.g. 2018-03-31
 * periods(type: integer) - query parameter - The number of periods to compare (integer between 1 and 12)
 * timeframe(type: string) - query parameter - The period size to compare to (MONTH, QUARTER, YEAR)
 * trackingCategoryID(type: string) - query parameter - The trackingCategory 1 for the ProfitAndLoss report
 * trackingCategoryID2(type: string) - query parameter - The trackingCategory 2 for the ProfitAndLoss report
 * trackingOptionID(type: string) - query parameter - The tracking option 1 for the ProfitAndLoss report
 * trackingOptionID2(type: string) - query parameter - The tracking option 2 for the ProfitAndLoss report
 * standardLayout(type: boolean) - query parameter - Return the standard layout for the ProfitAndLoss report
 * paymentsOnly(type: boolean) - query parameter - Return cash only basis for the ProfitAndLoss report
 */
exports.getApi_xro2_0ReportsProfitandloss = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsProfitandloss');
};

/*
 * GET /api.xro/2.0/Reports/TrialBalance
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * date(type: string) - query parameter - The date for the Trial Balance report e.g. 2018-03-31
 * paymentsOnly(type: boolean) - query parameter - Return cash only basis for the Trial Balance report
 */
exports.getApi_xro2_0ReportsTrialbalance = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0ReportsTrialbalance');
};

/*
 * GET /api.xro/2.0/TaxRates
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * TaxType(type: string) - query parameter - Filter by tax type
 */
exports.getApi_xro2_0Taxrates = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Taxrates');
};

/*
 * PUT /api.xro/2.0/TaxRates
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Taxrates = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Taxrates');
};

/*
 * POST /api.xro/2.0/TaxRates
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApi_xro2_0Taxrates = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Taxrates');
};

/*
 * GET /api.xro/2.0/TrackingCategories
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 * includeArchived(type: boolean) - query parameter - e.g. includeArchived=true - Categories and options with a status of ARCHIVED will be included in the response
 */
exports.getApi_xro2_0Trackingcategories = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Trackingcategories');
};

/*
 * PUT /api.xro/2.0/TrackingCategories
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApi_xro2_0Trackingcategories = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0Trackingcategories');
};

/*
 * GET /api.xro/2.0/TrackingCategories/{TrackingCategoryID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * TrackingCategoryID(type: string) - path parameter - Unique identifier for a TrackingCategory
 */
exports.getApi_xro2_0Trackingcategories2 = function(req, res) {
	req.check('TrackingCategoryID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Trackingcategories2');
};

/*
 * POST /api.xro/2.0/TrackingCategories/{TrackingCategoryID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * TrackingCategoryID(type: string) - path parameter - Unique identifier for a TrackingCategory
 */
exports.postApi_xro2_0Trackingcategories = function(req, res) {
	req.check('TrackingCategoryID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Trackingcategories');
};

/*
 * DELETE /api.xro/2.0/TrackingCategories/{TrackingCategoryID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * TrackingCategoryID(type: string) - path parameter - Unique identifier for a TrackingCategory
 */
exports.deleteApi_xro2_0Trackingcategories = function(req, res) {
	req.check('TrackingCategoryID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_deleteApi_xro2_0Trackingcategories');
};

/*
 * PUT /api.xro/2.0/TrackingCategories/{TrackingCategoryID}/Options
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * TrackingCategoryID(type: string) - path parameter - Unique identifier for a TrackingCategory
 */
exports.putApi_xro2_0TrackingcategoriesOptions = function(req, res) {
	req.check('TrackingCategoryID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_putApi_xro2_0TrackingcategoriesOptions');
};

/*
 * POST /api.xro/2.0/TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * TrackingCategoryID(type: string) - path parameter - Unique identifier for a TrackingCategory
 * TrackingOptionID(type: string) - path parameter - Unique identifier for a Tracking Option
 */
exports.postApi_xro2_0Trackingcategories2 = function(req, res) {
	req.check('TrackingCategoryID', 'Invalid parameter').notEmpty();
	req.check('TrackingOptionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_postApi_xro2_0Trackingcategories2');
};

/*
 * DELETE /api.xro/2.0/TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * TrackingCategoryID(type: string) - path parameter - Unique identifier for a TrackingCategory
 * TrackingOptionID(type: string) - path parameter - Unique identifier for a Tracking Option
 */
exports.deleteApi_xro2_0Trackingcategories2 = function(req, res) {
	req.check('TrackingCategoryID', 'Invalid parameter').notEmpty();
	req.check('TrackingOptionID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_deleteApi_xro2_0Trackingcategories2');
};

/*
 * GET /api.xro/2.0/Users
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * where(type: string) - query parameter - Filter by an any element
 * order(type: string) - query parameter - Order by an any element
 */
exports.getApi_xro2_0Users = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Users');
};

/*
 * GET /api.xro/2.0/Users/{UserID}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * UserID(type: string) - path parameter - Unique identifier for a User
 */
exports.getApi_xro2_0Users2 = function(req, res) {
	req.check('UserID', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_xro_getApi_xro2_0Users2');
};
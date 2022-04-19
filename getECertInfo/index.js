module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = {
        "Documents": [
            {
                "DocumentType": "eCert",
                "DocumentData": {
                    "CertNumber": "NZL2022/123/45678",
                    "CertType": "NZPHYTO",
                    "Class": "Fruit",
                    "Subclass": "Fresh",
                    "ShippingMarks": "086-123456",
                    "ProductOrigin": "NZ",
                    "Treatment": "ABC",
                    "PackageDetails": "600 Tray",
                    "Weight": 1000,
                    "UnitofWeight": "1000",
                    "Quantity": 300,
                    "UnitOfQuantity": "EA",
                    "DateOfIssue": "30/03/2022",
                    "ExporterName": "Sample Exporter",
                    "ExporterAddress": "123 Test Street Auckland 2022 New Zealand",
                    "ConsigneeName": "Australian Importer",
                    "ConsigneeAddress": "57 Athoon Drive Greenway ACT 2900",
                    "ExportingCountry": "NZ",
                    "ImportingCountry": "AU",
                    "LoadingPort": "Auckland",
                    "DeclaredPointOfEntry": "Perth",
                    "InspectionPort": "Perth",
                    "TransportMode": "SEA",
                    "ScientificCommonName": "Avocado",
                    "Declaration": "This is to certify that the plants, plant products or other regulated articles described herein have been inspected and/or tested according to appropriate official procedures and are considered to be free from the quarantine pests specified by the importing contracting party and to conform with the current phytosanitary requirements of the importing contracting party, including those for regulated non-quarantine pests."
                }
            }
        ]
    };
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
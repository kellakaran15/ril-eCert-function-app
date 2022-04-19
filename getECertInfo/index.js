module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = "<?xml version='1.0' encoding='UTF - 8'?><Documents><DocumentType>eCert</DocumentType><DocumentData><CertNumber>NZL2022/123/45678</CertNumber><CertType>NZPHYTO</CertType><Class>Fruit</Class><Subclass>Fresh</Subclass><ShippingMarks>086-123456</ShippingMarks><ProductOrigin>NZ</ProductOrigin><Treatment>ABC</Treatment><PackageDetails>600 Tray</PackageDetails><Weight>1000</Weight><UnitofWeight>1000</UnitofWeight><Quantity>300</Quantity><UnitOfQuantity>EA</UnitOfQuantity><DateOfIssue>30/03/2022</DateOfIssue><ExporterName>Sample Exporter</ExporterName><ExporterAddress>123 Test Street Auckland 2022 New Zealand</ExporterAddress><ConsigneeName>Australian Importer</ConsigneeName><ConsigneeAddress>57 Athoon Drive Greenway ACT 2900</ConsigneeAddress><ExportingCountry>NZ</ExportingCountry><ImportingCountry>AU</ImportingCountry><LoadingPort>Auckland</LoadingPort><DeclaredPointOfEntry>Perth</DeclaredPointOfEntry><InspectionPort>Perth</InspectionPort><TransportMode>SEA</TransportMode><ScientificCommonName>Avocado</ScientificCommonName><Declaration>This is to certify that the plants, plant products or other regulated articles described herein have been inspected and/or tested according to appropriate official procedures and are considered to be free from the quarantine pests specified by the importing contracting party and to conform with the current phytosanitary requirements of the importing contracting party, including those for regulated non-quarantine pests.</Declaration></DocumentData></Documents>"

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
        headers: { 'Content-Type': 'text/xml'}   
    };
}
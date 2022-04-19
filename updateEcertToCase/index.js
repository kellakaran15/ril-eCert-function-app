const MongoClient = require('../api/dbConnect');
const { config } = require('../config');
const { ObjectId } = require('mongodb')


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const mongoClient = await MongoClient;
    const db = await mongoClient.db(config.MONGO_DB);
    const collection = db.collection('caseHeader');

    const eCert = JSON.parse(req.body.eCertificate);
    
    const eCertificate = await collection.updateOne({ id: req.body.caseId }, { $set: eCert });

    const responseMessage = eCertificate;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

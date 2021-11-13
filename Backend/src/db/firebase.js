const admin = require('firebase-admin');

const serviceAccount = require('./sastreriamintic-8064a299ed6c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;
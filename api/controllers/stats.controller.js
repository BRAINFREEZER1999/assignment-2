const db = require("../models");
const Contact = db.contacts;
const Phone = db.phones;

exports.stats = (req, res) => {
    const contactCount = Contact.count();

    const phoneCount = Phone.count();

    const mostRecentContactTime = Contact.max('createdAt');

    const oldestContactTime = Contact.min('createdAt');

    Promise.all([contactCount, phoneCount, mostRecentContactTime, oldestContactTime])
        .then(results => {
            res.send({
                totalContacts: results[0],
                totalPhones: results[1],
                mostRecentContactTime: results[2],
                oldestContactTime: results[3]
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving stats."
            });
        });
};

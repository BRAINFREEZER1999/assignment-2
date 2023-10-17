const db = require("../models");
const Contact = db.contacts;
const Phone = db.phones;

exports.stats = (req, res) => {
    // Get total number of contacts
    const contactCount = Contact.count();

    // Get total number of phone numbers
    const phoneCount = Phone.count();

    // Get the creation time of the most recent contact
    const mostRecentContactTime = Contact.max('createdAt');

    // Get the creation time of the oldest contact
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

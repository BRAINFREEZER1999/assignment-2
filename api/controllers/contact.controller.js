const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({
            message: "Name can't be empty!"
        });
    }

    const contact = {
        name: req.body.name
    };

    Contacts.create(contact)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the contact."
            });
        });
};

exports.findAll = (req, res) => {
    Contacts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving contacts."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.contactId;
    Contacts.findByPk(id)
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Contact with ID ${id} not found.`
                });
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving contact with ID=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.contactId;
    
    Contacts.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contact was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update contact with ID=${id}. Maybe contact was not found or body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating contact with ID=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.contactId;
    
    Contacts.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contact was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete contact with ID=${id}. Maybe contact was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete contact with ID=" + id
        });
    });
};

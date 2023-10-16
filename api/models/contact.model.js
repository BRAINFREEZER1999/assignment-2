module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("Contact", {  
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
  
    // Association (will be set up later in the flow)
    Contact.associate = (models) => {
        Contact.hasMany(models.Phone, {
            foreignKey: 'contactId',
            as: 'phones'
        });
    };

    return Contact;
};

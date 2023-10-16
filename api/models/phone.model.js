module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define('Phone', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Contacts',
                key: 'id'
            }
        }
    });
    
    Phone.associate = (models) => {
        Phone.belongsTo(models.Contact, {
            foreignKey: 'contactId',
            onDelete: 'CASCADE'
        });
    };

    return Phone;
};

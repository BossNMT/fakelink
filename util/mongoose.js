module.exports = {
    listMongoose: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },

    oneMongoose: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}
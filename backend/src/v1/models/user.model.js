const { Schema, Model, model } = require('mongoose')
const validator = require('validator')

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error('Invalid email')
        }
    },
    phone: {
        type: String,
        required: true,
    },
    messages: []
})

userSchema.methods.saveMessage = async function (message) {
    try {
        this.messages = this.messages.concat({ message })
        await this.save()
        return message
    } catch (error) {
        console.error(error)
    }
}

const _User = model('users', userSchema)

module.exports = _User
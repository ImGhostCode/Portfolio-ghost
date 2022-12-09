const { sendMail } = require("../services/index.service")

module.exports = {
    SendContact: async (req, res, next) => {
        try {
            const { fname, lname, email, phone, msg } = req.body

            const { code, elements, message } = await sendMail({ fname, lname, email, phone, msg })
            return res.status(code || 200).json({
                code, elements, message
            })

        } catch (error) {
            res.status(400).json({ code: 400, message: error.message })
        }
    }
}
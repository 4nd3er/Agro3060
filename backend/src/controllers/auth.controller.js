import Admin from '../models/admin.model.js'
import bcrypt from 'bcrypt'
import { createToken, errorResponse, sendEmailResetPassword } from '../libs/libs.js'

export const login = async (req, res) => {

    const { email, password } = req.body
    try {
        const findUser = await Admin.findOne({ email })
        if (!findUser) return res.status(400).json({ msg: "User not found" })

        const isPassword = await bcrypt.compare(password, findUser.password)
        if (!isPassword) return res.status(400).json({ msg: "Incorrect password" })

        const token = await createToken({ id: findUser.id, expires: "30d" })
        res.cookie("token", token)

        res.json({
            response: "User logged in successfully",
            data: {
                id: findUser._id,
                names: findUser.names,
                lastnames: findUser.lastnames,
                token: token
            }
        })
    } catch (error) {
        errorResponse(res, error)
    }
}

export const register = async (req, res) => {

    const enabledRegister = true
    if (!enabledRegister) return res.status(401).json({ msg: 'You are not allowed to register' })

    const { names, lastnames, email, password } = req.body
    try {
        const findUser = await Admin.findOne({ email })
        if (findUser) return res.status(400).json({ msg: 'This user already exists' })

        const newUser = new Admin({
            names,
            lastnames,
            email,
            password
        })
        const userSaved = await newUser.save()

        res.json({
            response: "User registered successfully",
            data: {
                id: userSaved._id,
                names: userSaved.names,
                lastnames: userSaved.lastnames,
                email: userSaved.email
            }
        })
    } catch (error) {
        errorResponse(res, error)
    }
}

export const forgetPassword = async (req, res) => {

    const { email } = req.body
    try {
        const finduser = await Admin.findOne({ email })
        if (!finduser) return res.status(400).json({ msg: 'User not found' })

        const token = await createToken({ id: finduser.email, expires: "15m" })
        sendEmailResetPassword(res, { userEmail: finduser.email, token: token })

    } catch (error) {
        errorResponse(res, error)
    }
}

export const resetPassword = async (req, res) => {

    const { password } = req.body
    try {
        const User = await Admin.findOneAndUpdate({ email: req.user.id }, { password: password }, {
            new: true
        })
        if (!User) return res.status(400).json({ msg: 'User not found' })
    
        res.json({
            response: "Password changed successfully",
            data: {
                names: User.names,
                lastnames: User.lastnames,
                email: User.email
            }
        })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const logout = (req, res) => {

    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {

    const findUser = await Admin.findById(req.user.id).select("-password -__v")
    if (!findUser) return res.status(404).json({ msg: "User not found" })

    const { token } = req.cookies

    res.json({
        session_token: token,
        user: findUser
    })
}
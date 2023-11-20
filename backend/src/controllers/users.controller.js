import compObjectId from '../libs/compObjectId.js'
import { getMethod, getOneMethod, createMethod, updateMethod } from '../libs/methods.js'
import { Users, Roles, Courses } from '../models/models.js'

export const users = async (req, res) => {
    await getMethod(res, Users, "User")
}

export const getUser = async (req, res) => {
    const { id } = req.params
    await getOneMethod(id, res, Users, "User")
}

export const createUser = async (req, res) => {
    const { names, lastnames, documentType, document, rol, email, course } = req.body
    const data = { names, lastnames, documentType, document, rol, email, course }
    const find = { names }

    const compRol = await compObjectId(rol, Roles, "Role")
    if (!compRol.success) return res.status(compRol.status).json({ msg: compRol.msg })
    if (course) {
        const compCourse = await compObjectId(course, Courses, "Course")
        if (!compCourse.success) return res.status(compCourse.status).json({ msg: compCourse.msg })
    }
    await createMethod(data, find, res, Users, "User", "capitalize 2")
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { names, lastnames, documentType, document, rol, email, course } = req.body
    const data = { names, lastnames, documentType, document, rol, email, course }
    const find = { names }

    const compRol = await compObjectId(rol, Roles, "Role")
    if (!compRol.success) return res.status(compRol.status).json({ msg: compRol.msg })
    if (course) {
        const compCourse = await compObjectId(course, Courses, "Course")
        if (!compCourse.success) return res.status(compCourse.status).json({ msg: compCourse.msg })
    }
    await updateMethod(data, id, find, res, Users, "User", "capitalize 2")
}


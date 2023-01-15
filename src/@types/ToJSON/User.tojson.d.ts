import { toJSON_User } from '../../Interface/User.inteface'

export function toJsonUser(this: toJSON_User) {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.__v
    return userObject
}
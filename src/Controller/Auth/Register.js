import bcrypt from 'bcryptjs'
import UserModel from '../../Models/User/User.model.js'
import {Baker} from '../../Models/User/Baker.js'
import {Member} from '../../Models/User/Member.js'
import {WelcomeEmail} from '../../Function/Email/Welcome.js'

export const RegisterController = async (req, res, next) => {
    try{
        const data = req.body

        if(!(data.type === 'member' || data.type === 'baker')){
            res.status(402).json({ status: 402, message: 'Choose Between Member Or Baker' })
        }else{
            // Create username
            const username = '@' + data.fName + '_' + data.lName
            data.username = username

            // Hash password
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(req.body.password, salt)
            data.password = password

            const CheckUser = await UserModel.findOne({email: data.email})
            if(CheckUser){
                res.status(401).json({ status: 401, message: 'Email is already used' })
            }else{
                if (data.type === 'member') {
                    const member = await new Member(data)
                    const saveMember = member.save()

                    WelcomeEmail(data.email, data.username)

                    res.status(200).json({ status: 200, saveMember })
                } else if (data.type === 'baker') {

                    const baker = await new Baker(data)
                    const saveBaker = baker.save()

                    WelcomeEmail(data.email, data.username)

                    res.status(200).json({ status: 200, saveBaker })
                }
            }
        }
        next()
    }catch(err){
        res.status(500).json({status: 500 , message: err.message})
    }
}
import { Request, Response } from 'express'
import { IUser, User } from '../models/user.js'
const secret = 'chatApp'
import jwt from 'jsonwebtoken'


const signUp = async(req: Request, res: Response): Promise<any> => {
    try{
        const { email } = req.body
        let isExist = await User.findOne({ email: email })
        if(isExist) {
            throw { code: 409, message: 'User already exist' }
        }
        const user = new User<IUser>(req.body)
        await user.save()
        res.status(201).json({
            message: 'User signup Successfully!'
        })
    }
    catch(e:any){
        res.status(e.code).json({ 
            message: e.message 
        })
    }
}

const logIn = async(req: Request, res: Response): Promise<any> => {
    try{
        let { email, password } = req.body
        let resData = await User.findOne({ email: email })
        if(!resData) {
            throw { code: 404, message: 'User not Exist' }
        }
        else {
            if(resData.password == password) {
                let token = jwt.sign({ id: resData._id }, secret)
                resData.token = token
                await resData.save()
                res.status(200).json({
                    message: 'User successfully login',
                    data: {
                        token: token
                    }
                })
            }
            else {
                throw { code: 403, message: 'Wrong Credentials' }
            }
        }
        
    }
    catch(e:any) {
        res.status(e.code).json({ 
            message: e.message 
        })
    } 
}

export { signUp, logIn }
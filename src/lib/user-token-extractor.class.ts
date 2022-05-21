import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

export class UserTokenExtractor {
    public token: string;
    public user: any;

    constructor(authorization?: string) {
        dotenv.config({ path: __dirname+'/.env' });
        this.token = '';
        if (authorization && authorization.split(' ')[0] === 'Bearer') {
            this.token = authorization.split(' ')[1];
            if (this.token) {
                let access_token_secret = '04b82ff49db2a2da1db7bf19ddbc58460a756be3f34cf68295d30987fb527811b08ac9ee947af947821049fb0be8e07a0c058b89a67d1b3088a953bfb699ce7e';
                if (process.env.ACCESS_TOKEN_SECRET) {
                    access_token_secret = process.env.ACCESS_TOKEN_SECRET;
                }
                this.user = jwt.verify(this.token, access_token_secret);
            }
        }
    }
}
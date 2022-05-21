import * as dotenv from 'dotenv';
// import fetch from 'node-fetch';
import axios from 'axios';

type ResponseData = {
    check_permission: boolean
}

type PermissionResponse = {
    data: ResponseData
}

type User = {
    id: string,
    created_by: string,
    modified_by: string,
    created_at: string,
    updated_at: string,
    deleted_at: string,
    name: string,
    email: string,
    individual_id: string,
    unit_id: string,
    institution_id: string,
    is_active: boolean,
    iat: number,
    exp: number,
}

export class CheckUserPermission {
    public is_allowed: boolean;
    public user: User;
    public permission: string;
    public token: string;
    public response_result: PermissionResponse;

    constructor(token: string, user: User, permission: string) {
        // console.log(user);
        dotenv.config({ path: __dirname+'/.env' });
        this.user = user;
        this.permission = permission;
        this.token = token;
    }

    public async check(): Promise<boolean> {
        let returned = false;
        const query = `query { check_permission(user_id: "${this.user.id}", permission: "${this.permission}", token: "${this.token}") }`;
        const { data } = await axios.post<PermissionResponse>(
            process.env.APP_AUTH_URL || 'http://localhost:4001',
            { query },
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer "${this.user.id}"`
              },
            },
        );
        returned = data.data.check_permission;
        return returned;
    }
}
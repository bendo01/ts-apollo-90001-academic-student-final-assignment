import { AppDataSource } from '../../../../../config/database';
import { AcademicStudentFinalAssignmentReferenceAdviserCategoryEntity as ModelEntity } from './adviser-category.entity';
import { CheckUserPermission } from '../../../../../lib/check-user-permission.class';

const model_table_name:string = 'academic_student_final_assignment_reference.adviser_categories';

module.exports = {
    Query: {
        academic_student_final_assignment_reference_adviser_category: async ( _:any, args:any, context: any ) => {
            const check_auth_user_permission = new CheckUserPermission(context.token, context.user, context.permission);
            let check_permission = await check_auth_user_permission.check();
            if (!check_permission) return null;
            
            const data = AppDataSource.manager.findOneBy(ModelEntity, { id: args.id });
            return data;
        },
        academic_student_final_assignment_reference_adviser_category_paginate: async ( _:any, args:any, context: any ) => {
            const check_auth_user_permission = new CheckUserPermission(context?.token, context?.user, context?.permission);
            let check_permission = await check_auth_user_permission.check();
            if (!check_permission) return null;

            const model =  AppDataSource.getRepository(ModelEntity);
            const query = model.createQueryBuilder(model_table_name);
            let page:number = 1;
            let per_page:number = 10;
            let sort:string = 'name';
            let order:string = 'ASC';
            let filter:string = 'code';
            let search:string = '';
            let total:number = await model.count();
            let last_page:number = Math.ceil(total/per_page);
            
            if (typeof args.page !== 'undefined' && args.page) {
                page = args.page;
            }

            if (typeof args.per_page !== 'undefined' && args.per_page) {
                per_page = args.per_page;
            }
            
            if (typeof args.sort !== 'undefined' && args.sort) {
                sort = args.sort;
            }

            if (typeof args.order !== 'undefined' && args.order) {
                order = args.order;
            }

            if (typeof args.filter !== 'undefined' && args.filter) {
                filter = args.filter;
            }

            if (typeof args.search !== 'undefined' && args.search) {
                search = args.search;
            }

            if (filter && search && (filter == 'code' || filter == 'name' || filter == 'birth_place')) {
                query.where(`${model_table_name}.${ filter } LIKE :search`, {search: `%${search}%`})
                total = await query.where(`${model_table_name}.${ filter } LIKE :search`, {search: `%${search}%`}).getCount();
                last_page = Math.ceil(total/per_page);
            }

            if (sort) {
                query.orderBy(`${model_table_name}.${ sort }`, 'ASC');
                if (order && order == 'DESC') {
                    query.orderBy(`${model_table_name}.${ sort }`, 'DESC');
                }
            }

            query.offset((page - 1) * per_page).limit(per_page);
            // return query.getMany();
            return {
                pagination: {
                    page,
                    per_page,
                    sort,
                    order,
                    filter,
                    search,
                    total,
                    last_page
                },
                data: query.getMany()
            }
        }
    },
    Mutation: {
        create_academic_student_final_assignment_reference_adviser_category: async ( _:any, input:any, context: any ) => {
            const check_auth_user_permission = new CheckUserPermission(context.token, context.user, context.permission);
            let check_permission = await check_auth_user_permission.check();
            if (!check_permission) return null;

            const data: object = {
                code: input.data.code,
                alphabet_code: input.data.alphabet_code,
                name: input.data.name,
            };
            return await AppDataSource.getRepository(ModelEntity).save(data);
        },
        update_academic_student_final_assignment_reference_adviser_category: async ( _:any, input:any, context: any ) => {
            const check_auth_user_permission = new CheckUserPermission(context.token, context.user, context.permission);
            let check_permission = await check_auth_user_permission.check();
            if (!check_permission) return null;

            const id:string = input.id;
            const data: object = {
                code: input.data.code,
                alphabet_code: input.data.alphabet_code,
                name: input.data.name,
            };
            await AppDataSource.manager.update(ModelEntity, id, data);
            return await AppDataSource.getRepository(ModelEntity).findOneBy({id});
        },
        delete_academic_student_final_assignment_reference_adviser_category: async ( _:any, input:any, context: any ) => {
            const check_auth_user_permission = new CheckUserPermission(context.token, context.user, context.permission);
            let check_permission = await check_auth_user_permission.check();
            if (!check_permission) return null;
            
            const id:string = input.id;
            const model =  AppDataSource.getRepository(ModelEntity);
            const data = model.findOneBy({id});
            const query = model.createQueryBuilder(model_table_name);
            await query.softDelete().from(ModelEntity).where(`${model_table_name}.id = :id`, { id }).execute();
            return data;
        },
    }
}
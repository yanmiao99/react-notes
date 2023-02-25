import { Controller } from 'egg';
export default class UserRoleManagerController extends Controller {
    public async create() {
        const {ctx} = this;
        const data = ctx.request.body;
        try {
            const userRole = await ctx.service.userRoleManagerService.createUserRole(data);
            ctx.success(userRole, 200);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
    public async destroy(){
        const {ctx} = this;
        const {userId} = ctx.params;
        const {roleId} = ctx.request.body;
        try {
            const data = await ctx.service.userRoleManagerService.destroyUser(userId, roleId);
            ctx.success(data, 200);
        } catch (e) {
            ctx.error(400, e.message);
        }
    }
}

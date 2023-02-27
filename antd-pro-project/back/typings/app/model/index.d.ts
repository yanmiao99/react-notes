// This file is created by egg-ts-helper@1.34.7
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportMenuModel from '../../../app/model/menuModel';
import ExportResourceModel from '../../../app/model/resourceModel';
import ExportRoleMenuModel from '../../../app/model/roleMenuModel';
import ExportRoleModel from '../../../app/model/roleModel';
import ExportRoleResourceModel from '../../../app/model/roleResourceModel';
import ExportUserAuthModel from '../../../app/model/userAuthModel';
import ExportUserModel from '../../../app/model/userModel';
import ExportUserRoleModel from '../../../app/model/userRoleModel';

declare module 'egg' {
  interface IModel {
    MenuModel: ReturnType<typeof ExportMenuModel>;
    ResourceModel: ReturnType<typeof ExportResourceModel>;
    RoleMenuModel: ReturnType<typeof ExportRoleMenuModel>;
    RoleModel: ReturnType<typeof ExportRoleModel>;
    RoleResourceModel: ReturnType<typeof ExportRoleResourceModel>;
    UserAuthModel: ReturnType<typeof ExportUserAuthModel>;
    UserModel: ReturnType<typeof ExportUserModel>;
    UserRoleModel: ReturnType<typeof ExportUserRoleModel>;
  }
}

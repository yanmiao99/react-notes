// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportMenuManagerService from '../../../app/service/menuManagerService';
import ExportOauthService from '../../../app/service/oauthService';
import ExportResourceManagerService from '../../../app/service/resourceManagerService';
import ExportRoleManagerService from '../../../app/service/roleManagerService';
import ExportRoleMenuManagerService from '../../../app/service/roleMenuManagerService';
import ExportRoleResourceManagerService from '../../../app/service/roleResourceManagerService';
import ExportUserManagerService from '../../../app/service/userManagerService';
import ExportUserRoleManagerService from '../../../app/service/userRoleManagerService';
import ExportUserService from '../../../app/service/userService';

declare module 'egg' {
  interface IService {
    menuManagerService: AutoInstanceType<typeof ExportMenuManagerService>;
    oauthService: AutoInstanceType<typeof ExportOauthService>;
    resourceManagerService: AutoInstanceType<typeof ExportResourceManagerService>;
    roleManagerService: AutoInstanceType<typeof ExportRoleManagerService>;
    roleMenuManagerService: AutoInstanceType<typeof ExportRoleMenuManagerService>;
    roleResourceManagerService: AutoInstanceType<typeof ExportRoleResourceManagerService>;
    userManagerService: AutoInstanceType<typeof ExportUserManagerService>;
    userRoleManagerService: AutoInstanceType<typeof ExportUserRoleManagerService>;
    userService: AutoInstanceType<typeof ExportUserService>;
  }
}

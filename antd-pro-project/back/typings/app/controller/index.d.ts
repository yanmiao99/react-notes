// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGithubController from '../../../app/controller/githubController';
import ExportMenuManagerController from '../../../app/controller/menuManagerController';
import ExportResourceManagerController from '../../../app/controller/resourceManagerController';
import ExportRoleManagerController from '../../../app/controller/roleManagerController';
import ExportRoleMenuManagerController from '../../../app/controller/roleMenuManagerController';
import ExportRoleResourceManagerController from '../../../app/controller/roleResourceManagerController';
import ExportUserController from '../../../app/controller/userController';
import ExportUserManagerController from '../../../app/controller/userManagerController';
import ExportUserRoleManagerController from '../../../app/controller/userRoleManagerController';
import ExportUtilController from '../../../app/controller/utilController';

declare module 'egg' {
  interface IController {
    githubController: ExportGithubController;
    menuManagerController: ExportMenuManagerController;
    resourceManagerController: ExportResourceManagerController;
    roleManagerController: ExportRoleManagerController;
    roleMenuManagerController: ExportRoleMenuManagerController;
    roleResourceManagerController: ExportRoleResourceManagerController;
    userController: ExportUserController;
    userManagerController: ExportUserManagerController;
    userRoleManagerController: ExportUserRoleManagerController;
    utilController: ExportUtilController;
  }
}

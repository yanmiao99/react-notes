/*
 Navicat Premium Data Transfer

 Source Server         : it666
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : itzb

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 21/12/2020 15:13:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for rights_menus
-- ----------------------------
DROP TABLE IF EXISTS `rights_menus`;
CREATE TABLE `rights_menus`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `sort` int NOT NULL,
  `menu_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `menu_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `menu_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `menu_component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `menu_state` tinyint(1) NULL DEFAULT 1,
  `parent_id` int NOT NULL DEFAULT 0,
  `level` int NOT NULL DEFAULT 0,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of rights_menus
-- ----------------------------
INSERT INTO `rights_menus` VALUES (1, 0, 'TeamOutlined', '用户管理', '用户管理菜单', '/userControl', '', 1, 0, 0, '2020-12-10 22:14:59', '2020-12-10 22:14:59');
INSERT INTO `rights_menus` VALUES (2, 0, 'UserSwitchOutlined', '用户列表', '用户列表菜单', '/userControl/userList', './admin/userControl/index', 1, 1, 1, '2020-12-10 22:22:54', '2020-12-10 22:22:54');
INSERT INTO `rights_menus` VALUES (3, 1, 'SafetyCertificateOutlined', '权限管理', '权限管理菜单', '/authorizeControl', '', 1, 0, 0, '2020-12-10 22:24:35', '2020-12-17 22:49:15');
INSERT INTO `rights_menus` VALUES (4, 1, 'UserOutlined', '角色列表', '角色列表菜单', '/authorizeControl/roleList', './admin/roleControl/index', 1, 3, 1, '2020-12-10 22:25:47', '2020-12-10 22:25:47');
INSERT INTO `rights_menus` VALUES (5, 2, 'EyeInvisibleOutlined', '权限列表', '权限列表菜单', '/authorizeControl/resourceList', './admin/resourceControl/index', 1, 3, 1, '2020-12-10 22:26:33', '2020-12-10 22:40:38');
INSERT INTO `rights_menus` VALUES (6, 3, 'ProfileOutlined', '菜单列表', '菜单列表菜单', '/authorizeControl/menuList', './admin/menuControl/index', 1, 3, 1, '2020-12-10 22:27:12', '2020-12-10 22:27:12');

-- ----------------------------
-- Table structure for rights_resources
-- ----------------------------
DROP TABLE IF EXISTS `rights_resources`;
CREATE TABLE `rights_resources`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `source_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `source_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `source_state` tinyint(1) NULL DEFAULT 1,
  `source_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '',
  `source_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `parent_id` int NULL DEFAULT NULL,
  `level` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of rights_resources
-- ----------------------------
INSERT INTO `rights_resources` VALUES (1, 'USER_MANAGER', '用户相关权限', 1, '', '/api/v1/userManager', '2020-12-08 15:30:54', '2020-12-15 23:29:10', 0, 0);
INSERT INTO `rights_resources` VALUES (2, 'CREATE_USER', '新增用户', 1, 'POST', '/api/v1/userManager', '2020-12-08 15:29:22', '2020-12-08 15:29:22', 1, 1);
INSERT INTO `rights_resources` VALUES (3, 'DELETE_USER', '删除用户', 1, 'DELETE', '/api/v1/userManager', '2020-12-08 15:28:59', '2020-12-08 15:28:59', 1, 1);
INSERT INTO `rights_resources` VALUES (4, 'UPDATE_USER', '更新用户', 1, 'PUT', '/api/v1/userManager', '2020-12-08 15:28:29', '2020-12-08 15:28:29', 1, 1);
INSERT INTO `rights_resources` VALUES (5, 'GET_USER', '获取用户', 1, 'GET', '/api/v1/userManager', '2020-12-08 14:43:30', '2020-12-08 15:28:33', 1, 1);
INSERT INTO `rights_resources` VALUES (6, 'DISPATCH_USER_ROLE', '分配用户角色', 1, 'POST', '/api/v1/userRoleManager', '2020-12-09 21:36:39', '2020-12-09 21:51:23', 1, 1);
INSERT INTO `rights_resources` VALUES (7, 'DELETE_USER_ROLE', '删除用户角色', 1, 'DELETE', '/api/v1/userRoleManager', '2020-12-09 21:37:04', '2020-12-09 21:37:04', 1, 1);
INSERT INTO `rights_resources` VALUES (8, 'ROLE_MANAGER', '角色相关权限', 1, '', '/api/v1/roleManager', '2020-12-10 12:20:15', '2020-12-15 23:29:17', 0, 0);
INSERT INTO `rights_resources` VALUES (9, 'CREATE_ROLE', '新增角色', 1, 'POST', '/api/v1/roleManager', '2020-12-10 12:22:32', '2020-12-10 12:22:32', 8, 1);
INSERT INTO `rights_resources` VALUES (10, 'DELETE_ROLE', '删除角色', 1, 'DELETE', '/api/v1/roleManager', '2020-12-10 12:21:44', '2020-12-10 12:21:44', 8, 1);
INSERT INTO `rights_resources` VALUES (11, 'UPDATE_ROLE', '更新角色', 1, 'PUT', '/api/v1/roleManager', '2020-12-10 12:22:08', '2020-12-10 12:22:08', 8, 1);
INSERT INTO `rights_resources` VALUES (12, 'GET_ROLE', '获取角色', 1, 'GET', '/api/v1/roleManager', '2020-12-10 12:21:06', '2020-12-10 12:21:17', 8, 1);
INSERT INTO `rights_resources` VALUES (13, 'SOURCE_MANAGER', '权限相关权限', 1, '', '/api/v1/resourceManager', '2020-12-15 23:27:23', '2020-12-15 23:29:03', 0, 0);
INSERT INTO `rights_resources` VALUES (14, 'CREATE_SOURCE', '新增权限', 1, 'POST', '/api/v1/resourceManager', '2020-12-15 23:30:57', '2020-12-15 23:30:57', 13, 1);
INSERT INTO `rights_resources` VALUES (15, 'DELETE_SOURCE', '删除权限', 1, 'DELETE', '/api/v1/resourceManager', '2020-12-15 23:31:46', '2020-12-15 23:31:46', 13, 1);
INSERT INTO `rights_resources` VALUES (16, 'UPDATE_SOURCE', '更新权限', 1, 'PUT', '/api/v1/resourceManager', '2020-12-15 23:31:28', '2020-12-15 23:31:28', 13, 1);
INSERT INTO `rights_resources` VALUES (17, 'GET_SOURCE', '获取权限', 1, 'GET', '/api/v1/resourceManager', '2020-12-15 23:35:48', '2020-12-15 23:35:48', 13, 1);
INSERT INTO `rights_resources` VALUES (18, 'MENU_MANAGER', '菜单相关权限', 1, '', '/api/v1/menuManager', '2020-12-15 23:28:45', '2020-12-15 23:28:56', 0, 0);
INSERT INTO `rights_resources` VALUES (19, 'CREATE_MENU', '新增菜单', 1, 'POST', '/api/v1/menuManager', '2020-12-15 23:37:03', '2020-12-15 23:37:03', 18, 1);
INSERT INTO `rights_resources` VALUES (20, 'DELETE_MENU', '删除菜单', 1, 'DELETE', '/api/v1/menuManager', '2020-12-15 23:37:27', '2020-12-15 23:37:27', 18, 1);
INSERT INTO `rights_resources` VALUES (21, 'UPDATE_MENU', '修改菜单', 1, 'PUT', '/api/v1/menuManager', '2020-12-15 23:37:48', '2020-12-15 23:37:48', 18, 1);
INSERT INTO `rights_resources` VALUES (22, 'GET_MENU', '获取菜单', 1, 'GET', '/api/v1/menuManager', '2020-12-15 23:38:05', '2020-12-15 23:38:05', 18, 1);
INSERT INTO `rights_resources` VALUES (23, 'DISPATCH_ROLE_RESOURCE', '分配角色权限', 1, 'PUT', '/api/v1/roleResourceManager/', '2020-12-10 12:24:10', '2020-12-10 12:24:52', 8, 1);
INSERT INTO `rights_resources` VALUES (24, 'DISPATCH_ROLE_MENU', '分配角色菜单', 1, 'PUT', '/api/v1/roleMenuManager', '2020-12-15 23:26:37', '2020-12-15 23:26:46', 8, 1);
INSERT INTO `rights_resources` VALUES (45, 'USER_IMPORT', '导入用户', 1, 'POST', '/api/v1/importUsers', '2020-12-16 19:00:41', '2020-12-16 19:00:41', 1, 1);
INSERT INTO `rights_resources` VALUES (46, 'USER_EXPORT', '导出用户', 1, 'GET', '/api/v1/exportUsers', '2020-12-16 19:01:06', '2020-12-16 19:01:06', 1, 1);
INSERT INTO `rights_resources` VALUES (49, 'CREATE_AVATAR', '上传头像', 1, 'POST', '/api/v1/posts', '2020-12-21 14:49:38', '2020-12-21 14:49:38', 1, 1);

-- ----------------------------
-- Table structure for rights_role_menus
-- ----------------------------
DROP TABLE IF EXISTS `rights_role_menus`;
CREATE TABLE `rights_role_menus`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `menu_id` int NOT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  INDEX `menu_id`(`menu_id`) USING BTREE,
  CONSTRAINT `rights_role_menus_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rights_role_menus_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `rights_menus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rights_role_menus
-- ----------------------------
INSERT INTO `rights_role_menus` VALUES (1, 1, 1, '2020-12-18 19:53:11', '2020-12-18 19:53:11');
INSERT INTO `rights_role_menus` VALUES (2, 1, 2, '2020-12-18 19:53:11', '2020-12-18 19:53:11');
INSERT INTO `rights_role_menus` VALUES (3, 1, 4, '2020-12-18 19:53:11', '2020-12-18 19:53:11');
INSERT INTO `rights_role_menus` VALUES (4, 1, 5, '2020-12-18 19:53:11', '2020-12-18 19:53:11');
INSERT INTO `rights_role_menus` VALUES (5, 1, 3, '2020-12-18 19:53:11', '2020-12-18 19:53:11');
INSERT INTO `rights_role_menus` VALUES (6, 1, 6, '2020-12-18 19:53:23', '2020-12-18 19:53:23');
INSERT INTO `rights_role_menus` VALUES (7, 2, 1, '2020-12-18 19:53:28', '2020-12-18 19:53:28');
INSERT INTO `rights_role_menus` VALUES (8, 2, 2, '2020-12-18 19:53:28', '2020-12-18 19:53:28');
INSERT INTO `rights_role_menus` VALUES (9, 3, 4, '2020-12-18 19:53:32', '2020-12-18 19:53:32');
INSERT INTO `rights_role_menus` VALUES (10, 3, 3, '2020-12-18 19:53:32', '2020-12-18 19:53:32');
INSERT INTO `rights_role_menus` VALUES (11, 4, 5, '2020-12-18 19:53:39', '2020-12-18 19:53:39');
INSERT INTO `rights_role_menus` VALUES (12, 4, 3, '2020-12-18 19:53:39', '2020-12-18 19:53:39');
INSERT INTO `rights_role_menus` VALUES (13, 5, 6, '2020-12-18 19:53:42', '2020-12-18 19:53:42');
INSERT INTO `rights_role_menus` VALUES (14, 5, 3, '2020-12-18 19:53:42', '2020-12-18 19:53:42');

-- ----------------------------
-- Table structure for rights_role_resources
-- ----------------------------
DROP TABLE IF EXISTS `rights_role_resources`;
CREATE TABLE `rights_role_resources`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `source_id` int NOT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  INDEX `source_id`(`source_id`) USING BTREE,
  CONSTRAINT `rights_role_resources_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rights_role_resources_ibfk_2` FOREIGN KEY (`source_id`) REFERENCES `rights_resources` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 68 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rights_role_resources
-- ----------------------------
INSERT INTO `rights_role_resources` VALUES (1, 1, 1, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (2, 1, 2, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (5, 1, 5, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (7, 1, 7, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (8, 1, 45, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (9, 1, 46, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (11, 1, 8, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (12, 1, 9, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (13, 1, 10, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (14, 1, 11, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (15, 1, 12, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (16, 1, 23, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (17, 1, 24, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (18, 1, 13, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (19, 1, 14, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (21, 1, 16, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (22, 1, 17, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (23, 1, 18, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (24, 1, 19, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (25, 1, 20, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (26, 1, 21, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (27, 1, 22, '2020-12-18 19:51:39', '2020-12-18 19:51:39');
INSERT INTO `rights_role_resources` VALUES (28, 2, 1, '2020-12-18 19:51:44', '2020-12-18 19:51:44');
INSERT INTO `rights_role_resources` VALUES (29, 2, 2, '2020-12-18 19:51:44', '2020-12-18 19:51:44');
INSERT INTO `rights_role_resources` VALUES (31, 2, 4, '2020-12-18 19:51:44', '2020-12-18 19:51:44');
INSERT INTO `rights_role_resources` VALUES (32, 2, 5, '2020-12-18 19:51:44', '2020-12-18 19:51:44');
INSERT INTO `rights_role_resources` VALUES (33, 2, 6, '2020-12-18 19:51:44', '2020-12-18 19:51:44');
INSERT INTO `rights_role_resources` VALUES (35, 2, 45, '2020-12-18 19:51:44', '2020-12-18 19:51:44');
INSERT INTO `rights_role_resources` VALUES (36, 2, 46, '2020-12-18 19:51:44', '2020-12-18 19:51:44');
INSERT INTO `rights_role_resources` VALUES (38, 3, 8, '2020-12-18 19:51:48', '2020-12-18 19:51:48');
INSERT INTO `rights_role_resources` VALUES (39, 3, 9, '2020-12-18 19:51:48', '2020-12-18 19:51:48');
INSERT INTO `rights_role_resources` VALUES (40, 3, 10, '2020-12-18 19:51:48', '2020-12-18 19:51:48');
INSERT INTO `rights_role_resources` VALUES (41, 3, 11, '2020-12-18 19:51:48', '2020-12-18 19:51:48');
INSERT INTO `rights_role_resources` VALUES (42, 3, 12, '2020-12-18 19:51:48', '2020-12-18 19:51:48');
INSERT INTO `rights_role_resources` VALUES (43, 3, 23, '2020-12-18 19:51:48', '2020-12-18 19:51:48');
INSERT INTO `rights_role_resources` VALUES (44, 3, 24, '2020-12-18 19:51:48', '2020-12-18 19:51:48');
INSERT INTO `rights_role_resources` VALUES (45, 4, 13, '2020-12-18 19:51:54', '2020-12-18 19:51:54');
INSERT INTO `rights_role_resources` VALUES (46, 4, 14, '2020-12-18 19:51:54', '2020-12-18 19:51:54');
INSERT INTO `rights_role_resources` VALUES (47, 4, 15, '2020-12-18 19:51:54', '2020-12-18 19:51:54');
INSERT INTO `rights_role_resources` VALUES (48, 4, 16, '2020-12-18 19:51:54', '2020-12-18 19:51:54');
INSERT INTO `rights_role_resources` VALUES (49, 4, 17, '2020-12-18 19:51:54', '2020-12-18 19:51:54');
INSERT INTO `rights_role_resources` VALUES (50, 5, 18, '2020-12-18 19:51:57', '2020-12-18 19:51:57');
INSERT INTO `rights_role_resources` VALUES (51, 5, 19, '2020-12-18 19:51:57', '2020-12-18 19:51:57');
INSERT INTO `rights_role_resources` VALUES (52, 5, 20, '2020-12-18 19:51:57', '2020-12-18 19:51:57');
INSERT INTO `rights_role_resources` VALUES (53, 5, 21, '2020-12-18 19:51:57', '2020-12-18 19:51:57');
INSERT INTO `rights_role_resources` VALUES (54, 5, 22, '2020-12-18 19:51:57', '2020-12-18 19:51:57');
INSERT INTO `rights_role_resources` VALUES (55, 2, 7, '2020-12-18 19:56:36', '2020-12-18 19:56:36');
INSERT INTO `rights_role_resources` VALUES (56, 2, 3, '2020-12-18 20:20:02', '2020-12-18 20:20:02');
INSERT INTO `rights_role_resources` VALUES (57, 2, 12, '2020-12-18 20:21:36', '2020-12-18 20:21:36');
INSERT INTO `rights_role_resources` VALUES (58, 2, 8, '2020-12-18 20:21:36', '2020-12-18 20:21:36');
INSERT INTO `rights_role_resources` VALUES (59, 3, 17, '2020-12-18 20:21:53', '2020-12-18 20:21:53');
INSERT INTO `rights_role_resources` VALUES (60, 3, 22, '2020-12-18 20:21:53', '2020-12-18 20:21:53');
INSERT INTO `rights_role_resources` VALUES (61, 3, 13, '2020-12-18 20:21:53', '2020-12-18 20:21:53');
INSERT INTO `rights_role_resources` VALUES (62, 3, 18, '2020-12-18 20:21:53', '2020-12-18 20:21:53');
INSERT INTO `rights_role_resources` VALUES (63, 1, 3, '2020-12-21 14:03:24', '2020-12-21 14:03:24');
INSERT INTO `rights_role_resources` VALUES (64, 1, 4, '2020-12-21 14:03:24', '2020-12-21 14:03:24');
INSERT INTO `rights_role_resources` VALUES (65, 1, 6, '2020-12-21 14:03:24', '2020-12-21 14:03:24');
INSERT INTO `rights_role_resources` VALUES (66, 1, 15, '2020-12-21 14:47:49', '2020-12-21 14:47:49');
INSERT INTO `rights_role_resources` VALUES (67, 1, 49, '2020-12-21 14:49:52', '2020-12-21 14:49:52');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role_state` tinyint(1) NULL DEFAULT 1,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `role_name`(`role_name`) USING BTREE,
  UNIQUE INDEX `role_desc`(`role_desc`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, '超级管理员', '拥有所有权限', 1, '2020-12-08 17:39:09', '2020-12-08 17:39:09');
INSERT INTO `roles` VALUES (2, '用户管理员', '拥有用户管理所有权限', 1, '2020-12-08 17:39:14', '2020-12-10 12:28:04');
INSERT INTO `roles` VALUES (3, '角色管理员', '拥有角色管理所有权限', 1, '2020-12-08 17:39:21', '2020-12-10 12:28:00');
INSERT INTO `roles` VALUES (4, '权限管理员', '拥有权限管理所有权限', 1, '2020-12-15 23:23:37', '2020-12-15 23:23:37');
INSERT INTO `roles` VALUES (5, '菜单管理员', '拥有菜单管理所有权限', 1, '2020-12-10 12:27:41', '2020-12-10 12:27:41');
INSERT INTO `roles` VALUES (6, '普通用户', '暂时没有任何权限', 1, '2020-12-15 20:28:10', '2020-12-15 20:28:10');
INSERT INTO `roles` VALUES (18, '测试角色', '测试角色', 1, '2020-12-18 17:35:36', '2020-12-18 17:35:36');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20200727060756-users.ts');
INSERT INTO `sequelizemeta` VALUES ('20201113144431-user_auths.ts');
INSERT INTO `sequelizemeta` VALUES ('20201118075050-users.ts');
INSERT INTO `sequelizemeta` VALUES ('20201130114932-roles.ts');
INSERT INTO `sequelizemeta` VALUES ('20201130115023-user_roles.ts');
INSERT INTO `sequelizemeta` VALUES ('20201130143720-menu.ts');
INSERT INTO `sequelizemeta` VALUES ('20201130143721-resource.ts');
INSERT INTO `sequelizemeta` VALUES ('20201130143739-role_menu.ts');
INSERT INTO `sequelizemeta` VALUES ('20201130143747-role_resource.ts');

-- ----------------------------
-- Table structure for user_auths
-- ----------------------------
DROP TABLE IF EXISTS `user_auths`;
CREATE TABLE `user_auths`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `identity_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `access_token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `open_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `expire_in` datetime(0) NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `user_auths_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_auths
-- ----------------------------

-- ----------------------------
-- Table structure for user_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `role_id`(`role_id`) USING BTREE,
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_roles
-- ----------------------------
INSERT INTO `user_roles` VALUES (1, 1, 1, '2020-12-18 17:44:32', '2020-12-18 17:44:32');
INSERT INTO `user_roles` VALUES (2, 2, 2, '2020-12-18 17:44:37', '2020-12-18 17:44:37');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `nike_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatar_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '/public/avatar.jpg',
  `user_state` tinyint(1) NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `mail`(`mail`) USING BTREE,
  UNIQUE INDEX `mobile`(`mobile`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, '97606813@qq.com', '17301727164', '43efd5e18b6fd0be46c201b12cd61ddf', '2020-12-03 19:05:23', '2020-12-05 15:12:25', '极客江南', '/public/avatar.jpg', 1);
INSERT INTO `users` VALUES (2, 'lnj@qq.com', '17777777777', '43efd5e18b6fd0be46c201b12cd61ddf', '1970-01-01 08:00:25', '2020-12-15 23:46:28', '测试账号', '/public/avatar.jpg', 1);

SET FOREIGN_KEY_CHECKS = 1;

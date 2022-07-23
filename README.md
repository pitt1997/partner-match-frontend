# 伙伴匹配系统前端

## 需求分析
```javascript
1. 用户去添加标签，标签的分类（要有哪些标签、怎么把标签进行分类）学习方向 java / c++，工作 / 大学
2. 主动搜索：允许用户根据标签去搜索其他用户
   a. Redis 缓存
3. 组队
   a. 创建队伍
   b. 加入队伍
   c. 根据标签查询队伍
   d. 邀请其他人
4. 允许用户去修改标签
5. 推荐
   a. 相似度计算算法 + 本地分布式计算
```
## 前端
```javascript
1. Vue 3 开发框架（提高页面开发的效率）
2. Vant UI（基于 Vue 的移动端组件库）（React 版 Zent）
3. Vite（打包工具，快！）
4. Nginx 来单机部署
```

## 后端
```javascript
1. Java 编程语言 + SpringBoot 框架
2. SpringMVC + MyBatis + MyBatis Plus（提高开发效率）
3. MySQL 数据库
4. Redis 缓存
5. Swagger + Knife4j 接口文档
```

# 快速使用

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).



# 快速部署

## Linux 服务器部署

1、git 下载代码后初始化项目

```
npm install
```

或者

```
yarn
```

2、找到 nginx 配置文件进行编辑

```java
/usr/local/nginx/conf/nginx.conf
```

修改 location 配置项配置前端项目的位置，eg. /home/services/user-center-front。

```java
        location / {
            root   /home/services/user-center-front;
            index  index.html index.htm;
        }
```

3、编辑全局映射文件，修改映射后端请求地址

```java
./src/plugins/myAxios.js
```

将原有 http://localhost:8080 修改为部署后端的域名如：http://www.backend-user.com 或者其他端口地址。

4、前端代码重新编译，重新覆盖 dist 目录

5、重启 nginx

```
nginx -s reload
```

## Docker 容器部署

docker build

```shell
$ sudo docker build -t partner-match-frontend:v0.0.1 .
```

docker run

```shell
$ docker run -p 80:80 -d partner-match-frontend:v0.0.1
```

docker run -v

```shell
$ docker run -p 80:80 -v /data/platform/services/partner-match-backend:/usr/share/nginx/html -d partner-match-backend:v0.0.1
```


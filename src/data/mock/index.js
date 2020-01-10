const Mock = require("mockjs");
// 使用mockjs模拟数据
let dataList = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      name: "@FIRST",
      creatTime: "@datetime"
    }
  ]
});
//根据数据模板生成模拟数据
Mock.mock("/permission", "get", () => {
  return {
    status: 0,
    data: {
      name: '测试',
      code: 'test',
      permission: {
        page: {
          code: 'pagePermission',
          name: "页面权限",
          children: [
            {
              code: 'Index',
              name: "首页",
              children: [
                {
                  code: 'IndexIndex',
                  name: '首页',
                  children: [
                    {
                      code: 'IndexIndex_save',
                      name: '保存'
                    }
                  ]
                },
                {
                  code: 'IndexIndex2',
                  name: '首页2'
                }
              ]

            },
            {
              code: 'Datamanagement',
              name: "数据管理",
              children: [
                {
                  code: 'DatamanagementIndex',
                  name: '数据管理'
                },
                {
                  code: 'DatamanagementSet',
                  name: '数据设置'
                }
              ]
            },
            {
              code: 'Api',
              name: "API管理",
              children: [
                {
                  code: 'ApiIndex',
                  name: 'API管理'
                },
                {
                  code: 'ApiList',
                  name: 'API列表',
                  children: [
                    {
                      code: 'ApiListGet',
                      name: 'GET',
                      children: [
                        {
                          code: 'ApiListGet_save',
                          name: '保存'
                        }
                      ]
                    },
                    {
                      code: 'ApiListPost',
                      name: 'POST'
                    },
                    {
                      code: 'ApiListDetail',
                      name: '详情'
                    }
                  ]
                },
                {
                  code: 'ApiSet',
                  name: 'API设置'
                }
              ]
            },
            {
              code:'Setting',
              name:'设置',
              children:[
                {
                  code:'SettingGoodsList',
                  name:'系统'
                }
              ]
            }
          ]
        },
        api: {
          code: 'apiPermission',
          name: "接口权限",
          children: []
        }
      }
    },
    message: "成功"
  };
});

Mock.mock("/user/menu", "get", () => {
  return {
    status: 0,
    data: dataList,
    message: "成功"
  };
});
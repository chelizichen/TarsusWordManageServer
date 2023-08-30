module.exports = {
    server: {
        project: "@TarsusWord/WebManageServer -l node -t @tarsus/http -h 127.0.0.1 -p 14001",
        servant:[
            "@TarsusWord/WordNodeServer -l node -t @tarsus/ms -h 127.0.0.1 -p 14002 -w 10",
            '@TarsusWord/UserServer -l node -t @tarsus/ms -h 127.0.0.1 -p 14003 -w 10',
            '@TarsusWord/RecordServer -l java -t @tarsus/ms -h 127.0.0.1 -p 14004 -w 10'
        ],
        database: {
            default: true,
            type: "mysql",
            host: "localhost",
            username: "root",
            password: "123456",
            database: "test_db", //所用数据库
            port: 3306,
            connectionLimit: 10,
        },
        proxy:"http://localhost:14001/proxy/invoke"
    },
    web: {
        // 用于定义webpack的输出路径
        publicPath: '/wordcenter/',

        // 打包的定义
        appName: "Tarsus",
        serverName: "WordManageServer",
        proxy: {
            '/api': {
                target: 'http://localhost:3411/api', // 你要请求的目标接口地址
                changeOrigin: true, // 改变请求的源
                pathRewrite: {
                    '^/api': '', // 将URL中的/api路径替换为空字符串
                },
                headers: {
                    'Access-Control-Allow-Origin': '*', // 添加此行
                },
            }
        },
        clientChain: function (chain) {
            chain.output.filename("bundle.js").end();
            chain.module
                .rule('taro')
                .test(/\.taro$/)
                .use('tarsus-loader')
                .loader('tarsus-loader')
                .options({
                    http: '@/utils/axios',
                });

        },
        serverChain: function (chain) {

        }
    },
};

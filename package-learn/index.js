// 客户端
import /** 自定义的名字 */ http from /** 包的名字*/ 'axios'


// 1.请求方法(get, post, put, delete)
http.get(/** 2.请求的路径(看服务端)*/ 'http://localhost:8080/user', /** 请求的配置 */{
    // 3.请求头部字段(看服务端)
    headers: {
        rxc: 'rxc'
    }
}).then(res => console.log(res.data))

// url 传递需要注意的问题
// 协议 + :// + 域名(主机ip地址) + 端口号 + 资源相对路径 
// http://localhost:80/user
const username = 'rxc'
const password = '123456'

async function main() {
    const result = await http.get(`http://localhost:8080/user`, {
        headers: {
            rxc: 'rxc'
        },
        query: {
            password,
            username
        }
    })
    console.log(result.data)
}

main()
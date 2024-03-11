

# 📦 Fiber

Fiber 表示开始创建实例的 fiber 包

## New

此方法创建一个新的 **App** 命名实例。您可以在创建新实例时传递可选的[设置](https://github.com/gofiber/docs/blob/master/api/app.md#settings)

**签名：**

```go
func New(config ...Config) *App
```

**示例：**

```go
// 默认配置
app := fiber.New()

// ...
```

## Config

在创建新 Fiber 实例时，可以传递可选配置

**示例：**

```go
//自定义配置
app := fiber.New(fiber.Config{
    Prefork:       true,
    CaseSensitive: true,
    StrictRouting: true,
    ServerHeader:  "Fiber",
    AppName: "Test App v1.0.1"
})

// ...
```

**配置字段**

| 属性                                              | 类型            | 描述                                                         | 默认值                |
| :------------------------------------------------ | :-------------- | :----------------------------------------------------------- | :-------------------- |
| Prefork (预处理)                                  | `bool`          | 允许使用 [`SO_REUSEPORT`](https://lwn.net/Articles/542629/)套接字选项。这将产生多个 Go 进程，监听同一端口。了解有关[套接字切分](https://www.nginx.com/blog/socket-sharding-nginx-release-1-9-1/)的详细信息**注意：如果启用，应用程序将需要通过 shell 运行，因为预工作模式设置环境变量。如果您使用的是 Docker，请确保应用程序使用 `CMD ./app` 或 `CMD ["sh", "-c", "/app"]`。有关更多信息，请参见**[**此**](https://github.com/gofiber/fiber/issues/1021#issuecomment-730537971)**发表意见。** | `false`               |
| ServerHeader (服务器头)                           | `string`        | 使用给定值启用`服务器` HTTP 头。                             | `""`                  |
| StrictRouting (严格路由)                          | `bool`          | 启用时，路由器将 `/foo` 和 `/foo/` 视为不同。否则，路由器将 `/Foo` 和 `/foo/` 视为相同 | `false`               |
| CaseSensitive (区分大小写)                        | `bool`          | 启用时，`/Foo` 和 `/Foo` 是不同的路由。禁用时，`/Foo` 和 `/foo` 视为相同 | `false`               |
| Immutable (不可变)                                | `bool`          | 启用时，上下文方法返回的所有值都是不可变的。默认情况下，它们在您从处理程序返回之前是有效的；见第[#185](https://github.com/gofiber/fiber/issues/185) 期. | `false`               |
| UnescapePath (未解除路径)                         | `bool`          | 在设置上下文路径之前将路由中的所有编码字符转换回，以便路由也可以使用 URL 编码的特殊字符 | `false`               |
| ETag（E 标签）                                    | `bool`          | 启用或禁用 ETag 头生成，因为弱 ETag 和强 ETag 都是使用相同的哈希方法 (CRC-32) 生成的。弱 ETag 是启用时的默认值 | `false`               |
| BodyLimit（Body 限制）                            | `int`           | 设置请求正文允许的最大大小，如果大小超过配置的限制，则发送 `413 - Request Entity Too Large` 响应 | `4*1024*1024`         |
| Concurrency（并发）                               | `int`           | 最大并发连接数。                                             | `256*1024`            |
| Views（视图）                                     | `Views`         | 视图是包装渲染功能的界面。有关支持的引擎，请参阅我们的**模板中间件** | `nil`                 |
| ReadTimeout（读取时间）                           | `time.Duration` | 允许读取完整请求 (包括正文) 的时间量。默认超时是无限制的     | `nil`                 |
| WriteTimeout（写入时间）                          | `time.Duration` | 响应超时写入之前的最大持续时间。默认超时是无限制的           | `nil`                 |
| IdleTimeout（闲置时间）                           | `time.Duration` | 启用保持活动状态时等待下一个请求的最长时间。如果 IdleTimeout 为零，则使用 ReadTimeout 的值 | `nil`                 |
| ReadBufferSize（读取缓冲大小）                    | `int`           | 每个请求读取的连接缓冲区大小。这也限制了最大标题大小。如果您的客户端发送多 KB 请求 URI 和 / 或多 KB 标头 (例如，大 cookie)，请增加此缓冲区 | `4096`                |
| WriteBufferSize （写入缓冲大小）                  | `int`           | 响应写入的每个连接缓冲区大小。                               | `4096`                |
| CompressedFileSuffix （压缩文件后缀）             | `string`        | 为原始文件名添加后缀，并尝试以新文件名保存生成的压缩文件。   | `".fiber.gz"`         |
| ProxyHeader（代理头）                             | `string`        | 这将使 `c.IP()` 能够返回给定标头键的值。默认情况下，`c.IP()` 将从 TCP 连接返回远程 IP，如果您在负载平衡器后面，例如 **X-Forwarded-**，则此属性可能很有用 | `""`                  |
| GETOnly （仅限 GET）                              | `bool`          | 如果设置为 true，则拒绝所有非 GET 请求。对于仅接受 GET 请求的服务器，此选项作为防 DoS 保护非常有用。如果设置了 GETOnly，则请求大小受 ReadBufferSize 限制 | `false`               |
| ErrorHandler（错误请求头）                        | `ErrorHandler`  | 当 fiber 返回错误时，执行 ErrorHandler。处理程序。安装的 fiber 错误处理程序由顶级应用程序保留，并应用于前缀相关请求 | `DefaultErrorHandler` |
| DisableKeepalive（关闭连接）                      | `bool`          | 禁用保持活动连接，服务器将在向客户端发送第一个响应后关闭传入连接 | `false`               |
| DisableDefaultDate （关闭默认时间）               | `bool`          | 当设置为 true 时，将导致从响应中排除默认日期头。             | `false`               |
| DisableDefaultContentType（关闭默认内容类型）     | `bool`          | 设置为 true 时，将导致从响应中排除默认内容类型标题。         | `false`               |
| DisableHeaderNormalizing（关闭头正常化）          | `bool`          | 默认情况下，所有标题名称都是标准化的：内容类型 -> 内容类型   | `false`               |
| DisableStartupMessage（关闭启动信息)              | `bool`          | 设置为 true 时，它不会打印调试信息                           | `false`               |
| AppName (应用名)                                  | `string`        | 这允许为应用设置应用名称                                     | `""`                  |
| EnableTrustedProxyCheck（启用可信任代理检查）     | `bool`          | 设置为 true 时，fiber 将使用 TrustedProxy 列表检查代理是否受信任。默认情况下，`c.Protocol()` 将从 X-Forwarded-Proto、X-Forwarded-Protocol、X-Forwarded-Ssl 或 X-Url-Scheme 头获取值，`c.IP()` 将从代理头获取值，`c.Hostname()` 将从 X-Forwarded-Host 头获取值。如果 `EnableTrustedProxyCheck` 为 true，并且 `RemoteIP` 在受信任代理的列表中 `c.Protocol()`，`c.IP()` 和 `c.Hostname()` 将在禁用受信任代理时具有相同的行为，如果 `RemoteIP` 不在列表中，`c.Protocol()` 将在应用程序处理 tls 连接时返回 https，否则，`c.IP()` 将从 fasthttp 上下文返回 RemoteIP () ，`c.Hostname()` 将返回 `fasthttp.Request.URI().Host()` | `false`               |
| TrustedProxies（可信任代理）                      | `[]string`      | 包含受信任代理 IP 的列表。请查看`启用受信任代理检查`文档。它可以采用 IP 或 IP 范围地址。如果它得到 IP 范围，它将迭代所有可能的地址 | `[]string*__*`        |
| DisablePrepareSMultipartForm （关闭复合文件表单） | `bool`          | 如果设置为 true，则不会预解析多部分表单数据。此选项对于希望将多部分表单数据视为二进制 blob 或选择何时解析数据的服务器非常有用 | `false`               |
| StreamRequestBody（流媒体请求内容）               | `bool`          | StreamRequestBody 启用请求正文流，并在给定正文大于当前限制时更快调用处理程序。 | `false`               |

## NewError

NewError 使用可选消息创建一个新的 httperror 实例。

**签名：**

```go
func NewError(code int, message ...string) *Error
```

**示例：**

```go
app.Get("/", func(c *fiber.Ctx) error {
    return fiber.NewError(782, "Custom error message")
})
```

## IsChild

Ischild 确定当前进程是否是预处理的结果。

**签名：**

```go
func IsChild() bool
```

**示例：**

```go
//预处理将产生子进程
app := fiber.New(fiber.Config{
    Prefork: true,
})

if !fiber.IsChild() {
    fmt.Println("I'm the parent process")
} else {
    fmt.Println("I'm a child process")
}

// ...
```
```txt
valid 验证
Required 不为空，即各个类型要求不为其零值
Min(min int) 最小值，有效类型：int，其他类型都将不能通过验证
Max(max int) 最大值，有效类型：int，其他类型都将不能通过验证
Range(min, max int) 数值的范围，有效类型：int，他类型都将不能通过验证
MinSize(min int) 最小长度，有效类型：string slice，其他类型都将不能通过验证
MaxSize(max int) 最大长度，有效类型：string slice，其他类型都将不能通过验证
Length(length int) 指定长度，有效类型：string slice，其他类型都将不能通过验证
Alpha alpha字符，有效类型：string，其他类型都将不能通过验证
Numeric 数字，有效类型：string，其他类型都将不能通过验证
AlphaNumeric alpha 字符或数字，有效类型：string，其他类型都将不能通过验证
Match(pattern string) 正则匹配，有效类型：string，其他类型都将被转成字符串再匹配(fmt.Sprintf(“%v”, obj).Match)
AlphaDash alpha 字符或数字或横杠 -_，有效类型：string，其他类型都将不能通过验证
Email 邮箱格式，有效类型：string，其他类型都将不能通过验证
IP IP 格式，目前只支持 IPv4 格式验证，有效类型：string，其他类型都将不能通过验证
Base64 base64 编码，有效类型：string，其他类型都将不能通过验证
Mobile 手机号，有效类型：string，其他类型都将不能通过验证
Tel 固定电话号，有效类型：string，其他类型都将不能通过验证
Phone 手机号或固定电话号，有效类型：string，其他类型都将不能通过验证
ZipCode 邮政编码，有效类型：string，其他类型都将不能通过验证
```


# HTTP Protocol

Giao thức HTTP - Hypertext Transfer Protocol

## Mục Lục
- [Mô tả giao thức](#mô-tả-giao-thức) 
- [Cơ chế hoạt động](#cơ-chế-hoạt-động)
- [Giao thức HTTP](#giao-thức-http)
    - [Request method](#request-method)
    - [Response code](#response-code)
    - [Header and Security](#header-and-security)
    - [Access Control](#access-control)
    - [Authentication](#authentication)
    - [Cookies](#cookies)
- [HTTPS và Certification](#https-và-certification)
- [DEMO](#demo)

## Mô tả giao thức

`HTTP (Hypertext Transfer Protocol)` là một giao thức truyền nhận dữ liệu trên internet (`www - World Wide Web`), là phương thức trao đổi giữa `client` (máy khách) và `server` (máy chủ) 

## Cơ chế hoạt động

HTTP hoạt động bằng cách gửi các `requests` (yêu cầu) và nhận `responses` (phản hồi) giữa `Client` và `Server`. 

`Client` gửi một `requests` nào đó `HTTP` sẽ nhận `requests` này và gửi đến `Server`, `Server` tiếp nhận sau đó gửi lại 1 `responses` `HTTP` nhận `responses` cho `Client`


## Giao thức HTTP

### Request method

`GET` method - Dùng để truy xuất tài nguyên từ máy chủ.

Một `requests` sẽ thường bao gồm:
- URI (Uniform Resource Identifier) là chuỗi kí tự để xác định tên hoặc tài nguyên trên internet bao gồm: URL và URN
- Phiên bản HTTP
- Tiêu đề thường là các thông tin bổ sung như: loại yêu cầu, thời gian
- Nội dung bao gồm dữ liệu của yêu cầu gửi đến `server`

### Response code

Được trả về từ `server` cho `client` cho biết kết quả của `requests` gửi cho `server` xử lý

- Mã trạng thái : 
    - 200 OK
    - 400 Bad Request
    - 403 Forbidden
    - 404 Not Found
    - 500 Script Error

### Header and Security
#### Header
Header dùng để cung cấp thông tin bổ sung về yêu cầu hoặc thông báo phản hồi.

Tồn tại ở dạng: `name:value` và ở một dòng mới

Các loại `Header`

- `General headers`: Cung cấp thông tin: thời gian gửi.
- `Request headers`: Cung cấp thông tin bổ sung về `requests`: 
    - loại nội dung được yêu cầu
    - ngôn ngữ
- `Response headers`: Cung cấp thông tin bổ sung về phản hồi:
    - loại nội dung được gửi, 
    - thời gian phản hồi
- `Entity headers`: Cung cấp thông tin về nội dung thư:
    - loại nội dung
    - mã hóa nội dung 
    - độ dài nội dung.

#### Security
Bảo mật là một khía cạnh quan trọng của giao thức HTTP. Phương pháp bảo mật HTTP:

- `SSL/TLS`: Lớp cổng bảo mật (SSL) và Bảo mật lớp vận chuyển (TLS) là các giao thức mã hóa
- `HTTPS`: HTTP Secure là phiên bản HTTP sử dụng SSL/TLS.
- `HTTP Authentication`: Yêu cầu nhập `username` và `password` khi truy cập một số tài nguyên nhất định
- `HTTP Strict Transport Security (HSTS)`: Chính sách bảo mật yêu cầu máy khách sử dụng kết nối an toàn (chẳng hạn như HTTPS) khi giao tiếp với máy chủ.

### Access Control

Kiểm soát truy cập là quá trình kiểm soát quyền truy cập vào tài nguyên như: 
- trang web
- tệp hoặc cơ sở dữ liệu
Trong giao thức HTTP, kiểm soát truy cập thường được thực hiện bằng cách sử dụng [`Header`](#header) và [`response-code`](#response-code).

Cách để kiểm soát truy cập trong HTTP là sử dụng cơ chế `HTTP Authentication` - cung cấp `username` và `password` trước khi truy cập tài nguyên. Có một số phương pháp xác thực khác nhau có thể được sử dụng: 
- `Basic Authentication`
- `Digest Authentication`

Một cách khác để triển khai kiểm soát truy cập trong HTTP là sử dụng mã trạng thái `401` (Không được phép)
hoặc `403` (Bị cấm).

Cũng có thể triển khai kiểm soát truy cập bằng các tiêu đề HTTP chẳng hạn như tiêu đề `"Access-Control-Allow-Origin"`. Tiêu đề này có thể được sử dụng để chỉ định tên miền nào được phép truy cập tài nguyên hoặc cho phép bất kỳ tên miền nào truy cập tài nguyên.

### Authentication

Xác thực là quá trình xác minh danh tính của `user` hoặc `system`. Trong giao thức HTTP được sử dụng để đảm bảo rằng chỉ những `user` nào mới có thể truy cập tài nguyên.

Phương thức xác thực được sử dụng trong HTTP:

- `Basic Authentication`: Một phương thức xác thực đơn giản bằng `username` và `password` ở dạng được mã hóa trong tiêu đề yêu cầu. 
    - Phương pháp này dễ thực hiện nhưng không an toàn vì thông tin đăng nhập được mã hóa có thể dễ dàng giải mã.
- `Digest Authentication`: Một phương pháp xác thực an toàn hơn bằng việc gửi hàm băm của tên `username`, `password` và các thông tin khác trong tiêu đề yêu cầu. Phương pháp này an toàn hơn `Basic Authentication` vì thông tin xác thực không được gửi dưới dạng văn bản rõ ràng.
- `OAuth`: Một tiêu chuẩn mở về ủy quyền cho phép `user` cấp quyền truy cập vào tài nguyên của họ cho ứng dụng của bên thứ ba mà không cần chia sẻ thông tin đăng nhập của họ.
- `SAML`: Security Assertion Markup Language là một tiêu chuẩn để trao đổi dữ liệu xác thực và ủy quyền giữa các hệ thống.

### Cookies

Cookie - dữ liệu nhỏ được trình duyệt web lưu trữ trên máy tính của người dùng. Trong giao thức HTTP, cookie được sử dụng để lưu trữ thông tin về người dùng như:
- các tùy chọn
- lịch sử duyệt web
- trạng thái đăng nhập
- các dữ liệu khác.

Cookie được tạo bởi máy chủ và được gửi tới trình duyệt web của người dùng trong thông báo HTTP response.

## HTTPS và Certification

`HTTP Secure (HTTPS)` 
- là một phiên bản của giao thức `HTTP`. 
- sử dụng Lớp cổng bảo mật (`SSL`) hoặc Bảo mật lớp vận chuyển (`TLS`) để mã hóa dữ liệu được truyền giữa máy khách và máy chủ. 
- đảm bảo rằng dữ liệu được bảo vệ không chặn hoặc sửa đổi bởi bên thứ ba.

Thành phần chính của `HTTPS` là chứng chỉ `SSL/TLS` để xác minh danh tính của máy chủ và thiết lập kết nối an toàn giữa `client` và `server`.

Các loại chứng chỉ SSL/TLS trong HTTPS:

- Domain Validation (DV) certificates: Các chứng chỉ này được cấp dựa trên quyền sở hữu miền của máy chủ. Chúng cung cấp mã hóa cơ bản và phù hợp với các trang web đơn giản.
- Organization Validation (OV) certificates: Các chứng chỉ này được cấp sau khi cơ quan cấp chứng chỉ xác minh danh tính của tổ chức sở hữu miền. Chúng cung cấp mức độ bảo mật cao hơn và phù hợp với các trang web thương mại điện tử và các trang web khác xử lý dữ liệu nhạy cảm.
- Extended Validation (EV) certificates: Các chứng chỉ này được cấp sau khi cơ quan cấp chứng chỉ thực hiện xác minh kỹ lưỡng danh tính của tổ chức. Chúng cung cấp mức độ bảo mật cao nhất và thường được sử dụng bởi các ngân hàng, cơ quan chính phủ và các tổ chức bảo mật cao khác.

## Demo
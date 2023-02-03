# DNS

DNS (Domain Name System) dùng để dịch tên miền (ví dụ: www.google.com ) thành địa chỉ IP (ví dụ: 192.168.0.1) mà các máy tính sử dụng để liên lạc với nhau. Các chức năng chính của DNS là:

1. Name resolution: Dịch tên miền mà con người có thể đọc được thành địa chỉ IP.

2. Caching: Lưu trữ các tên miền đã tra cứu gần đây và địa chỉ IP tương ứng của chúng để tra cứu nhanh hơn trong tương lai.

3. Load balancing: Phân phối tải của các yêu cầu đến giữa nhiều máy chủ để đảm bảo sử dụng tài nguyên hiệu quả.

4. Security: Ngăn chặn các thay đổi trái phép đối với tên miền và địa chỉ IP, đồng thời cung cấp liên lạc an toàn giữa máy khách và máy chủ DNS.

# Luồng giao tiếp HTTPS hoàn chỉnh

Luồng dịch vụ web HTTPS hoàn chỉnh thường bao gồm các bước sau:

1. Client sends request: Trình duyệt web gửi yêu cầu đến máy chủ bằng HTTPS.

2. Server sends certificate: Máy chủ gửi chứng chỉ của nó cho máy khách(SSL, TLS).

3. Client verifies certificate: Máy khách kiểm tra xem chứng chỉ có hợp lệ không.

4. Create a secure connection: Máy khách và máy chủ sử dụng chứng chỉ để tạo kết nối an toàn.

5. Data is exchanged: Máy khách và máy chủ trao đổi dữ liệu an toàn qua kết nối an toàn.

6. Connection is closed: Khi quá trình trao đổi dữ liệu hoàn tất, kết nối bị đóng.

Quá trình này đảm bảo rằng thông tin nhạy cảm được bảo vệ khỏi bị chặn hoặc giả mạo trong quá trình truyền qua internet.

# Kiến trúc ứng dụng web

## Monolithic Architecture

Tất cả các thành phần của web app được tích hợp chung.

1. Single codebase: Tất cả mã cho ứng dụng web được lưu trữ trong một cơ sở mã duy nhất, giúp bảo trì và triển khai dễ dàng hơn.

2. Single Database: Tất cả dữ liệu cho ứng dụng web được lưu trữ trong một cơ sở dữ liệu duy nhất, cho phép quản lý dữ liệu hiệu quả.

3. Single deployment: Toàn bộ ứng dụng web được triển khai dưới dạng một đơn vị duy nhất, giúp dễ dàng triển khai và mở rộng quy mô.

4. Single process: Toàn bộ ứng dụng web chạy trong một quy trình duy nhất, giúp quản lý dễ dàng hơn.

Dùng cho các web vừa và nhỏ, việc update khi dùng kiến trúc này khó khăn hơn.

## Single Page Application

Single Page Application (SPA) là web trang HTML duy nhất, khi người dùng tương tác sẽ thay đổi thay vì tải nhiều trang. Trong kiến ​​trúc trang đơn, ứng dụng web:

1. Tải tất cả các tài nguyên cần thiết HTML, CSS, Js với một lần tải trang.

2. Cập nhật trang động bằng cách sử dụng JavaScript và API mà không cần tải lại trang.

3. Duy trì trạng thái ứng dụng trong bộ nhớ, cho phép trải nghiệm người dùng mượt mà và nhanh chóng.

4. Tối ưu hóa lưu lượng mạng bằng cách giảm số lượt truy cập khứ hồi đến máy chủ, dẫn đến các ứng dụng phản hồi nhanh hơn.

Kiến trúc một trang được sử dụng cho ứng dụng web hiện đại, tạo trải nghiệm nhanh cho người dùng, nhưng có thể tăng độ phức tạp và khó bảo trì.

## Micoservice

Microservice được xây dựng như một tập hợp các dịch vụ nhỏ, độc lập, có chức năng riêng biệt:

1. Mỗi dịch vụ chịu trách nhiệm về một khả năng cụ thể và hoạt động độc lập với các dịch vụ khác.

2. Các dịch vụ giao tiếp với nhau thông qua API.

3. Các dịch vụ có thể được phát triển và triển khai độc lập, cho phép chu kỳ phát triển và triển khai nhanh hơn.

4. Các dịch vụ có thể được mở rộng một cách độc lập, cải thiện việc sử dụng tài nguyên.

## Serverless

1. Frontend:  HTML, CSS và JavaScript, chạy trong trình duyệt của máy khách, giúp ứng dụng nhanh và nhạy.

2. Backend: chạy trên server

3. Thường sử dụng cloud để lưu trữ cloud sẽ cung cấp cơ sở hạ tầng


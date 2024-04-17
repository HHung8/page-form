import {z} from "zod";

// Định nghĩa 1 biến formSchema và gán nó một giá trị là một schema đối tượng được tạo bởi phương thức z.object()
export const formSchema = z.object({
    name: z.string().min(4), //Đây là một trường dữ liệu trong biểu mẫu, được đặt tên là "name". Nó được xác định là một chuỗi (string) sử dụng z.string(), và có yêu cầu ít nhất 4 ký tự (min(4)).
    description: z.string().optional(), //description" có thể không cần phải được điền vào trong biểu mẫu.
  });
  
export type formSchemaType = z.infer<typeof formSchema>;
  
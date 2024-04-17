// Định nghĩa 1 hàm idGenerator không có tham số đầu vào và trả về mội chuỗi
export function idGenerator():string { 
    // Math.random(): Hàm này trả về một số ngẫu nhiên từ 0 đến 1 (bao gồm 0 nhưng không bao gồm 1)
    // Mạth.floor(): Hàm này làm tròn số xuống đến số nguyên gần nhất
    // 10001 số ngẫu nhiên được nhận, giới hạn phạm vi từ 0 đến 1000
    return Math.floor(Math.random() * 10001).toString()
}
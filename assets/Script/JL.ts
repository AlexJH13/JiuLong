export namespace JL {

    function generateId(): string {
        const timestamp = Date.now().toString(36); // 将时间戳转换为基36字符串
        const randomPart = Math.random().toString(36).substring(2, 8); // 生成随机字符串
        return `${timestamp}-${randomPart}`; // 组合时间戳和随机字符串
    }
}

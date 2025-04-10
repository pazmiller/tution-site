// app/contact/page.tsx
export default function ContactPage()
{
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">联系我们</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 联系信息 */}
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-blue-600">联系方式</h2>
                    <p className="mb-2 text-gray-700">
                        <strong>地址:</strong> 123 Education Road, Knowledge City, Singapore 123456
                    </p>
                    <p className="mb-2 text-gray-700">
                        <strong>电话:</strong> <a href="tel:+6561234567" className="text-blue-600 hover:underline">+65 6123 4567</a>
                    </p>
                    <p className="mb-2 text-gray-700">
                        <strong>邮箱:</strong> <a href="mailto:jfbombb@gmail.com" className="text-blue-600 hover:underline">jfbombb@gmail.com</a>
                    </p>
                    <p className="text-gray-700">
                        <strong>办公时间:</strong> 周一至周五: 1pm - 9pm, 周六: 9am - 5pm
                    </p>
                    {/* 你可以在这里嵌入一个地图 */}
                    <div className="mt-4">
                        {/* 示例: 嵌入 Google Maps (需要替换成你的实际地图嵌入代码) */}
                        {/* <iframe src="YOUR_Maps_EMBED_URL" width="100%" height="300" style={{ border:0 }} allowFullScreen loading="lazy"></iframe> */}
                        <div className="bg-gray-300 h-60 flex items-center justify-center text-gray-500 rounded">
                            (地图嵌入位置)
                        </div>
                    </div>
                </div>

                {/* 简单联系表单 (可选，功能需要后端或第三方服务) */}
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-blue-600">发送消息给我们</h2>
                    <form action="#" method="POST"> {/* 表单提交需要额外处理 */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">消息</label>
                            <textarea id="message" name="message" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200 disabled:opacity-50">
                            发送
                        </button>
                        <p className="text-xs text-gray-500 mt-2">注意: 表单提交功能需要后端支持。</p>
                    </form>
                </div>
            </div>
        </div>
    );
}
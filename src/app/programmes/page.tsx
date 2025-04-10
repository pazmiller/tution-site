// app/programmes/page.tsx
export default function ProgrammesPage()
{
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">我们的课程</h1>
            <p className="mb-4 text-gray-700">
                我们提供覆盖各个年级和科目的多样化补习课程。
            </p>

            {/* 示例课程列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 课程卡片 1 */}
                <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">小学数学辅导</h2>
                    <p className="text-gray-600 text-sm">
                        针对 P1-P6 学生，巩固基础，提升解题能力。
                    </p>
                </div>

                {/* 课程卡片 2 */}
                <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">中学科学强化</h2>
                    <p className="text-gray-600 text-sm">
                        涵盖物理、化学、生物，紧贴 O-Level / N-Level 考纲。
                    </p>
                </div>

                {/* 课程卡片 3 */}
                <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
                    <h2 className="text-xl font-semibold mb-2 text-blue-600">英文写作提升</h2>
                    <p className="text-gray-600 text-sm">
                        提高语法、词汇量和写作技巧。
                    </p>
                </div>
                {/* 在这里添加更多课程... */}
            </div>
        </div>
    );
}
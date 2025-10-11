import React, { useState } from 'react';
import { ChevronDown, MapPin, Calendar, Car, Camera, Heart, Clock } from 'lucide-react';

export default function WeddingWireframe() {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        { id: 'hero', name: '封面區', icon: Heart },
        { id: 'story', name: '我們的故事', icon: Heart },
        { id: 'info', name: '婚禮資訊', icon: Calendar },
        { id: 'photos', name: '照片故事', icon: Camera },
        { id: 'countdown', name: '倒數計時', icon: Clock }
    ];

    return (
        <div className="w-full h-screen overflow-auto bg-gray-50">
            {/* Navigation Sidebar */}
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white rounded-full shadow-lg p-2">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveSection(index)}
                        className={`block w-3 h-3 rounded-full my-2 transition-all ${
                            activeSection === index ? 'bg-rose-400 scale-125' : 'bg-gray-300'
                        }`}
                        title={section.name}
                    />
                ))}
            </div>

            {/* Section Labels */}
            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
                <div className="text-sm text-gray-600 font-medium">
                    {sections[activeSection].name}
                </div>
            </div>

            {/* Main Content */}
            <div className="space-y-0">
                {/* 1. Hero Section */}
                <section className="h-screen relative border-b-4 border-gray-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                        <div className="text-center space-y-6 px-4">
                            <div className="border-4 border-dashed border-rose-300 rounded-lg p-12 bg-white/50">
                                <div className="text-sm text-gray-500 mb-2">[背景圖：婚紗照]</div>
                                <h1 className="text-4xl md:text-6xl font-bold text-rose-600 mb-4">
                                    璟翔 ✦ 妤庭
                                </h1>
                                <p className="text-2xl md:text-3xl text-gray-700 mb-2">
                                    We're Getting Married
                                </p>
                                <div className="text-xl text-gray-600 space-y-1">
                                    <p>2025.11.29</p>
                                    <p className="text-lg">花蓮遠雄悅來大飯店</p>
                                </div>
                            </div>
                            <div className="animate-bounce">
                                <ChevronDown className="w-8 h-8 mx-auto text-rose-400" />
                                <p className="text-sm text-gray-500 mt-2">滾動開始</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Our Story Section - Multiple Pages */}
                <section className="bg-gray-100 border-b-4 border-gray-300">
                    <div className="text-center py-8 bg-rose-50">
                        <h2 className="text-3xl font-bold text-rose-600">我們的故事</h2>
                        <p className="text-gray-500 mt-2">Story Section - 多頁式結構</p>
                    </div>

                    {/* Story Page 1 */}
                    <div className="h-screen relative border-t-2 border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                            <div className="max-w-2xl px-8">
                                <div className="border-4 border-dashed border-blue-300 rounded-lg p-8 bg-white/70">
                                    <div className="text-sm text-gray-400 mb-4">[照片 1：第一次見面]</div>
                                    <p className="text-2xl text-gray-700 leading-relaxed">
                                        「從第一次見面開始，<br />我們的故事就悄悄展開。」
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story Page 2 */}
                    <div className="h-screen relative border-t-2 border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                            <div className="max-w-2xl px-8">
                                <div className="border-4 border-dashed border-green-300 rounded-lg p-8 bg-white/70">
                                    <div className="text-sm text-gray-400 mb-4">[照片 2：日常生活]</div>
                                    <p className="text-2xl text-gray-700 leading-relaxed">
                                        「一起走過許多日常，<br />也走向了未來。」
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story Page 3 */}
                    <div className="h-screen relative border-t-2 border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                            <div className="max-w-2xl px-8">
                                <div className="border-4 border-dashed border-yellow-300 rounded-lg p-8 bg-white/70">
                                    <div className="text-sm text-gray-400 mb-4">[照片 3：求婚時刻]</div>
                                    <p className="text-2xl text-gray-700 leading-relaxed">
                                        「我們選擇攜手走一輩子，<br />也想邀你見證。」
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Wedding Info Section */}
                <section className="h-screen relative bg-white border-b-4 border-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="max-w-5xl w-full">
                            <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">婚禮資訊</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    <div className="border-2 border-rose-200 rounded-lg p-6 bg-rose-50">
                                        <div className="flex items-start gap-4">
                                            <Calendar className="w-6 h-6 text-rose-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">日期與時間</h3>
                                                <p className="text-gray-600">入席時間：17:30</p>
                                                <p className="text-gray-600">開席時間：18:00</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-2 border-rose-200 rounded-lg p-6 bg-rose-50">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-6 h-6 text-rose-500 mt-1" />
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg mb-2">婚宴地點</h3>
                                                <p className="text-gray-600 mb-3">花蓮遠雄悅來大飯店</p>
                                                <button className="px-4 py-2 bg-rose-500 text-white rounded-lg text-sm hover:bg-rose-600">
                                                    開啟地圖
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    <div className="border-2 border-rose-200 rounded-lg p-6 bg-rose-50">
                                        <div className="flex items-start gap-4">
                                            <Car className="w-6 h-6 text-rose-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">交通資訊</h3>
                                                <ul className="text-gray-600 space-y-1 text-sm">
                                                    <li>• 高鐵：花蓮站轉乘接駁車</li>
                                                    <li>• 火車：花蓮車站搭乘計程車</li>
                                                    <li>• 停車場：飯店提供免費停車</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-2 border-rose-200 rounded-lg p-6 bg-rose-50">
                                        <div className="flex items-start gap-4">
                                            <Heart className="w-6 h-6 text-rose-500 mt-1" />
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">建議著裝</h3>
                                                <p className="text-gray-600 text-sm">正式服裝或小禮服</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Photo Story Section */}
                <section className="bg-gray-100 border-b-4 border-gray-300">
                    <div className="text-center py-8 bg-purple-50">
                        <h2 className="text-3xl font-bold text-purple-600">照片故事</h2>
                        <p className="text-gray-500 mt-2">Photo Story Section - 翻頁式</p>
                    </div>

                    {/* Photo Page 1 */}
                    <div className="h-screen relative border-t-2 border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                            <div className="border-4 border-dashed border-white rounded-lg p-12 bg-white/30 max-w-3xl mx-4">
                                <div className="text-sm text-gray-500 mb-4">[全螢幕照片背景]</div>
                                <p className="text-3xl text-white font-medium text-center">
                                    「這些年，因為有你，<br />日常變得特別。」
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Photo Page 2 */}
                    <div className="h-screen relative border-t-2 border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center">
                            <div className="border-4 border-dashed border-white rounded-lg p-12 bg-white/30 max-w-3xl mx-4">
                                <div className="text-sm text-gray-500 mb-4">[全螢幕照片背景]</div>
                                <p className="text-3xl text-white font-medium text-center">
                                    「每一個小瞬間，<br />都是愛的紀念。」
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Photo Page 3 */}
                    <div className="h-screen relative border-t-2 border-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                            <div className="border-4 border-dashed border-white rounded-lg p-12 bg-white/30 max-w-3xl mx-4">
                                <div className="text-sm text-gray-500 mb-4">[全螢幕照片背景]</div>
                                <p className="text-3xl text-white font-medium text-center">
                                    「而今天，<br />故事翻開新的一頁。」
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Countdown Section */}
                <section className="h-screen relative bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-8">
                            <Clock className="w-20 h-20 mx-auto text-rose-500" />
                            <h2 className="text-3xl font-bold text-gray-700">距離我們的大日子</h2>
                            <div className="border-4 border-rose-300 rounded-2xl p-12 bg-white/80">
                                <div className="text-7xl font-bold text-rose-600 mb-4">52</div>
                                <div className="text-2xl text-gray-600">天</div>
                            </div>
                            <p className="text-gray-500 text-lg">期待與您相見</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Legend */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 text-sm">
                <p className="text-gray-600 mb-2 font-semibold">Wireframe 說明：</p>
                <ul className="text-gray-500 space-y-1">
                    <li>• 虛線框 = 圖片區域</li>
                    <li>• 漸層色 = 背景示意</li>
                    <li>• 每個區塊 = 全螢幕高度</li>
                    <li>• 左側圓點 = 導航指示</li>
                </ul>
            </div>
        </div>
    );
}
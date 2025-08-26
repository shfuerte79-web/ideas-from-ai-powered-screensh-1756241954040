export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    "title": "التطبيق الذكي لتحويل النصوص من الصور",
    "description": "تطبيق مخصص للهواتف الذكية يقوم بتحويل النصوص من الصور الملتقطة باستخدام كاميرا الهاتف إلى نصوص قابلة للتحرير.",
    "mvp_plan": "إنشاء واجهة مستخدم بسيطة باستخدام Flutter أو React Native، دمج مكتبة OCR مثل Tesseract، واختبار التطبيق مع مجموعة من الصور."
  },
  {
    "title": "أداة تحويل النصوص من لقطات الشاشة للمستندات",
    "description": "أداة ويب تتيح للمستخدمين تحميل لقطات الشاشة وتحويل النصوص الموجودة فيها إلى مستندات نصية أو PDF.",
    "mvp_plan": "تطوير واجهة ويب بسيطة باستخدام HTML وCSS وJavaScript، استخدام مكتبة OCR لتحويل النصوص، وتوفير خيار تحميل المستند الناتج."
  },
  {
    "title": "خدمة تحويل النصوص من الصور للبريد الإلكتروني",
    "description": "خدمة SaaS تتيح للمستخدمين إرسال الصور عبر البريد الإلكتروني وتحويل النصوص الموجودة فيها إلى نصوص قابلة للتحرير وإرسالها مرة أخرى عبر البريد.",
    "mvp_plan": "إنشاء خادم بسيط باستخدام Node.js، إعداد نظام استقبال البريد الإلكتروني، دمج مكتبة OCR، وإرسال النصوص المحولة عبر البريد الإلكتروني."
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}
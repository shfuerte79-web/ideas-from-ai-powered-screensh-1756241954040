import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Ideas from: AI-Powered Screenshot to Text`,
  description: ````json
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
````,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
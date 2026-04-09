import React from 'react';

export default function SemanticEngineAr({ cityName, serviceName, category }: { cityName: string, serviceName: string, category: string }) {
  
  const seed = (cityName.length * serviceName.length) % 5;
  
  const introMatrix = [
    `العمل في بيئة قاسية مثل ${cityName} يخلي تصليح وصيانة ${serviceName} مب مجرد تبديل قطع عادية. الموضوع يحتاج فحص هندسي دقيق لكل الأعطال المستخبية في التوصيلات والمكاين.`,
    `لما يصير عندك عطل قوي في التكييف داخل ${cityName}، مستحيل فني عادي يقدر يكشف السبب الرئيسي للمشكلة. عشان نضبط لك ${serviceName} بالطريقة الصح، لازم نعزل الخلل بالكامل من الكمبريسر للوحات التحكم.`,
    `الرطوبة الزايدة وحرارة الجو في ${cityName} تدمر أجزاء الماكينة بسرعة خيالية. فريقنا المعتمد حق ${serviceName} يقيس ضغط الكهرباء والغاز مباشرة عشان نمنع احتراق البورد الإلكتروني (PCB) بالكامل.`,
    `أي مشكلة تخص ${serviceName} في مناطق ${cityName} تعتبر تحدي هندسي بالنسبة لنا. ملوحة الجو تهاجم الأجزاء الكهربائية، ولذلك لازم نعزل الوايرات ونختبر الفولتية بكل دقة.`,
    `بمجرد ما نوصل موقعك في ${cityName}، تركيزنا يكون 100% على حل الجذور الأساسية لمشكلة ${serviceName}. إذا خلينا ليك يهرب غاز أو كمبريسر يطق، الماكينة بتودّع في عز الصيف.`
  ];

  const maintenanceMatrix = [
    `الخطوة 1: نضغط المكينة بغاز النيتروجين عشان نكشف أصغر الليكات. الخطوة 2: نعدل بلف التمدد (TXV) عشان يضبط لك البرودة المباشرة في جو ${cityName} المتقلب.`,
    `الخطوة الأولى: شفط كامل للفريون الملوث أو القطع الخربانة. الخطوة الثانية: استخدام أجهزة ضغط وحساسات دقيقة عشان نرجع كفاءة ${serviceName} مثل ما طلعت من الوكالة.`,
    `الفحص المبدئي: نقيس الكهرباء (3-phase) بالملتيميتر عشان نتأكد من التوزيع الصح. الفحص المتقدم: وزن ضغط الهواء والمراوح الأساسية.`,
    `بروتوكول البداية: فحص لوحات البورد الإلكتروني وتماشيها مع درجات الحرارة. بروتوكول التصليح: تفريغ الهواء (الفاكيوم) وتعبئة الغاز المعتمد لضمان قوة ${serviceName}.`,
    `المرحلة الفنية 1: نسوي حسبة كاملة لحمل التكييف على حسب حجم غرفتك في ${cityName}. المرحلة 2: نراقب قراءة الضغط مباشرة بعد ما نكمل تصليح ${serviceName} عشان نضمن برودة تثلج الصدر.`
  ];

  return (
    <div className="bg-white border dir-rtl text-right border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm my-16 prose prose-lg w-full max-w-none text-slate-700" style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}>
      <div className="border-b-4 border-primary pb-6 mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 mt-0 tracking-tight">التقرير الهندسي المفصل لخدمات {serviceName} في منطقة {cityName}</h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">تصنيف الوثيقة المعتمد: {category} // قطاع العمليات: {cityName}</p>
      </div>

      <p className="font-medium text-xl leading-relaxed text-slate-800">{introMatrix[seed]}</p>
      
      <p>
        التعقيد الكبير للأعطال الميكانيكية في البيوت والمجمعات تتطلب خبرة صجية ومو أي كلام. الترقيق السطحي والحلول الترقيعية دائماً تكبر المشكلة. لما نسوي {serviceName}، مهندسينا ياخذون في الحسبان درجة الملوحة العالية، تراكم الغبار، وذبذبات الكهربا الخاصة بمنطقتك في {cityName}. تجاهل هذي المعايير المهمة يأدي لخراب الكمبريسر واحتراق المكينة.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4 text-slate-800 border-r-4 border-primary pr-4">تحمل الضغط والحرارة القصوى في {cityName}</h3>
      <p>
        قبل ما أي فني يلمس المكينة ويبدأ شغل {serviceName}، لازم يكون فاهم بالضبط الوضع الهندسي للحرارة المحيطة. في جو {cityName}، المكيفات التجارية والمراوح تتعب بسرعة مع درجات الحرارة العالية في عز الصيف. لما قسم الهندسة يبتدي شغل {serviceName}، نعتمد على قراءات وأرقام حقيقية. نفحص السوبر هيت (Superheat) والسب-كولنج (Subcooling) مباشرة عند الكمبريسر. لو دورة التكييف ناقصة غاز حتى لو بنسبة 5%، المكينة بتسحب كهربا عالية وتصرف وايد، وبالنهاية الكمبريسر بيحترق وتقط فلوسك في الشارع.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4 text-slate-800 border-r-4 border-primary pr-4">الصيانة الكيميائية ونظام الغسيل المتطور</h3>
      <p>
        وايد ناس تتجاهل موضوع الهجمات الكيميائية اللي تصير داخل أجهزتهم يومياً. الغبار الجوّي العالي في {cityName} يختلط مع قطرات الماي داخل المكيف ويكوّن طين حمضي قوي. هالوسخ يسد فتحات المبخر (Evaporator) ويقلل كفاءة البرودة بشكل يخوف. أول خطوة لما نجي نسوي لك {serviceName} هي نفحص ثلاجة المكيف والبيبات من الصدأ. 
        لو في صدأ قوي، مجرد زيادة الغاز هو غش تجاري. الصيانة المطلوبة والضرورية حق {serviceName} تعتمد على تذويب هذا الطين باستخدام مواد كيميائية رغوية مخصصة ماتأكل النحاس. هذي المواد تنظف البيبات بالكامل وترجع المكيف قوي جنّه يديد، وهذا بالضبط اللي يميز شغلنا عن باقي السوق.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4 text-slate-800 border-r-4 border-primary pr-4">خطوات الصيانة الهندسية المعتمدة</h3>
      <p>أي عملية تصليح تخص {serviceName} لازم تتبع نظام قوي ما فيه مجال للخطأ أبداً. الفنيين البحرينيين والمعتمدين يمشون على هالخطط المخصصة حق فئة {category}:</p>
      
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 my-6">
         <ul className="space-y-4 m-0 list-none p-0">
           <li className="flex gap-4">
             <span className="font-bold text-primary">01.</span>
             <span><strong>فحص الكهرباء والتأمين المسبق:</strong> نفصل الكهربا الرئيسة بالكامل. نفحص الوايرات باستخدام أدوات الميجر (Megger) للتحقق من العوازل قبل ما نمد يدينا في شغل {serviceName} عشان نضمن أقصى معايير السلامة في بيوت {cityName}.</span>
           </li>
           <li className="flex gap-4">
             <span className="font-bold text-primary">02.</span>
             <span><strong>استخراج قراءات الأعطال الذكية:</strong> نقرأ سجلات وتواريخ خراب البورد اللوحة الأم لآخر 30 يوم من تشغيل الجهاز في {cityName}، عشان نمنع الأعطال الخفية من الرجوع مرة ثانية.</span>
           </li>
           <li className="flex gap-4">
             <span className="font-bold text-primary">03.</span>
             <span><strong>التدخل الفني المتخصص:</strong> {maintenanceMatrix[(seed + 1) % 5]}</span>
           </li>
           <li className="flex gap-4">
             <span className="font-bold text-primary">04.</span>
             <span><strong>عمل الفاكيوم (سحب الهواء):</strong> لو فيها نظام تبريد وغاز، نسحب كل الهواء والرطوبة من المكيف لما بعد الفاكيوم. هالطريقة تزيل رطوبة الجو اللي لو اختلطت مع الغاز تسوي أحماض تدمر الكمبريسر من الداخل.</span>
           </li>
         </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-8 my-12">
         <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">برمجة أجهزة دايكن، ال جي، وسامسونج</h3>
            <p className="text-base text-slate-600">كل شركة تختلف في تركيبة مكيفاتها عن الثانية. نظام التحكم حق أجهزة دايكن المركزية غير تماما عن تكييف ال جي أو سامسونج. إمكانيتنا في {serviceName} تشمل قراءة كودات الأعطال حق جميع الشركات وبشكل كامل. أجهزتنا تسحب كود العطل مباشرة وتوفر حل دقيق وفوري، وهذا اللي محتاجينه بيوت {cityName}.</p>
         </div>
         <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-800">حماية من أملاح وتآكل الجو المحيط</h3>
            <p className="text-base text-slate-600">لازم تتخيل كمية الملوحة والرطوبة القوية في منطقتك خصوصاً {cityName}. الأجهزة مثل {category} تتعرض لتآكل قوي. إحنا نعالج ذي المشكلة وقت تنفيذ {serviceName} عبر استخدام بخاخات عازلة وأصباغ مانعة للصدأ وموثوقة من الشركات الأم عشان الجهاز يعيش معاك العمر الطويل.</p>
         </div>
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-800 border-b border-slate-200 pb-2">كيف نحسب تكلفة تصليح وصيانة {serviceName}</h3>
      <p>عشان نكون واضحين معاك، شغلنا مافيه لف ودوران في الأسعار. كل شي واضح ومبني على ثلاثة أمور رئيسية حق تحديد تكلفة {serviceName} الفنية المضمونة:</p>
      
      <table className="w-full text-right bg-white border border-slate-200 rounded-xl overflow-hidden my-6 text-sm md:text-base">
        <thead className="bg-slate-100 text-slate-800">
          <tr>
             <th className="p-4 font-bold border-b border-slate-200">الأمر والمعيار</th>
             <th className="p-4 font-bold border-b border-slate-200">الشرح الفني الدقيق</th>
             <th className="p-4 font-bold border-b border-slate-200">الاستقرار المالي</th>
          </tr>
        </thead>
        <tbody className="text-slate-600">
          <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <td className="p-4 font-bold">قطع الغيار المعتمدة الأصيلية</td>
            <td className="p-4">هذي القطع الأساسية (مثل المكثفات، لوحات التحكم البورد، الكمبريسر الأصلية). نستخدم وكالات معتمدة ومضمونة حق تقديم {serviceName}.</td>
            <td className="p-4">متفاوت (يعتمد على ماركة وتصنيف الجهاز نفسة)</td>
          </tr>
          <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <td className="p-4 font-bold">حجم وتعب التدخل الهندي</td>
            <td className="p-4">يعتمد على مكان المكيف، مثلاً تصليح {serviceName} لمكيف موجود في السطح أصعب ويحتاج معدلات رفع، مقارنة بمكيف أرضي يسهل الوصول له.</td>
            <td className="p-4">يحسب بناء على الجهد والأمان الهندسي بالموقع</td>
          </tr>
          <tr className="hover:bg-slate-50 transition-colors">
            <td className="p-4 font-bold">أضرار جانبية خفية أخرى</td>
            <td className="p-4">هل احتراق قطعة وحدة سبّب خراب قطعة ثانية؟ يعني لو موتر مروحة احترق، ممكن ياخذ وياه البورد الإلكتروني بالكامل.</td>
            <td className="p-4">يتم التأكد منه في موقعك عبر قراءة الميكرومتر بدقة</td>
          </tr>
        </tbody>
      </table>

      <p className="font-bold text-lg mt-8 text-primary">
        نكرر ونأكد: إحنا ما نعطي تسعيرة وهمية على العمياني بالتلفون. لازم نتحقق ونسحب القراءات الواقعية من جهازك داخل موقعك في {cityName} قبل ما نعطيك التقرير النهائي. تقدر تفتح محادثة واتساب معانا من الزر الموجود فوق وحياك الله بأي وقت. 
      </p>

    </div>
  );
}

import React from "react";

const questions = [
  [
    {
      id: "Q00",
      question: "؟Champions League شكون  ا لمنظم ديال",
      content: [
        { id: "0", value: "UEFA" },
        { id: "1", value: "FIFA" },
        { id: "2", value: "Fédération Française de football" },
        { id: "3", value: "bundesliga" },
      ],
      correct: 0,
    },
    {
      id: "Q01",
      question: "؟CAN 2021 شكون الفائز ف",
      content: [
        { id: "0", value: "مصر" },
        { id: "1", value: "الجزائر" },
        { id: "2", value: "السنغال" },
        { id: "3", value: "الكامرون" },
      ],
      correct: 2,
    },
    {
      id: "Q02",
      question: "فين غادي يتلعب كأس العالم 2022 ؟ ",
      content: [
        { id: "0", value: "أستراليا" },
        { id: "1", value: "روسيا" },
        { id: "2", value: "قطر" },
        { id: "3", value: "إنجلترا" },
      ],
      correct: 2,
    },
    {
      id: "Q03",
      question: "؟ballon d'or شكون اللاعب لي فاز بأكبر عدد من الكرات الذهبية ",
      content: [
        { id: "0", value: "Christiano Ronaldo" },
        { id: "1", value: "Lionel Messi" },
        { id: "2", value: "Neymar junior" },
        { id: "3", value: "Ronaldinho" },
      ],
      correct: 1,
    },
  ],
  [
    {
      id: "Q10",
      question: " شكون الفريق العالمي لي كيلعب معاه حاليا، أشرف حكيمي؟ ",
      content: [
        { id: "0", value: "باري سان جرمان" },
        { id: "1", value: "برشلونة" },
        { id: "2", value: "ليفربول" },
        { id: "3", value: "مانشستر سيتي" },
      ],
      correct: 0,
    },
    {
      id: "Q11",
      question: "شحال من مرة المغرب ستضاف كأس الامم الإفريقية ؟ ",
      content: [
        { id: "0", value: "ما عمرها ما تلاعبات فا لمغرب" },
        { id: "1", value: "مرة واحدة " },
        { id: "2", value: "2 مرات" },
        { id: "3", value: "3 مرات" },
      ],
      correct: 1,
    },
    {
      id: "Q12",

      question: (
        <>
          <span> شكون هو الهداف الفرنسي الثالث بالنسبة ليك من غير</span>
          <br />
          <span>؟</span>
          <span>Karim Benzema, Thierry Henri</span>
        </>
      ),

      content: [
        { id: "0", value: "Lionel Messi" },
        { id: "1", value: "Mohammed Salah" },
        { id: "2", value: "Kilyan Mbappé" },
        { id: "3", value: "David Trezeguet" },
      ],
      correct: 2,
    },
    {
      id: "Q13",
      question:
        "؟Champions League  شكون ا لمدرب لي الفرقة ديالو لعبات أكبر عدد من",

      content: [
        { id: "0", value: "Ancelotti" },
        { id: "1", value: "Murinho" },
        { id: "2", value: "Zidane" },
        { id: "3", value: "Ferguson" },
      ],
      correct: 2,
    },
  ],
  [
    {
      id: "Q20",
      question: (
        <div>
          <span> شكون لي فاز بالبطولة الوطنية</span>
          <span> 2021-2020 </span>
          <span>؟</span>
        </div>
      ),
      content: [
        { id: "0", value: "الوداد البيضاوي" },
        { id: "1", value: "الجيش ا لملكي" },
        { id: "2", value: "الرجاء البيضاوي" },
        { id: "3", value: "نهضة بركان" },
      ],
      correct: 0,
    },
    {
      id: "Q21",
      question: (
        <div>
          <span> شكون الفرقة لي فازت بأكبر عدد من لقب كأس العالم</span>
          <span>؟</span>
        </div>
      ),
      content: [
        { id: "0", value: "برازيل" },
        { id: "1", value: "فرنسا" },
        { id: "2", value: "إيطاليا" },
        { id: "3", value: "ارجنتين" },
      ],
      correct: 0,
    },
    {
      id: "Q22",
      question: (
        <div>
          <span>
            {" "}
            <span>أكثر عدد من ا لمرات</span> <span>؟</span>
          </span>

          <span> Champions league</span>
          <span> شكون الفريق لي ربح</span>
        </div>
      ),
      content: [
        { id: "0", value: "باري سان جرمان" },
        { id: "1", value: "برشلونة" },
        { id: "2", value: "مانشستر يونايتد" },
        { id: "3", value: "ريال مدريد" },
      ],
      correct: 3,
    },
    {
      id: "Q23",
      question: "فأشمن بلد كاين تمتال أبو الهول؟",
      content: [
        { id: "0", value: "مصر" },
        { id: "1", value: "السنغال" },
        { id: "2", value: "اليمن" },
        { id: "3", value: "إثيوبيا" },
      ],
      correct: 3,
    },
  ],
  [
    {
      id: "Q30",
      question: (
        <div>
          <div>شحال ديال الفرقات كيتأهلوا باش يلعبوا</div>
          <span>؟</span>
          <span> Champions league</span>
        </div>
      ),
      content: [
        { id: "0", value: "12" },
        { id: "1", value: "16" },
        { id: "2", value: "24" },
        { id: "3", value: "32" },
      ],
      correct: 3,
    },
    {
      id: "Q31",
      question: (
        <div>
          <span> شحال من مرة ا لمغرب تأهل لكأس العالم</span>
          <span>؟</span>
        </div>
      ),
      content: [
        { id: "0", value: "2 مرات" },
        { id: "1", value: "3 مرات" },
        { id: "2", value: "4 مرات" },
        { id: "3", value: "5 مرات" },
      ],
      correct: 3,
    },
    {
      id: "Q32",
      question: (
        <div>
          <div>شكون أول لاعب مغربي فاز بالكرة الذهبية الافريقية</div>
          <span>؟</span>
          <span>Ballon d&apos;or </span>
        </div>
      ),
      content: [
        { id: "0", value: "مصطفى حجي" },
        { id: "1", value: "التيمومي" },
        { id: "2", value: "العربي بنمبارك" },
        { id: "3", value: "فرس" },
      ],
      correct: 3,
    },
    {
      id: "Q33",
      question: (
        <div>
          <div> شكون أول واحد دار بنالتي بطريقة</div>
          <span>؟</span>
          <span> Panenka</span>
        </div>
      ),
      content: [
        { id: "0", value: "انطونان بانيني" },
        { id: "1", value: "انطونان بانينكا" },
        { id: "2", value: "جورج بانينكا" },
        { id: "3", value: "جورج وايا" },
      ],
      correct: 1,
    },
  ],
  [
    {
      id: "Q40",
      question:
        "...كمل ا لمثل الشعبي ا لمغربي التالي : ' إلا ما جاتش بالقلم، تجي ب",
      content: [
        { id: "0", value: "لأفكار" },
        { id: "1", value: "العالم" },
        { id: "2", value: "القدم" },
        { id: "3", value: "الفهامة" },
      ],
      correct: 2,
    },
    {
      id: "Q41",
      question: "...كمل ا لمثل الشعبي ا لمغربي التالي : ' لي زرع الشوك تيحير ف",
      content: [
        { id: "0", value: "فمنامو" },
        { id: "1", value: "فحصادو" },
        { id: "2", value: "فكلامو" },
        { id: "3", value: "فحبابو" },
      ],
      correct: 1,
    },
    {
      id: "Q42",
      question:
        "...كمل ا لمثل الشعبي ا لمغربي التالي : ' لي عضو الحنش، كيخاف من",
      content: [
        { id: "0", value: "الحبل" },
        { id: "1", value: "القنب" },
        { id: "2", value: "الكلب" },
        { id: "3", value: "اللفعة" },
      ],
      correct: 0,
    },
    {
      id: "Q43",
      question: "شنو هي الحاجة لي تاكل ما تشبع ؟ ",
      content: [
        { id: "0", value: "لانسان" },
        { id: "1", value: "الدجاجة" },
        { id: "2", value: "العافية" },
        { id: "3", value: "البرد" },
      ],
      correct: 2,
    },
  ],
  [
    {
      id: "Q50",
      question: "حاجيتكم علا لي لحمو رخيص ودمو غالي ؟",
      content: [
        { id: "0", value: "الزيت" },
        { id: "1", value: "الطجين" },
        { id: "2", value: "الزيتون" },
        { id: "3", value: "الحوت" },
      ],
      correct: 2,
    },
    {
      id: "Q51",
      question: "شنو هي الحاجة لي كتبكي بلا عينين ؟",
      content: [
        { id: "0", value: "البصلة" },
        { id: "1", value: "السحابة" },
        { id: "2", value: "الطفل الصغير" },
        { id: "3", value: "الروبيني" },
      ],
      correct: 0,
    },
    {
      id: "Q52",
      question:
        "مدينتنا حمراء، سوارها خضراء، سكانها عبيد، و سوارتها من الحديد ؟",
      content: [
        { id: "0", value: "البطيخة" },
        { id: "1", value: "الدلاحة" },
        { id: "2", value: "الليمونة" },
        { id: "3", value: "التفاحة" },
      ],
      correct: 0,
    },
    {
      id: "Q53",
      question: "حاجيتكم قدو قد الفلوس ويتذبح من زوج ريوس ؟",
      content: [
        { id: "0", value: "الشهدية" },
        { id: "1", value: "الهندية" },
        { id: "2", value: "الجوز" },
        { id: "3", value: "لموز" },
      ],
      correct: 0,
    },
  ],
  [
    {
      id: "Q60",
      question: "ديما كتوصل حذا الجامع و كتحشم دخل؟",
      content: [
        { id: "0", value: "قميجة" },
        { id: "1", value: "القطة" },
        { id: "2", value: "القفة" },
        { id: "3", value: "البلغة" },
      ],
      correct: 3,
    },
    {
      id: "Q61",
      question: "حاجيتك ماجيتك على لي عندو ا لأسنان و ما كيعضش ؟",
      content: [
        { id: "0", value: "الكلب" },
        { id: "1", value: "لمشطة" },
        { id: "2", value: "النبات" },
        { id: "3", value: "الحصان" },
      ],
      correct: 0,
    },
    {
      id: "Q62",
      question: "حاجيتكم على لي يدخل للسوق راسو لتحت و رجليه للفوق من 4 حروف",
      content: [
        { id: "0", value: "خضرة" },
        { id: "1", value: "عشوب" },
        { id: "2", value: "حيوان" },
        { id: "3", value: "حليب" },
      ],
      correct: 0,
    },
    {
      id: "Q63",
      question: "حاجيتكم على كثير العيون قليل النظر رزقو قدامة وهو ميت بالشر ؟",
      content: [
        { id: "0", value: "الغربال" },
        { id: "1", value: "لمعلقة" },
        { id: "2", value: "الغراف" },
        { id: "3", value: "الكاس" },
      ],
      correct: 0,
    },
  ],
  [
    {
      id: "Q70",
      question:
        "حاجيتكم على طفل وطفلة راحو يصلحو بين اثنين الطفلة خرجت والطفل حصل مسكييييين ؟",
      content: [
        { id: "0", value: "الكاس و القرعة" },
        { id: "1", value: "الورقة و ستيلو" },
        { id: "2", value: "ا لابرة و الخيط" },
        { id: "3", value: "ا لمش و الفار" },
      ],
      correct: 2,
    },
    {
      id: "Q71",
      question: "قدها قد الدبزة و فايتة السلطان في اللبسة ؟",
      content: [
        { id: "0", value: "الخص" },
        { id: "1", value: "البصلة" },
        { id: "2", value: "الخرشف" },
        { id: "3", value: "الكرم" },
      ],
      correct: 1,
    },
    {
      id: "Q72",
      question:
        "حاجيتكم ما جيتكم على لي مبدي بالنون والنون ولد لغزال يغلب النسا والرجال ويهبط الطيورمن فوق الجبال؟ ",
      content: [
        { id: "0", value: "الناس" },
        { id: "1", value: "النعاس" },
        { id: "2", value: "النعناع" },
        { id: "3", value: "النمل" },
      ],
      correct: 1,
    },
    {
      id: "Q73",
      question: (
        <div>
          <span>؟</span>
          <span> 2016</span>
          <span> شنو سميت ا لممثل و ا لممثلة لي لعبوا فسلسلة لكوبل ف </span>
        </div>
      ),
      content: [
        { id: "0", value: "الجم و نزهة الركراكي" },
        { id: "1", value: "دنيا بوطازوت و حسن الفد" },
        { id: "2", value: "سعيد الناصري و فاتن" },
        { id: "3", value: "رشيد رفيق و مها" },
      ],
      correct: 1,
    },
  ],
  [
    {
      id: "Q80",
      question:
        " شنو سميت العداء ا لمغربي لي عندو الرقم القياسي 2 مرات فسباق 1000 متر ؟ ",
      content: [
        { id: "0", value: "هشام الكروج" },
        { id: "1", value: "خالد السكاح" },
        { id: "2", value: "سعيد عويطة" },
        { id: "3", value: "محمد البقالي" },
      ],
      correct: 0,
    },
    {
      id: "Q81",
      question: "شنو سميت أول رئيس أمريكي من أصول إفريقية ؟ ",
      content: [
        { id: "0", value: "باراك أداما" },
        { id: "1", value: "باراك اوباما" },
        { id: "2", value: "ابراهام لنكولن" },
        { id: "3", value: "دونالد ترامب" },
      ],
      correct: 1,
    },
    {
      id: "Q82",
      question: "شنو سميت أشهر محقق في تاريخ إنجلترا ؟ ",
      content: [
        { id: "0", value: "ا لمحقق كونان" },
        { id: "1", value: "ا لمحقق شارلوك هولمز" },
        { id: "2", value: "ا لمحقق كولومبو" },
        { id: "3", value: "ا لمحقق هرقل بوارو" },
      ],
      correct: 1,
    },
    {
      id: "Q83",
      question: "من هو أشهر رحالة مغريي؟ ",
      content: [
        { id: "0", value: "إبن بطوطة" },
        { id: "1", value: "لمقدسي" },
        { id: "2", value: "الدريسي" },
        { id: "3", value: "إبن حوقل" },
      ],
      correct: 0,
    },
  ],
  [
    {
      id: "Q90",
      question: "شنو سميت البطل ا لمغربي في رياضة البوكس؟",
      content: [
        { id: "0", value: "أنس آيت العبدية" },
        { id: "1", value: "صلاح الدين مرواني" },
        { id: "2", value: "بدر هاري" },
        { id: "3", value: "السعيد عبد الواش" },
      ],
      correct: 2,
    },
    {
      id: "Q91",
      question: "شكون النجم ا لمغربي البارز فعالم الفكاهة؟",
      content: [
        { id: "0", value: "هاشم البسطاوي" },
        { id: "1", value: "جمال دبوز" },
        { id: "2", value: "محمد خيي" },
        { id: "3", value: "عزيز حطاب" },
      ],
      correct: 1,
    },
    {
      id: "Q92",
      question: "شنو هي أكبر قمة جبلية في المغرب ؟",
      content: [
        { id: "0", value: "جبل توبقال" },
        { id: "1", value: "جبل عياشي" },
        { id: "2", value: "جبل امجون" },
        { id: "3", value: "جبل األبطال" },
      ],
      correct: 0,
    },
    {
      id: "Q93",
      question: "فوقاش كانت البداية ديال الفرقة ا لموسيقية ناس الغيون ؟",
      content: [
        { id: "0", value: "1960" },
        { id: "1", value: "1970" },
        { id: "2", value: "1980" },
        { id: "3", value: "1990" },
      ],
      correct: 1,
    },
  ],
  [
    {
      id: "Q100",
      question:
        "شنو ا لإسم ديال الشخصية لي قامت بدور البطولة فالسلسلة الشهيرة حديدان؟",
      content: [
        { id: "0", value: "صامد غيلان" },
        { id: "1", value: "عبد الجبار الوزير" },
        { id: "2", value: "عبد الرؤوف" },
        { id: "3", value: "كمال كاظمي" },
      ],
      correct: 3,
    },
    {
      id: "Q101",
      question: " شنوا إسم مقدمة برنامج الخيط ا لابيض؟ ",
      content: [
        { id: "0", value: "نسيمة الحر" },
        { id: "1", value: "نبيلة كيلاني" },
        { id: "2", value: "سناء زعيم" },
        { id: "3", value: "سميرة سيطايل" },
      ],
      correct: 0,
    },
    {
      id: "Q102",
      question: "شنو سميت ملكة إنجلترا ؟",
      content: [
        { id: "0", value: "كلوريا" },
        { id: "1", value: "إليزابيت" },
        { id: "2", value: "إليزا" },
        { id: "3", value: "لويزا" },
      ],
      correct: 1,
    },
    {
      id: "Q103",
      question: "شنو سميت الكاتب العا لمي ا لمعروف برواية الخبز الحافي ؟",
      content: [
        { id: "0", value: "الطاهر بنجلون" },
        { id: "1", value: "الطاهر بالفرياط" },
        { id: "2", value: "الطاهر جمي" },
        { id: "3", value: "الطاهر تمسماني" },
      ],
      correct: 0,
    },
  ],
  [
    {
      id: "Q110",
      question:
        " شنو سميت بطل العالم في الفنون القتالية ا لمختلطة، لي ا لأصل ديالو من داغستان ؟",
      content: [
        { id: "0", value: "حبيب نور ما غوميدوف" },
        { id: "1", value: "مايك طايزن" },
        { id: "2", value: "بروس لي" },
        { id: "3", value: "شوك نوريس" },
      ],
      correct: 0,
    },
    {
      id: "Q111",
      question: " شنو سميت مكتشف قارة أمريكا ؟",
      content: [
        { id: "0", value: "كريستوف كولومب" },
        { id: "1", value: "دومينيكو فسبوتشي" },
        { id: "2", value: "إبن بطوطة" },
        { id: "3", value: "الكمندار كوسطو" },
      ],
      correct: 0,
    },
    {
      id: "Q112",
      question: "فين كاين نهر األمازون ؟",
      content: [
        { id: "0", value: "كولومبيا" },
        { id: "1", value: "جزيرة هاواي" },
        { id: "2", value: "المكسيك" },
        { id: "3", value: "البرازيل" },
      ],
      correct: 3,
    },
    {
      id: "Q113",
      question: "شنو هو ا لأصل ديال غاندي ؟",
      content: [
        { id: "0", value: "مصري" },
        { id: "1", value: "سوداني" },
        { id: "2", value: "أمريكي" },
        { id: "3", value: "هندي" },
      ],
      correct: 3,
    },
  ],
  [
    {
      id: "Q120",
      question:
        "شنو سميت المعبر البحري الموجود في مصر و لي كيفرق ما بين البحر األبيض المتوسط و البحر األحمر ؟",
      content: [
        { id: "0", value: "قناة السويس" },
        { id: "1", value: "قناة بناما" },
        { id: "2", value: "tv قناة شوف" },
        { id: "3", value: "قناة القاهرة" },
      ],
      correct: 0,
    },
    {
      id: "Q121",
      question: "شنو الصناعة التقليدية لي معروفة بها مدينة فاس ؟",
      content: [
        { id: "0", value: "الفخار" },
        { id: "1", value: "الجلد" },
        { id: "2", value: "الزرابي" },
        { id: "3", value: "النحاس" },
      ],
      correct: 1,
    },
    {
      id: "Q122",
      question:
        "شنو سميت أشهر مغارة في المغرب و لي كطل على البحر األبيض المتوسط و األطلنتي في نفس الوقت ؟",
      content: [
        { id: "0", value: "مغارة طنجة" },
        { id: "1", value: "مغارة هرقل" },
        { id: "2", value: "المغارة الزرقاء" },
        { id: "3", value: "مغارة كونان" },
      ],
      correct: 1,
    },
    {
      id: "Q123",
      question: " شنو اللون لي كيمز مدينة شفشاون ؟",
      content: [
        { id: "0", value: "أخضر" },
        { id: "1", value: "أبيض" },
        { id: "2", value: "أحمر" },
        { id: "3", value: "أزرق" },
      ],
      correct: 3,
    },
  ],
  [
    {
      id: "Q130",
      question: "شنو هي ا لأكلة باش مشهورة مدينة مراكش ؟",
      content: [
        { id: "0", value: "الطنجية" },
        { id: "1", value: "البسطيلة" },
        { id: "2", value: "كسكس" },
        { id: "3", value: "الرفيسة" },
      ],
      correct: 0,
    },
    {
      id: "Q131",
      question: "فين كاينة صومعة حسان ؟",
      content: [
        { id: "0", value: "الدار البيضاء" },
        { id: "1", value: "طنجة" },
        { id: "2", value: "الرباط" },
        { id: "3", value: "فاس" },
      ],
      correct: 2,
    },
    {
      id: "Q132",
      question: "شنو هو أكبر ميناء في ا لمغرب ؟",
      content: [
        { id: "0", value: "Tanger Med" },
        { id: "1", value: "ميناء آسفي" },
        { id: "2", value: "ميناء أكادير" },
        { id: "3", value: "ميناء الدار البيضاء" },
      ],
      correct: 0,
    },
    {
      id: "Q133",
      question: "شنو هي ا لمدينة السياحية ا لمغربية ا لمشهورة فالعالم ؟",
      content: [
        { id: "0", value: "مراكش" },
        { id: "1", value: "طنجة" },
        { id: "2", value: "الداخلة" },
        { id: "3", value: "أكادير" },
      ],
      correct: 0,
    },
  ],
  [
    {
      id: "Q140",
      question: "شنو أكبر مسجد فا لمغرب ؟",
      content: [
        { id: "0", value: "الحسن الثاني" },
        { id: "1", value: "الكتبية" },
        { id: "2", value: "القروين" },
        { id: "3", value: "حسان" },
      ],
      correct: 0,
    },
    {
      id: "Q141",
      question: "اشنو هي الرياضة باش مشهورة مدينة الداخلة ؟",
      content: [
        { id: "0", value: "Surf" },
        { id: "1", value: "كرة السلة" },
        { id: "2", value: "Kitesurf" },
        { id: "3", value: "سباق السيارات" },
      ],
      correct: 2,
    },
    {
      id: "Q142",
      question: "شنو الفولكلور لي معروفة بيه مدن الجنوب ؟",
      content: [
        { id: "0", value: "أحواش" },
        { id: "1", value: "أحيدوس" },
        { id: "2", value: "عبيدة الرمة" },
        { id: "3", value: "الركادة" },
      ],
      correct: 0,
    },
    {
      id: "Q143",
      question: " شنو هو اللباس التقليدي لي مشهورة بيه مدينة تطوان ؟",
      content: [
        { id: "0", value: "لملحف" },
        { id: "1", value: "الجلابة" },
        { id: "2", value: "الشاشية و ا لمنديل" },
        { id: "3", value: "الحايك" },
      ],
      correct: 2,
    },
  ],
];
export default questions;

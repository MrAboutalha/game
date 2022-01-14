/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import { QuizPage } from "./components/NewGame/QuizPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

export function App() {
  //  Object 'questions' holds all questions
  const questions = [
    //  one
    [
      {
        id: "Q00",
        question: "من هو المسئول عن تنظيم بطولات كأس العالم",
        content: [
          { id: "0", value: "الاتحاد الدولي لكرة القدم (فيفا)" },
          { id: "1", value: "الاتحاد الافريقى لكرة القدم" },
          { id: "2", value: "الاتحاد الاسيوي لكرة القدم" },
          { id: "3", value: "الاتحاد الاوروبي لكرة القدم" },
        ],
        correct: 0,
      },
      {
        id: "Q01",
        question: "من هو رئيس الفيفا ؟ ",
        content: [
          { id: "0", value: "جواو هافيلانج" },
          { id: "1", value: "جياني إنفانتينو" },
          { id: "2", value: "جوزيف بلاتر" },
          { id: "3", value: "عيسى حياتو" },
        ],
        correct: 1,
      },
      {
        id: "Q02",
        question: "كم سنة تفصل بين كل بطولتين متتاليتين لكأس العالم",
        content: [
          { id: "0", value: "4" },
          { id: "1", value: "5" },
          { id: "2", value: "3" },
          { id: "3", value: "2" },
        ],
        correct: 0,
      },
      {
        id: "Q03",
        question: "من سجل أشهر من سجل هدف بيده ؟",
        content: [
          { id: "0", value: "تشابي ألونسو" },
          { id: "1", value: "خاسينتو كينكوسيس" },
          { id: "2", value: "دييجو مارادونا " },
          { id: "3", value: "غاريث بي" },
        ],
        correct: 2,
      },
    ],
    //  two
    [
      {
        id: "Q10",
        question: "من هي أول دولة فازت بلقب كأس العالم ثلاث مرات ؟",
        content: [
          { id: "0", value: "ألمانيا" },
          { id: "1", value: "الأوروغواي" },
          { id: "2", value: "إيطاليا" },
          { id: "3", value: "البرازيل" },
        ],
        correct: 3,
      },
      {
        id: "Q11",
        question: "ما هي الدولة صاحبة أكبر عدد من الألقاب في كأس العالم ؟",
        content: [
          { id: "0", value: "الأوروغواي" },
          { id: "1", value: "البرازيل " },
          { id: "2", value: "ألمانيا" },
          { id: "3", value: "جنوب أفريقيا" },
        ],
        correct: 1,
      },
      {
        id: "Q12",
        question: "ما هي أول دولة أفريقية تستضيف نهائيات كأس العالم ؟",
        content: [
          { id: "0", value: "جنوب أفريقيا" },
          { id: "1", value: "تونس" },
          { id: "2", value: "مصر" },
          { id: "3", value: "المغرب" },
        ],
        correct: 0,
      },
      {
        id: "Q13",
        question: "ما هو المنتخب الذي فاز بنهائي كأس العالم 2006 ؟",
        content: [
          { id: "0", value: "المنتخب الويلزي" },
          { id: "1", value: "المنتخب الإيطالي" },
          { id: "2", value: "المنتخب الاسباني" },
          { id: "3", value: "المنتخب البلجيكي" },
        ],
        correct: 1,
      },
    ],
    //  three
    [
      {
        id: "Q20",
        question:
          "ما هو المنتخب الأفريقي الذي وجه الصدمة للمنتخب الفرنسي حامل اللقب في المباراة الافتتاحية لمونديال 2002 ؟",
        content: [
          { id: "0", value: "المنتخب السنغالي" },
          { id: "1", value: "المنتخب المالي" },
          { id: "2", value: "المنتخب المغربي" },
          { id: "3", value: "المنتخب المصري" },
        ],
        correct: 0,
      },
      {
        id: "Q21",
        question: "من هو هداف كأس العالم على مدار تاريخ البطولة ؟",
        content: [
          { id: "0", value: "البرازيلي رونالدو " },
          { id: "1", value: "البرتغالي رونالدو " },
          { id: "2", value: "الأرجنتيني ميسي" },
          { id: "3", value: "الفرنسي ريبيري" },
        ],
        correct: 0,
      },
      {
        id: "Q22",
        question:
          "ما هي الدولة التي خاضت أكبر عدد من المباريات في كأس العالم دون أن تفوز في أي منها ؟",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "بوليفيا" },
        ],
        correct: 3,
      },
      {
        id: "Q23",
        question:
          "في أي عام أصبح مسموحا باستبدال اللاعبين خلال مباريات كأس العالم ؟",
        content: [
          { id: "0", value: "1980" },
          { id: "1", value: "1970" },
          { id: "2", value: "1972" },
          { id: "3", value: "1975" },
        ],
        correct: 2,
      },
    ],
    //  four
    [
      {
        id: "Q30",
        question:
          "لاعبان فقط نجحا في هز الشباك في أربع بطولات لكأس العالم. فمن هما ؟",
        content: [
          { id: "0", value: "الفرنسي ريبيري و  الأرجنتيني ميسي" },
          { id: "1", value: " البرازيلي رونالدو والألماني توماس مولر" },
          { id: "2", value: "الفرنسي ريبيري و  الاسباني أندريه أنييستا " },
          { id: "3", value: "البرازيلي بيليه والألماني أوفي سيلر" },
        ],
        correct: 3,
      },
      {
        id: "Q31",
        question:
          "من هو صاحب الرقم القياسي في عدد الأهداف التي يسجلها أي لاعب في مباراة واحدة بنهائيات كأس العالم ؟",
        content: [
          { id: "0", value: "الروسي أوليج سالينكو" },
          { id: "1", value: " الأرجنتيني ميسي " },
          { id: "2", value: "الفرنسي ريبيري" },
          { id: "3", value: "الكرواتي مودريتش" },
        ],
        correct: 0,
      },
      {
        id: "Q32",
        question:
          "ما هو المنتخب الذي استقبلت شباكه أكبر عدد من الأهداف في بطولة واحدة من بطولات كأس العالم ؟",
        content: [
          { id: "0", value: "كوريا الجنوبية" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "كوريا الشمالية" },
        ],
        correct: 0,
      },
      {
        id: "Q33",
        question:
          "متى بدأ استخدام اختبارات الكشف عن المنشطات في بطولات كأس العالم ؟",
        content: [
          { id: "0", value: "1966" },
          { id: "1", value: "1997" },
          { id: "2", value: "1962" },
          { id: "3", value: "1995" },
        ],
        correct: 0,
      },
    ],
    //  five-till-this-point
    [
      {
        id: "Q40",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q41",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q42",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q43",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  six
    [
      {
        id: "Q50",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q51",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q52",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q53",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  seven
    [
      {
        id: "Q60",
        question: "الدولة الأفريقية الوحيدة التي 0لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q61",
        question: "الهيتومتر هو قياس كمية الأم0طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q62",
        question: "أصعب لغات العالم هي لغة أهل إقل0يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q63",
        question: "كم عدد الساعات في اليوم0 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  eight
    [
      {
        id: "Q70",
        question: "الدولة الأفريقية الوحيدة التي 1لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q71",
        question: "الهيتومتر هو قياس كمية الأم01طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q72",
        question: "أصعب لغات العالم هي لغة أهل إقل01يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q73",
        question: "كم عدد الساعات في اليوم01 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  nine
    [
      {
        id: "Q80",
        question: "الدولة الأفريقية الوحيدة التي 12لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q81",
        question: "الهيتومتر هو قياس كمية الأم012طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q82",
        question: "أصعب لغات العالم هي لغة أهل إقل021يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q83",
        question: "كم عدد الساعات في اليوم012 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  ten
    [
      {
        id: "Q90",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q91",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q92",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q93",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  eleven
    [
      {
        id: "Q100",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q101",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q102",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q103",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  twelve
    [
      {
        id: "Q110",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q111",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q112",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q113",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  thirteen
    [
      {
        id: "Q120",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q121",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q122",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q123",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  fourteen
    [
      {
        id: "Q130",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q131",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q132",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q133",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
    //  fifteen
    [
      {
        id: "Q140",
        question: "الدولة الأفريقية الوحيدة التي 123لم تستعمر هي",
        content: [
          { id: "0", value: "بنين" },
          { id: "1", value: "ليبيريا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "أنغولا" },
        ],
        correct: 0,
      },
      {
        id: "Q141",
        question: "الهيتومتر هو قياس كمية الأم0132طار والأنيمومتر ",
        content: [
          { id: "0", value: "جهاز قياس سرعة الرياح" },
          { id: "1", value: "جهاز التوتر" },
          { id: "2", value: "جهاز قياس التيار" },
          { id: "3", value: "جهاز قياس المقاومة" },
        ],
        correct: 0,
      },
      {
        id: "Q142",
        question: "أصعب لغات العالم هي لغة أهل إقل0231يم الباسك في",
        content: [
          { id: "0", value: "أسبانيا" },
          { id: "1", value: "أوكرانيا" },
          { id: "2", value: "إريتريا" },
          { id: "3", value: "فرنسا" },
        ],
        correct: 0,
      },
      {
        id: "Q143",
        question: "كم عدد الساعات في اليوم0123 الواحد",
        content: [
          { id: "0", value: "22" },
          { id: "1", value: "23" },
          { id: "2", value: "12" },
          { id: "3", value: "24" },
        ],
        correct: 0,
      },
    ],
  ];
  //  object 'array' holds all levels and points
  let array = [
    { id: "l1", level: "1", points: "100" },
    { id: "l2", level: "2", points: "200" },
    { id: "l3", level: "3", points: "300" },
    { id: "l4", level: "4", points: "400" },
    { id: "l5", level: "5", points: "500" },
    { id: "l6", level: "6", points: "600" },
    { id: "l7", level: "7", points: "700" },
    { id: "l8", level: "8", points: "800" },
    { id: "l9", level: "9", points: "900" },
    { id: "l10", level: "10", points: "1000" },
    { id: "l11", level: "11", points: "1100" },
    { id: "l12", level: "12", points: "1200" },
    { id: "l13", level: "13", points: "1300" },
    { id: "l14", level: "14", points: "1400" },
    { id: "l15", level: "15", points: "1500" },
  ];
  array = array.reverse();
  // variables
  const [level, setLevel] = useState(0);
  const [key, setKey] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  // function to start the game
  const startPlayingHandler = () => {
    setIsPlaying(true);
  };

  //  function to move up to the next level
  const onSubmitLevelhandler = (previousLevel) => {
    setLevel(() => previousLevel + 1);
  };
  const onResetHandler = (previousLevel) => {
    setKey((value) => value + 1);
    setLevel(() => 0);
  };
  return (
    <>
      {!isPlaying && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-1  col-sm-1 col-md-1 nopadding col-lg-1 d-flex justify-content-start">
                <div className="container nopadding d-flex flex-column">
                  {" "}
                  <div className="row mb-auto  nopadding">
                    <img
                      src="assets/coinDown.png"
                      style={{
                        position: "relative",
                        left: "100%",
                        zIndex: "2",
                        top: "100%",
                        transform: "rotate(35deg)",
                      }}
                      alt="coinSideLeftUp"
                    />{" "}
                    <img
                      src="assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite"
                      style={{
                        position: "relative",
                        left: "100%",
                        top: "73%",
                        zIndex: "1",
                        filter: "blur(7px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                  <div className="row nopadding">
                    <img
                      src="assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite"
                      style={{
                        position: "relative",
                        left: "240%",
                        top: "-10%",
                        filter: "blur(5px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                    <img
                      src="assets/coin11.png"
                      style={{
                        width: "70%",
                        position: "relative",
                        top: "-51%",
                        left: "240%",
                        transform: "rotate(35deg)",
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                </div>
              </div>
              <div className="col-2 col-sm-2 col-md-2 nopadding col-lg-2 d-flex justify-content-end">
                <img
                  src="assets/glow.png"
                  className="animate__animated animate__pulse animate__infinite speedRalenti"
                  style={{
                    position: "relative",
                    left: "170%",
                    width: "120%",
                    height: "68%",
                    top: "49px",
                    filter: "blur(10px)",
                  }}
                  alt="coinSideLeftUp"
                />
                <img
                  src="assets/leftSide.png"
                  className="animate__animated animate__pulse animate__infinite  speedRalenti"
                  style={{
                    position: "relative",
                    left: "87%",
                    width: "88%",
                    height: "65%",
                    top: "16%",
                  }}
                  alt="leftSide"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-6 nopadding col-sm-4 col-lg-6 d-flex justify-content-center">
                <img
                  src="assets/shine.png"
                  className="animate__animated animate__rotateIn animate__infinite "
                  style={{
                    width: "15%",
                    height: "20%",
                    position: "relative",
                    zIndex: "3",
                    top: "29%",
                    left: "117%",
                    mixBlendMode: "lighten",
                  }}
                  alt="shineLogo
                  "
                />{" "}
                <img
                  src="assets/glow-bg.png"
                  className="animate__animated animate__fadeIn"
                  style={{
                    position: "relative",
                    width: "105%",
                    left: "27%",
                    height: "94%",
                  }}
                  alt="coinSideLeftUp"
                />
                <img
                  src="assets/logo1.png"
                  className="animate__animated animate__flip"
                  style={{
                    width: "70%",
                    height: "44%",
                    position: "relative",
                    top: "28%",
                    left: "-58%",
                  }}
                  alt="logo"
                />
              </div>
              <div className="col-2  col-sm-2 col-md-2 nopadding col-lg-2 d-flex justify-content-start">
                <img
                  src="assets/glow.png"
                  className="animate__animated animate__pulse animate__infinite speedRalenti"
                  style={{
                    position: "relative",
                    left: "-80%",
                    height: "70%",
                    width: "150%",
                    top: "10%",
                    filter: "blur(10px)",
                  }}
                  alt="coinSideLeftUp"
                />
                <img
                  src="assets/rightSide.png"
                  className="animate__animated animate__pulse animate__infinite speedRalenti"
                  style={{
                    position: "relative",
                    left: "-290%",
                    height: "75%",
                    top: "13%",
                    width: "150%",
                  }}
                  alt="rightSide"
                />
              </div>
              <div className="col-1  col-sm-1 col-md-1 nopadding col-lg-1 d-flex justify-content-start">
                <div className="container nopadding d-flex flex-column">
                  {" "}
                  <div className="row mb-auto  nopadding">
                    <img
                      src="assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite speedRalenti"
                      style={{
                        position: "relative",
                        left: "-144%",
                        height: "150%",
                        width: "150%",
                        top: "100%",
                        filter: "blur(5px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                    <img
                      className="animate__animated animate__pulse animate__infinite speedRalenti"
                      src="assets/coin11.png"
                      style={{
                        width: "70%",
                        position: "relative",
                        left: "-130%",
                        transform: "rotate(35deg)",
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                  <div className="row nopadding">
                    <img
                      src="assets/glow.png"
                      className="animate__animated animate__pulse animate__infinite speedRalenti"
                      style={{
                        position: "relative",
                        left: "-80%",
                        top: "30%",
                        zIndex: "2",
                        filter: "blur(8px)",
                      }}
                      alt="coinSideLeftUp"
                    />
                    <img
                      className="animate__animated animate__pulse animate__infinite speedRalenti"
                      src="assets/coin11.png"
                      style={{
                        top: "-24%",
                        position: "relative",
                        left: "-115%",
                        transform: "rotate(-15deg)",
                        zIndex: 1,
                      }}
                      alt="coinSideLeftUp"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 nopadding d-flex justify-content-center">
                <button
                  type="button"
                  onClick={startPlayingHandler}
                  className="btnStart animate__animated animate__fadeInDown"
                >
                  ابدأ اللعب
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
      {isPlaying && (
        <QuizPage
          recentLevel={level}
          suggestedQuestions={questions[level]}
          level={array}
          onSubmitLevel={onSubmitLevelhandler}
          key={key}
          onReset={onResetHandler}
        />
      )}
    </>
  );
}

export default App;

import logo from "./image/logo-color-vertical.png";
import bgTop from "./image/bg-top.png";
import bgBottom from "./image/bg-bottom.png";
import { useEffect, useState } from "react";
import "./styles/App.css";

const SatisfactionRating = ({
  value,
  onChange,
  questionArabic,
  questionEnglish,
}) => {
  const ratings = [
    {
      value: 1,
      arabicLabel: "غير راض جدًا",
      englishLabel: "Very Dissatisfied",
      path: "M18 46.625C22 35.125 37 35.125 41 46.625",
      color: "#FB4C4E",
    },
    {
      value: 2,
      arabicLabel: "غير راض",
      englishLabel: "Dissatisfied",
      path: "M18 43.1699C22.2598 36.2727 37.202 36.2789 41 43.1699",
      color: "#FCA520",
    },
    {
      value: 3,
      arabicLabel: "محايد",
      englishLabel: "Neutral",
      path: "M18 41.5C23.5 41.5 34.5 41.5 41 41.5",
      color: "#F5CA12",
    },
    {
      value: 4,
      arabicLabel: "راض",
      englishLabel: "Satisfied",
      path: "M18 38C22.2598 44.8972 37.202 44.891 41 38",
      color: "#70BF86",
    },
    {
      value: 5,
      arabicLabel: "راض جدًا",
      englishLabel: "Very Satisfied",
      path: "M18 38C22 49.5 37 49.5 41 38",
      color: "#1EA659",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between">
      <div className="flex flex-col font-semibold text-[#1c4892]">
        <p className="font-lama">{questionArabic}</p>
        <p className="font-bizmo">{questionEnglish}</p>
      </div>

      <div className="grid grid-cols-5 gap-4 items-center justify-evenly w-full lg:w-1/2">
        {ratings.map((rating) => (
          <div
            key={rating.value}
            className={`flex flex-col gap-4 items-center justify-between h-36 text-sm cursor-pointer transition-all duration-200 ${
              value === rating.value ? "transform scale-105" : ""
            }`}
            onClick={() => onChange(rating.value)}
          >
            {value === rating.value ? (
              <svg
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="29.5" cy="29.5" r="29.5" fill={rating.color} />
                <circle cx="19" cy="23" r="3" fill="black" />
                <circle cx="40" cy="23" r="3" fill="black" />
                <path d={rating.path} strokeLinecap="round" stroke="black" />
              </svg>
            ) : (
              <svg
                width="59"
                height="60"
                viewBox="0 0 59 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-200 stroke-black stroke-1"
              >
                <circle cx="29.5" cy="30" r="29" />
                <circle cx="19" cy="23.5" r="3" fill="black" />
                <circle cx="40" cy="23.5" r="3" fill="black" />
                <path d={rating.path} strokeLinecap="round" stroke="black" />
              </svg>
            )}

            <div className="flex flex-col items-center lg:text-base text-[0.7rem] justify-center">
              <p
                className="font-lama"
                style={{
                  color: value === rating.value ? rating.color : "black",
                }}
              >
                {rating.arabicLabel}
              </p>
              <p
                className="font-bizmo flex flex-col items-center justify-center"
                style={{
                  color: value === rating.value ? rating.color : "black",
                }}
              >
                {rating.englishLabel.includes("Very") ? (
                  <>
                    <span>Very</span>
                    <span>{rating.englishLabel.replace("Very ", "")}</span>
                  </>
                ) : (
                  rating.englishLabel
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Step 1: Personal Information
const Step1 = ({ formData, setFormData, validateEmail, validatePhone }) => {
  const isEmailValid = !formData.email || validateEmail(formData.email);
  const isPhoneValid = !formData.phone || validatePhone(formData.phone);

  return (
    <section className="flex flex-col gap-4 py-12 lg:px-12 px-4">
      <div className="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-0 gap-2">
        <div className="flex flex-col font-semibold text-[#1c4892]">
          <p className="font-lama">الاسم كامل</p>
          <p className="font-bizmo">Full Name</p>
        </div>
        <input
          type="text"
          className="p-4 outline-none border border-[#cccccc] h-full lg:w-1/2 rounded-2xl bg-white"
          placeholder="الاسم الكامل"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          required
        />
      </div>
      <div className="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-0 gap-2">
        <div className="flex flex-col font-semibold text-[#1c4892]">
          <p className="font-lama">البريد الالكتروني</p>
          <p className="font-bizmo">Email Address</p>
        </div>
        <div className="lg:w-1/2 w-full">
          <input
            type="email"
            className={`p-4 outline-none border ${
              isEmailValid ? "border-[#cccccc]" : "border-red-500"
            } h-full w-full rounded-2xl bg-white`}
            placeholder="example@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          {!isEmailValid && formData.email && (
            <p className="text-red-500 text-sm mt-1 font-bizmo">
              Please enter a valid email address
            </p>
          )}
        </div>
      </div>
      <div className="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-0 gap-2">
        <div className="flex flex-col font-semibold text-[#1c4892]">
          <p className="font-lama">رقم الهاتف</p>
          <p className="font-bizmo">Phone Number</p>
        </div>
        <div className="lg:w-1/2 w-full">
          <input
            type="text"
            className={`p-4 outline-none border ${
              isPhoneValid ? "border-[#cccccc]" : "border-red-500"
            } h-full w-full rounded-2xl bg-white`}
            placeholder="0512345678"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
          {!isPhoneValid && formData.phone && (
            <p className="text-red-500 text-sm mt-1 font-bizmo">
              Phone must start with 05 and be 10 digits long
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

// Step 2: Employee Evaluation
const Step2 = ({ formData, setFormData }) => {
  const questions = [
    {
      key: "employeeQ1",
      arabic: "استقبال الموظف للعميل والترحيب به",
      english: "Customer meet and greet",
    },
    {
      key: "employeeQ2",
      arabic: "سلوك الموظف وطريقة تعامله مع العميل",
      english: "Employee Behavior and how he deals with customer",
    },
    {
      key: "employeeQ3",
      arabic: "الوقت الذي استغرقه الموظف في إنجاز الخدمة",
      english: "Time the employee spent completing the service",
    },
    {
      key: "employeeQ4",
      arabic: "قدرة الموظف على الإجابة على جميع الاستفسارات",
      english: "Employee's ability to answer all inquiries",
    },
    {
      key: "employeeQ5",
      arabic: "حرص الموظف على خدمة العميل",
      english: "The employee's keenness to serve the customer",
    },
  ];

  return (
    <section className="flex flex-col gap-12 py-12 lg:px-12 px-4">
      {questions.map((question) => (
        <SatisfactionRating
          key={question.key}
          value={formData[question.key]}
          onChange={(value) =>
            setFormData({ ...formData, [question.key]: value })
          }
          questionArabic={question.arabic}
          questionEnglish={question.english}
        />
      ))}
    </section>
  );
};

// Step 3: Service Evaluation
const Step3 = ({ formData, setFormData }) => {
  const questions = [
    {
      key: "serviceQ1",
      arabic: "وسيلة الوصول لتقديم الخدمة",
      english: "The channel to apply for the service",
    },
    {
      key: "serviceQ2",
      arabic: "سرعة انجاز الخدمة",
      english: "The speed of provided service",
    },
    {
      key: "serviceQ3",
      arabic: "جودة الخدمة المقدمة",
      english: "The quality of provided service",
    },
    {
      key: "serviceQ4",
      arabic: "استلام الخدمة في الموعد المحدد",
      english: "Completing service in the required time",
    },
    {
      key: "serviceQ5",
      arabic: "مدى تلبية الخدمة لتوقعاتك",
      english: "Did the service meet your expectations",
    },
    {
      key: "serviceQ6",
      arabic: "مستوى الخدمة المقدمة بشكل عام",
      english: "The level of provided service in general",
    },
  ];

  return (
    <section className="flex flex-col gap-12 py-12 lg:px-12 px-4">
      {questions.map((question) => (
        <SatisfactionRating
          key={question.key}
          value={formData[question.key]}
          onChange={(value) =>
            setFormData({ ...formData, [question.key]: value })
          }
          questionArabic={question.arabic}
          questionEnglish={question.english}
        />
      ))}
    </section>
  );
};

// Step 4: App and recommendation
const Step4 = ({ formData, setFormData }) => {
  return (
    <section className="flex flex-col gap-4 py-12 lg:px-12 px-4">
      <div className="flex flex-col font-semibold text-lg text-[#1c4892]">
        <p className="font-lama">
          بالنظر الى تجربتك الكاملة معنا, ما مدى احتمال أن توصي بنا لصديق أو
          زميل؟
        </p>
        <p className="font-bizmo" dir="ltr">
          How likely would you be to recommend our services to a friend or
          colleague?
        </p>
      </div>
      <div className="grid grid-cols-11 lg:gap-2 gap-0.5">
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            className={`lg:text-xl font-lama font-bold flex items-center justify-center p-3 ${
              index === 0
                ? "rounded-r-2xl"
                : index === 10
                ? "rounded-l-2xl"
                : ""
            } ${
              formData.recommendation === index
                ? "bg-[#b68f63] text-white"
                : "bg-[#F1F1F1] hover:bg-[#cccccc]"
            } transition-all duration-300 ease-in-out cursor-pointer`}
            onClick={() => setFormData({ ...formData, recommendation: index })}
          >
            <p>{index}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-between lg:text-base text-xs">
        <div className="flex flex-col font-medium">
          <p className="font-lama">من المستبعد جدًا</p>
          <p className="font-bizmo">Least likely to recommend</p>
        </div>
        <div className="flex flex-col font-medium" dir="ltr">
          <p className="font-lama">من المرجح جدًا</p>
          <p className="font-bizmo">Most likely to recommend</p>
        </div>
      </div>
      <div className="flex flex-col font-semibold text-lg text-[#b68f63] pt-8">
        <p className="font-lama">
          هل لديك أي اقتراح أو شكوى ترغب بتقديمها؟ رجاء قم بذكرها
        </p>
        <p className="font-bizmo" dir="ltr">
          Do you have any suggestion or complaint? Please list it down
        </p>
      </div>
      <textarea
        className="p-4 outline-none border border-[#cccccc] resize-none h-96 rounded-2xl bg-white"
        placeholder="اكتب اقتراحك أو شكواك هنا..."
        value={formData.App}
        onChange={(e) => setFormData({ ...formData, App: e.target.value })}
      ></textarea>
    </section>
  );
};

// Step 5: Thank You
const Step5 = () => {
  return (
    <section className="flex flex-col gap-8 py-12 lg:px-12 px-4 items-center justify-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
        <svg
          className="w-12 h-12 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-4 font-medium text-center text-lg">
        <p className="flex flex-col font-lama">
          <span>شكرًا لمشاركتك!</span>
          <span>نقدر وقتك وملاحظاتك التي تساعدنا على تحسين</span>
          <span>خدماتنا والارتقاء بتجربتك.</span>
        </p>
        <p className="flex flex-col font-bizmo" dir="ltr">
          <span>Thank you for your App!</span>
          <span>We truly appreciate your time and input, which help us</span>
          <span>improve our services and enhance your experience.</span>
        </p>
      </div>
    </section>
  );
};

const ProgressIndicator = ({ currentStep }) => {
  const steps = [
    {
      number: 1,
      arabicLabel: "المعلومات الشخصية",
      englishLabel: "Information",
    },
    { number: 2, arabicLabel: "الموظف", englishLabel: "Employee" },
    { number: 3, arabicLabel: "الخدمة", englishLabel: "Service" },
    { number: 4, arabicLabel: "ملاحظات", englishLabel: "App" },
  ];

  return (
    <section className="relative py-4">
      <div className="w-full h-1 bg-gradient-to-l from-[#1c4892] to-[#a6bbdb] absolute lg:top-1/4 top-1/2 -z-10"></div>
      <nav className="flex flex-col gap-2 z-50">
        <section className="flex w-full items-center justify-between lg:px-32 px-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div
                className={`${
                  currentStep >= step.number
                    ? "bg-gradient-to-br from-[#b68f63] to-[#8b6f47]"
                    : "bg-gradient-to-br from-[#cccccc] to-white"
                } rounded-full flex items-center justify-center px-6 py-3 text-white font-bold text-2xl transition-all duration-300`}
              >
                <p>{step.number}</p>
              </div>
              <div className="lg:flex flex-col items-center justify-center font-semibold hidden">
                <p className="text-[#b68f63] font-lama">{step.arabicLabel}</p>
                <p className="text-[#1c4892] font-bizmo">{step.englishLabel}</p>
              </div>
            </div>
          ))}
        </section>
      </nav>
    </section>
  );
};

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    employeeQ1: null,
    employeeQ2: null,
    employeeQ3: null,
    employeeQ4: null,
    employeeQ5: null,
    serviceQ1: null,
    serviceQ2: null,
    serviceQ3: null,
    serviceQ4: null,
    serviceQ5: null,
    serviceQ6: null,
    recommendation: null,
    App: "",
  });

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblkvard";

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^05\d{8}$/;
    return phoneRegex.test(phone);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.fullName &&
          formData.email &&
          formData.phone &&
          validateEmail(formData.email) &&
          validatePhone(formData.phone)
        );
      case 2:
        return (
          formData.employeeQ1 &&
          formData.employeeQ2 &&
          formData.employeeQ3 &&
          formData.employeeQ4 &&
          formData.employeeQ5
        );
      case 3:
        return (
          formData.serviceQ1 &&
          formData.serviceQ2 &&
          formData.serviceQ3 &&
          formData.serviceQ4 &&
          formData.serviceQ5 &&
          formData.serviceQ6
        );
      case 4:
        return formData.recommendation !== null;
      default:
        return true;
    }
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submissionDate: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setCurrentStep(5);
      } else {
        const errorText = await response.text();
        console.error("Form submission failed:", response.status, errorText);
        alert("حدث خطأ في إرسال النموذج. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("حدث خطأ في إرسال النموذج. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      employeeQ1: null,
      employeeQ2: null,
      employeeQ3: null,
      employeeQ4: null,
      employeeQ5: null,
      serviceQ1: null,
      serviceQ2: null,
      serviceQ3: null,
      serviceQ4: null,
      serviceQ5: null,
      serviceQ6: null,
      recommendation: null,
      App: "",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            validateEmail={validateEmail}
            validatePhone={validatePhone}
          />
        );
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} />;
      case 5:
        return <Step5 />;
      default:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            validateEmail={validateEmail}
            validatePhone={validatePhone}
          />
        );
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <main className="flex flex-col gap-2 py-4 relative font-lama min-h-screen">
      <img src={bgTop} alt="Background" className="absolute top-0 -z-10" />
      <img
        src={bgBottom}
        alt="Background"
        className="absolute bottom-0 left-0 -z-10"
      />
      {/* Header */}
      <nav className="flex lg:flex-row flex-col-reverse items-center justify-between lg:px-12 px-4 relative">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#b68f63] text-4xl font-bold font-lama">
            استقصاء رضا العميل
          </h1>
          <h2 className="text-[#1c4892] text-2xl font-bizmo font-medium">
            CUSTOMER SATISFACTION SURVEY
          </h2>
        </div>

        <a
          href="https://rajhibuild.com/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="company logo"
            loading="lazy"
            className="lg:h-40 h-32"
          />
        </a>
      </nav>

      <header className="flex lg:flex-row flex-col lg:gap-0 gap-2 items-center justify-between lg:px-12 px-4 text-xl font-medium">
        <p className="font-lama lg:w-72">
          نحرص على رضاك، ساعدنا على تحسين خدماتنا من خلال تقييم تجربتك.
        </p>
        <p dir="ltr" className="font-bizmo lg:w-96">
          We care about your satisfaction. Help us improve our services by
          sharing your experience.
        </p>
      </header>

      {/* Progress Indicator */}
      {currentStep <= 4 && <ProgressIndicator currentStep={currentStep} />}

      {/* Form Steps */}
      {renderStep()}

      {/* Navigation Buttons */}
      {currentStep <= 4 && (
        <nav
          className={`w-full flex items-center ${
            currentStep === 1 ? "justify-center" : "justify-evenly"
          } py-8`}
        >
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="z-10 w-fit rounded-[14px] bg-gradient-to-r from-[#1c4892] to-[#b68f63] cursor-pointer hover:opacity-90 transition-all duration-300 ease-in-out"
            >
              <span className="h-full w-full px-9 py-3 rounded-[14px] border border-white/35 flex items-center justify-center">
                <span className="text-white lg:text-lg text-sm font-light flex items-center gap-2">
                  <p className="font-lama">السابق</p>
                  ـــ
                  <p className="font-bizmo">Previous</p>
                </span>
              </span>
            </button>
          )}

          <button
            type="button"
            onClick={currentStep === 4 ? submitForm : nextStep}
            disabled={!canProceed() || isSubmitting}
            className="z-10 w-fit rounded-[14px] bg-gradient-to-r from-[#1c4892] to-[#b68f63] cursor-pointer hover:opacity-90 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="h-full w-full px-9 py-3 rounded-[14px] border border-white/35 flex items-center justify-center">
              <span className="text-white lg:text-lg text-sm font-light flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <p className="font-lama">جاري الإرسال...</p>
                  </>
                ) : (
                  <>
                    <p className="font-lama">
                      {currentStep === 4 ? "ارسال" : "التالي"}
                    </p>
                    ـــ
                    <p className="font-bizmo">
                      {currentStep === 4 ? "Send" : "Next"}
                    </p>
                  </>
                )}
              </span>
            </span>
          </button>
        </nav>
      )}

      {/* Reset Button for Thank You Page */}
      {currentStep === 5 && (
        <nav className="w-full flex items-center justify-center py-8">
          <button
            type="button"
            onClick={resetForm}
            className="z-10 w-fit rounded-[14px] bg-gradient-to-r from-[#1c4892] to-[#b68f63] cursor-pointer hover:opacity-90 transition-all duration-300 ease-in-out"
          >
            <span className="h-full w-full px-9 py-3 rounded-[14px] border border-white/35 flex items-center justify-center">
              <span className="text-white lg:text-lg text-sm font-light flex items-center gap-2">
                <p className="font-lama">ابدأ من جديد</p>
                ـــ
                <p className="font-bizmo">Start Again</p>
              </span>
            </span>
          </button>
        </nav>
      )}

      {/* Footer */}
      <footer className="flex items-center justify-between lg:px-12 px-4 text-[#1c4892] mt-auto pt-8">
        <div className="flex flex-col font-lama">
          <p>حي الغدير مخرج (5).</p>
          <p>طريق الملك عبدالعزيز, الرياض</p>
          <p>المملكة العربية السعودية.</p>
        </div>
        <div className="flex flex-col font-bizmo text-sm" dir="ltr">
          <p>www.rajhibuild.com</p>
          <p>00966 11 204 9700</p>
          <p className="text-xs">
            <span className="font-lama">السجل التجاري:</span> 1010058796
          </p>
          <p className="text-xs">
            <span className="font-lama">الرقم الموحد:</span> 7000054804
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;

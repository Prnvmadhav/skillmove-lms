import React from 'react';

const FAQ = () => {
  const faqs = [
    { question: "How do I enroll in a course?", answer: "Simply browse our catalog, select a course you're interested in, and click the 'Enroll Now' button. If it's a paid course, you'll be prompted to complete the payment." },
    { question: "Are the certificates verified?", answer: "Yes, all certificates issued by SkillMove LMS are unique and verifiable by employers using the certificate ID." },
    { question: "Can I learn at my own pace?", answer: "Absolutely! All our courses are self-paced, meaning you can learn whenever and wherever it suits you." },
    { question: "Do you offer refunds?", answer: "We offer a 30-day money-back guarantee on all our paid courses if you are not satisfied with the content." }
  ];

  return (
    <div className="container main-content" style={{ maxWidth: '800px' }}>
      <h1 className="text-center mb-8">Frequently Asked Questions</h1>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="card">
            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{faq.question}</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 200);
  };

  return (
    <div className="max-cont my-8 md:my-10 lg:my-14 xl:my-18">
      {submitted ? (
        <div className="space-y-6 text-center">
          <div className="text-2xl lg:text-3xl">
            Thank you for your time!
          </div>
          <div className="text-xl lg:text-2xl">
            I will reply shortly 😀{" "}
          </div>
        </div>
      ) : (
        <form
          className="mx-auto w-full space-y-5 xl:w-[85%] 2xl:w-[80%]"
          action={
            "https://public.herotofu.com/v1/0590e270-d48a-11ed-a62e-917cebf1b719"
          }
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <input
            className="bg-violet-950-50 text-cstm-purple w-full rounded-xl p-3 font-bold"
            aria-label="your name"
            placeholder="Your Name"
            name="Name"
            id="name"
            type="text"
            required
          />
          <input
            name="Email"
            placeholder="Your Email"
            className="bg-violet-950-50 text-cstm-purple w-full rounded-xl p-3 font-bold"
            id="email"
            type="email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Your Message"
            className="bg-violet-950-50 text-cstm-purple w-full rounded-xl p-3 font-bold"
            required
          />

          {/* for bots */}
          <div aria-hidden="true" className="hidden">
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button className="bg-cstm-purple mx-auto block rounded-full px-4 py-2 font-bold text-violet-950 hover:bg-[#6F6CE9] active:bg-violet-950 active:text-gray-50 lg:px-4 xl:text-[22px] 2xl:px-4.5 2xl:py-2.5 2xl:text-[24px]">
            SUBMIT
          </button>
        </form>
      )}
    </div>
  );
}

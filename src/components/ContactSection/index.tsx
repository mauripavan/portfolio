import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

const ContactSection = () => {
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "4bb131cd-c3a3-4f5a-95cd-b83231d244e0");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(true);
    } else {
      console.log("Error", res);
      setResult(false);
    }
    setLoading(false);
  };

  return (
    <div
      id="contact"
      className="flex font-space tracking-wider min-h-screen items-center mx-12 lg:mx-28"
    >
      <div className="flex flex-col flex-1 md:flex-row">
        <div className="flex-1">
          <div className="h-1.5 w-28 bg-white mb-6" />
          <p className="font-bold text-2xl lg:text-5xl w-3/4">
            Interested in working together?
          </p>
          <div className="flex mt-0.5 items-center">
            <p className="font-bold text-2xl lg:text-5xl">Let’s talk</p>
            <BiRightArrowAlt className="w-10 h-10 lg:w-14 lg:h-14 text-blue" />
          </div>
        </div>

        <div
          className={`flex flex-1 h-96 mt-8 md:mt-0 ${
            result && "bg-gray-0 items-center justify-center rounded-xl"
          }`}
        >
          {!result ? (
            <form
              className="flex flex-col flex-1 w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="4bb131cd-c3a3-4f5a-95cd-b83231d244e0"
              />
              <div className="w-full h-10 lg:h-16 mb-12 border-b-2 border-gray-20">
                <input
                  className="w-full h-full bg-gray-50 focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-lg text-lg lg:placeholder:text-2xl lg:text-2xl"
                  placeholder="Enter your name"
                  name="name"
                  type="text"
                  required
                ></input>
              </div>
              <div className="w-full h-16 mb-12 border-b-2 border-gray-20">
                <input
                  className="w-full h-full bg-gray-50 focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-lg text-lg lg:placeholder:text-2xl lg:text-2xl"
                  placeholder="Your email adress"
                  name="email"
                  type="email"
                  required
                ></input>
              </div>
              <textarea
                name="description"
                id="description"
                className="bg-gray-50 border-b-2 border-gray-20 focus:outline-none placeholder:font-bold placeholder:text-white placeholder:text-lg text-lg lg:placeholder:text-2xl lg:text-2xl"
                placeholder="Describe your project"
                rows={3}
                required
              ></textarea>
              <button
                type="submit"
                className="flex items-center gap-2 mt-12 border-b-2 border-gray-20 w-fit h-12 hover:border-white transition-all duration-200 cursor-pointer group"
              >
                <p>{loading ? "Plase wait..." : "Contact me"}</p>
                <BiRightArrowAlt className="w-7 h-7 transition-all group-hover:translate-x-2 group-hover:text-blue" />
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <BsCheckCircle className="w-14 h-14" />
              <p className="text-5xl font-bold mt-10">Thank you</p>
              <p className="text-lg mt-2.5">
                Thanks for reaching out. I will get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

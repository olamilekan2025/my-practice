import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BsQuestionDiamond } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const defaultForm = {
  first_name: "",
  second_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

function Contact() {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);
  const [form, setForm] = useState(defaultForm);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { first_name, second_name, last_name, email, phone, address, message } =
    form;

  const formIsComplete =
    first_name &&
    second_name &&
    last_name &&
    email &&
    phone &&
    address &&
    message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setForm(defaultForm);

  const handleModal = (e) => {
    e.preventDefault();
    if (!formIsComplete) {
      toast.warning("Incomplete form!");
      return;
    }
    setModalOpen(true);
  };

  const handleSubmit = async () => {
    toast.info("Please wait...");
    setIsLoading(true);

    try {
      const response = await fetch("https://usebasin.com/f/84226a19c723", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Form submitted successfully!");
      resetForm();
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" data-aos="fade-down" autoClose={3000} />

      <div className="contact">
        {modalOpen && (
          <div className="modal">
            <div className="modalContect">
              <BsQuestionDiamond />
              <h2>CONFIRM SUBMISSION</h2>
              <p>Are you sure you want to submit this message?</p>
              <div className="btn">
                <button onClick={() => setModalOpen(false)}>No</button>
                <button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="contactImage"></div>
        <div className="contactForm">
          <form onSubmit={handleModal}>
            <input data-aos="fade-down" data-aos-delay="30"
              type="text"
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
            <input data-aos="fade-up" data-aos-delay="40"
              type="text"
              name="second_name"
              placeholder="Second Name"
              value={form.second_name}
              onChange={handleChange}
              required
            />
            <input data-aos="fade-left" data-aos-delay="50"
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              required
            />
            <input data-aos="fade-right" data-aos-delay="60"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input data-aos="fade-up" data-aos-delay="70"
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input data-aos="fade-down" data-aos-delay="80"
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <textarea data-aos="fade-up" data-aos-delay="90"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" data-aos="flip-down" data-aos-delay="100"> Continue</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;

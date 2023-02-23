import { useForm } from "react-hook-form";
import "../../index.css";
import "./contact.css";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <h1 className="heading bold background">CONTACT US</h1>
            <h2 className="subheading">WE LOVE PRETTY MUCH TO HEAR FROM YOU</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="contact-info-box col-md-4 col-sm-4 col-xs-6 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <i className="fa fa-phone"></i>
            <h3>+20-2-383-0652</h3>
          </div>
          <div
            className="contact-info-box col-md-4 col-sm-4 col-xs-6 wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <i className="fa fa-envelope-o"></i>
            <h3>info@fiducha.com</h3>
          </div>
          <div
            className="contact-info-box col-md-4 col-sm-4 col-xs-6 wow fadeInUp"
            data-wow-delay="1s"
          >
            <i className="fa fa-map-marker"></i>
            <h3>6TH OF OCTOBER, GIZA, EGYPT</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <form
              action="https://formsubmit.co/ghalitarek510@gmail.com"
              target="_blank"
              onSubmit={onSubmit}
              method="post"
            >
              <div className="col-md-6 col-sm-6">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                  })}
                />
                {errors.name && (
                  <p className="text-red mt-1">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}

                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-red mt-1">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
                <input
                  name="subject"
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
                {errors.message && (
                  <p className="text-red mt-1">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}
              </div>
              <div className="col-md-6 col-sm-6">
                <textarea
                  name="message"
                  rows="7"
                  className="form-control"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-6">
                <input
                  name="submit"
                  type="submit"
                  className="form-control bold"
                  id="submit"
                  value="SEND EMAIL"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

function Form() {
  const clickHandler = (e) => {
    e.preventDefault();
    alert();
  };
  return (
    <div id="contact">
      <h1 className="mt-5 mb-5 contactH1">Contact</h1>
      <div id="theForm" className="row w-100 m-auto">
        <form className="col col-10 col-lg-5 m-auto " onSubmit={clickHandler}>
          <div className="mb-5">
            {" "}
            Thank you for checking out my portfolio! <br />
            Leave your details below, or send me an email!
          </div>{" "}
          <div className="form-group">
            <label for="exampleInputName1" className="text-primary">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1" className="text-primary">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text  ">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputMessage1" className="text-primary">
              Message
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputMessage1"
              placeholder="Leave me a message"
            ></textarea>{" "}
          </div>
          <p></p>
          <button type="submit" className="btn-primary mb-5 w-100">
            Submit
          </button>
        </form>
        <div id="sideOfForm" className="col col-10 col-lg-5 m-auto">
          <div>
            You can also contact me through email. <br />
            <p></p>
            <p></p>
            <span style={{ color: "rgb(25,175,88)" }}>Click</span> on my
            <span style={{ color: "rgb(25,175,88)" }}>email address </span>
            <br /> to create a new Gmail draft with me in a NEW TAB. <br />{" "}
            <p></p>
            <p></p>
            <a
              // target for open link in new tab
              target="_blank"
              id="emailSpam"
              className="text-primary text-decoration-none"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alexxygg@gmail.com"
            >
              alexxygg@gmail.com
            </a>
          </div>
        </div>{" "}
      </div>{" "}
      <button id="downloadCV" className="" type="button">
        Click to: &nbsp;
        <a
          className="resumeLink "
          href="./resumeDownloadExample.png"
          download="my-Resume"
        >
          ***DOWNLOAD MY RESUME***
        </a>
        {/* <img className="donwloadImages" src="./download.png" /> */}
      </button>
    </div>
  );
}

export default Form;

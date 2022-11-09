function FillerOnly() {
  const clickHandler = () => {};

  return (
    <div>
      <div id="fillerOnly" className="col-10 m-auto gradientColor text-center">
        <h1></h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <h1 className="mb-5 ">About Developer:</h1>
        <div class="w-100">
          {/* <img src="./aboutMe.jpg" className="aboutMePicture m-auto " /> */}
        </div>
        {/* To have href #idName appear well placed on link click */}
        <p className="mb-5">
          Hi, I'm Alejandro. I love working with front-end technologies, I
          always try to put all my effort on every project I get. I hope to work
          with you soon!
        </p>

        <ul className="mb-5 ">
          <li>I am 23 years old.</li>
          <li>I like dogs.</li>
        </ul>
      </div>
    </div>
  );
}

export default FillerOnly;

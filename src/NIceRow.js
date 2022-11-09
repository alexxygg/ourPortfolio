function NIceRow() {
  const randomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
  };
  randomColor();
  return (
    <>
      <div id="divRows">
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: { randomColor } }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div
          className="odd"
          style={{ backgroundColor: randomColor }}
        ></div>{" "}
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div className="odd" style={{ backgroundColor: randomColor }}></div>
        <div className="even"></div>
        <div id="odd" style={{ backgroundColor: randomColor }}></div>
      </div>{" "}
    </>
  );
}

export default NIceRow;

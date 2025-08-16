import React, {useState} from "react";

export default function About(props) {
    const myStyle = {
    color: props.mode === "dark" ? "white" : "#292e33",
    backgroundColor: props.mode === "dark" ? "#292e33" : "white",
    // border: "1px solid",
    // borderColor: props.mode === "dark" ? "white" : "#292e33"
  };
  const buttonStyle = {
    color: props.mode === "dark" ? "white" : "#292e33",
    backgroundColor: props.mode === "dark" ? "#292e33" : "white",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "#292e33"
  };

    // const [btnText, setBtnText] = useState("Enable Dark Mode");  
  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <p>
        This is a simple text utility application built using React. It allows
        users to manipulate text in various ways, such as converting to
        uppercase, lowercase, and sentence case.
      </p>
      <p>Feel free to explore the features and provide feedback!</p>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={buttonStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={buttonStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item’s accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={buttonStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={buttonStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item’s accordion body. Let’s imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style={buttonStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={buttonStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item’s accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

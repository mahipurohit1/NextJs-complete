import { useRef } from "react";
function HomePage() {
  const emailInput = useRef();
  const feedbackInput = useRef();

  function submitFormHandler(e) {
    e.preventDefault();
    const email = emailInput.current.value;
    const feedback = feedbackInput.current.value;

    const data = { email, feedback };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackInput}
          ></textarea>
        </div>
        <div>
          <button>save feedback</button>
        </div>
      </form>
    </div>
  );
}

export default HomePage;

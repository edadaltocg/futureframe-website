document
  .getElementById("waitlist-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const responseMessage = document.getElementById("response-message");

    try {
      const response = await fetch("/backend/api/collections/leads/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        responseMessage.textContent = "You have been added to the waitlist!";
        responseMessage.style.color = "green";
        // remove hidden class
        document.getElementById("response-message").classList.remove("hidden");
      } else {
        responseMessage.textContent =
          "There was an error adding you to the waitlist. Please try again.";
        responseMessage.style.color = "red";
        document.getElementById("response-message").classList.remove("hidden");
      }
    } catch (error) {
      responseMessage.textContent =
        "There was an error adding you to the waitlist. Please try again.";
      responseMessage.style.color = "red";
      document.getElementById("response-message").classList.remove("hidden");
    }
  });

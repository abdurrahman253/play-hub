import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent! Check your inbox or spam folder.");
        window.location.href = "https://mail.google.com"; // redirect to Gmail
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleReset} className="p-8 bg-gray-100 rounded-xl w-80">
        <h2 className="mb-4 text-2xl font-semibold text-center">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;

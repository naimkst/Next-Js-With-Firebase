import React from "react";
import { app } from "../firebseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function Register() {
  const [email, setEmail]: any = React.useState<any>("");
  const [password, setPassword] = React.useState<any>("");
  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider();
  const gitAuth = new GithubAuthProvider();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuth)
      .then((result: any) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };

  const signUpWithGitLab = () => {
    signInWithPopup(auth, gitAuth)
      .then((result: any) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
      });
  };
  return (
    <div>
      <p>Email</p>
      <input
        onChange={(e: any) => setEmail(e.target.value)}
        value={email}
        type="text"
      />
      <p>Password</p>
      <input
        onChange={(e: any) => setPassword(e.target.value)}
        value={password}
        type={"password"}
      />
      <br />
      <br />
      <button onClick={signUp}>Submit</button>
      <br />
      <br />
      <button onClick={signInWithGoogle}>Signup With Google</button>
      <br />
      <br />
      <button onClick={signUpWithGitLab}>Signup With Gitlab</button>
    </div>
  );
}

// import { useState } from "react";
//import { Button, Alert } from "react-bootstrap";
 
// export default function App() {
//   const [user, setUser] = useState(null);
  
//   return <div>{user ?<h1>Estas logueado</h1> : <h1>No estás logueado</h1>}</div>
 
// }

import { useState } from "react";
import SignInSignUp from "./page/SignInSignUp"
 
export default function App() {
  const [user, setUser] = useState({ name: "Luciana"});
  
  return (
    <div>
      {user ? (
        <div>
          <SignInSignUp />
        </div>
      ) : (
        <h1>No estás logueado</h1>
      )}
    </div>
  );
}


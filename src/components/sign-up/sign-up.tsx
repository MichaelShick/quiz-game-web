import { useState } from "react";

export const SignUp = () => {
    const [username, setUsername] = useState<string | number | readonly string[] | undefined>(undefined);
    const [password, setPassword] = useState<string | number | readonly string[] | undefined>(undefined);
  return (
    <div>sign up

    <input type="text" value={username}   name="username" onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              setUsername(e.target.value);
            }}/>
        <input type="password" value={password}   name="password" onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              setPassword(e.target.value);
            }}/>        

    </div>

  )
}

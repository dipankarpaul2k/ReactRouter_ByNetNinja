import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eum
        delectus, asperiores autem hic dolor odio officia aut ea culpa in
        dignissimos voluptas veritatis, adipisci est. Nobis, nam. Explicabo
        voluptas magni perferendis cumque voluptatum veritatis hic ratione sit
        tempora saepe, provident officiis. Autem hic quam facilis error porro,
        perferendis delectus?
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sunt
        deserunt reiciendis sapiente! Vero obcaecati, perspiciatis, incidunt
        numquam reiciendis cum sunt aut soluta, ut consequatur minus repellat
        molestiae qui aliquam!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        corrupti saepe distinctio, cumque, quibusdam cupiditate vel ut cum iusto
        iure impedit beatae deserunt id tempora animi et dolore dolor quod ullam
        excepturi ex voluptatibus perferendis. Quam quis nesciunt perferendis
        reprehenderit, rem doloribus debitis. Odit aperiam in quia cupiditate,
        quis incidunt.
      </p>

      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  );
}

import Image from "next/image";
import { lusitana } from "./fonts";

export default function Home() {
  return (
    <>
      <div className={`text-3xl ${lusitana.className}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi vero
        quia quos non pariatur qui, dignissimos reiciendis voluptatibus amet cum
        quasi ad sapiente omnis? Beatae corrupti quidem nam voluptatum
        recusandae.
        <br />
        {lusitana.className}
      </div>
    </>
  );
}

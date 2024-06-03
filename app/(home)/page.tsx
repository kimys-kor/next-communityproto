import Container from "../components/Container";
import Login from "../components/login/Login";

export default function Home() {
  return (
    <div className="">
      <aside className="w-2/5 h-full ">
        <Login></Login>
      </aside>
    </div>
  );
}

import Card from "../components/Card";
import Container from "../components/Container";
import Login from "../components/login/Login";

export default function Home() {
  return (
    <div className="">
      <aside className="max-w-sm w-1/3 h-full flex flex-col gap-4">
        <Login></Login>
        <Card title={"주간베스트"}></Card>
        <Card title={"실시간베스트"}></Card>
      </aside>
    </div>
  );
}

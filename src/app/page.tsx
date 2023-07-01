import CardArea from "@/components/CardArea";
import { getUsers } from "@/api/api";

export default async function Home() {

  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CardArea users={users}/>
    </main>
  );
}

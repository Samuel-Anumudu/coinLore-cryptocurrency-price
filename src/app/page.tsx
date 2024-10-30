import PaginatedTable from "@/components/PaginatedTable";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <main className="flex h-screen flex-grow justify-center p-4">
          <div className="w-full max-w-[800px]">
            <PaginatedTable />
          </div>
        </main>
      </div>
    </div>
  );
}

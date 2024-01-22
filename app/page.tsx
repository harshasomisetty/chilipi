export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <p>habits</p>
      <div className="">
        <table className="table-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">Did Habit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-slate-100">
              <td className="border border-slate-700">Praneeth</td>
              <td className="border border-slate-700 text-center">yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

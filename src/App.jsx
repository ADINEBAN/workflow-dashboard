import { useMemo, useState } from 'react'

const seedRows = [
  { id: 'TSK-101', name: 'Q3 Report Finalization', status: 'Done', assignee: 'Adan Fom', start: '15 Nov', end: '20 Nov', priority: 'High' },
  { id: 'TSK-102', name: 'Q3 Report Warization', status: 'In Progress', assignee: 'Manniifiterson', start: '18 Nov', end: '22 Nov', priority: 'Medium' },
  { id: 'TSK-103', name: 'Task Extmoriolizations', status: 'Not Started', assignee: 'Darry Peter', start: '15 Nov', end: '21 Nov', priority: 'Medium' },
  { id: 'TSK-104', name: 'Q3 Report Pailect Analysis', status: 'Not Started', assignee: 'Ugan Mariler', start: '20 Nov', end: '24 Nov', priority: 'Low' },
  { id: 'TSK-105', name: 'Q4 Task Finalization', status: 'In Progress', assignee: 'Jamniifiterson', start: '15 Nov', end: '23 Nov', priority: 'High' },
  { id: 'TSK-106', name: 'Pannie Release Dapoiring Task', status: 'Not Started', assignee: 'Darry Peter', start: '10 Nov', end: '19 Nov', priority: 'Medium' },
  { id: 'TSK-107', name: 'Q3 Report Finalization', status: 'Not Started', assignee: 'Derry Smith', start: '15 Nov', end: '20 Nov', priority: 'Low' },
]

const badgeStatus = {
  Done: 'bg-emerald-100 text-emerald-700',
  'In Progress': 'bg-sky-100 text-sky-700',
  'Not Started': 'bg-slate-100 text-slate-700',
}

const badgePriority = {
  High: 'bg-rose-100 text-rose-700',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-emerald-100 text-emerald-700',
}

export default function App() {
  const [search, setSearch] = useState('')
  const [note, setNote] = useState('')

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return seedRows
    return seedRows.filter((r) => r.id.toLowerCase().includes(q) || r.name.toLowerCase().includes(q) || r.assignee.toLowerCase().includes(q))
  }, [search])

  const total = rows.length
  const completed = rows.filter((r) => r.status === 'Done').length
  const inProgress = rows.filter((r) => r.status === 'In Progress').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dce9ff] via-[#d4e6ff] to-[#efe4ff] p-4 md:p-8 text-slate-800 relative overflow-hidden">
      <Bubble className="-left-8 top-20 h-20 w-20" />
      <Bubble className="right-10 top-6 h-24 w-24" />
      <Bubble className="left-10 bottom-12 h-32 w-32" />
      <Bubble className="right-1/3 bottom-8 h-14 w-14" />

      <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/45 backdrop-blur-xl shadow-2xl">
        <div className="grid min-h-[82vh] grid-cols-1 md:grid-cols-[180px_1fr]">
          <aside className="border-r border-white/50 p-5">
            <nav className="mt-16 space-y-2 text-sm">
              <SideItem icon="🏠" label="Overview" />
              <SideItem icon="📊" label="Spreadsheet" active />
              <SideItem icon="📈" label="Reports" />
              <SideItem icon="⚙️" label="Settings" />
            </nav>
          </aside>

          <main className="p-5 md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h1 className="text-3xl font-semibold">📊 Task Management - Spreadsheet</h1>
              <div className="flex flex-wrap gap-2">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="rounded-xl border border-white/70 bg-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                />
                <button className="rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow">+ Add Task</button>
                <button className="rounded-xl border border-white/70 bg-white/70 px-4 py-2 text-sm">Filter</button>
                <button className="rounded-xl border border-white/70 bg-white/70 px-4 py-2 text-sm">Sort</button>
              </div>
            </div>

            <div className="mb-4 grid gap-3 md:grid-cols-3">
              <StatCard title="Total Tasks" value={total} trend="+5%" trendColor="text-emerald-600" />
              <StatCard title="Completed" value={completed} trend="+12%" trendColor="text-emerald-600" />
              <StatCard title="In Progress" value={inProgress} trend="-3%" trendColor="text-rose-500" />
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/65 backdrop-blur p-2 shadow">
              <div className="overflow-auto">
                <table className="w-full min-w-[860px] text-sm">
                  <thead className="text-left text-slate-600">
                    <tr className="border-b border-slate-200/70">
                      <th className="py-2 px-2">ID</th>
                      <th className="py-2 px-2">Task Name</th>
                      <th className="py-2 px-2">Status</th>
                      <th className="py-2 px-2">Assignee</th>
                      <th className="py-2 px-2">Start Date</th>
                      <th className="py-2 px-2">End Date</th>
                      <th className="py-2 px-2">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.id} className="border-b border-slate-100 text-slate-700">
                        <td className="py-2 px-2">{r.id}</td>
                        <td className="py-2 px-2 font-medium">{r.name}</td>
                        <td className="py-2 px-2"><Badge className={badgeStatus[r.status]}>{r.status}</Badge></td>
                        <td className="py-2 px-2">{r.assignee}</td>
                        <td className="py-2 px-2">{r.start}</td>
                        <td className="py-2 px-2">{r.end}</td>
                        <td className="py-2 px-2"><Badge className={badgePriority[r.priority]}>{r.priority}</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/70 bg-white/65 p-4 shadow">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Notes & Quick Actions</h2>
                <div className="flex gap-2">
                  <button className="rounded-xl border border-white/70 bg-white/80 px-3 py-1.5 text-sm">Add New Task</button>
                  <button className="rounded-xl border border-white/70 bg-white/80 px-3 py-1.5 text-sm">Quick Actions</button>
                </div>
              </div>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Add notes or actions pointing here..."
                className="w-full rounded-xl border border-white/70 bg-white/80 p-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function SideItem({ icon = '•', label, active = false }) {
  return (
    <button className={`w-full rounded-xl px-3 py-2 text-left ${active ? 'bg-sky-200 text-slate-800 font-semibold' : 'text-slate-600 hover:bg-white/60'}`}>
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  )
}

function StatCard({ title, value, trend, trendColor }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-600">{title}</p>
          <p className="text-3xl font-bold leading-tight">{value}</p>
        </div>
        <span className={`text-sm font-semibold ${trendColor}`}>{trend}</span>
      </div>
    </div>
  )
}

function Badge({ className, children }) {
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${className}`}>{children}</span>
}

function Bubble({ className }) {
  return <div className={`pointer-events-none absolute rounded-full bg-gradient-to-br from-fuchsia-300/70 via-sky-300/40 to-cyan-200/20 blur-sm ${className}`} />
}

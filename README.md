# Workflow Frontend (React + Tailwind)

Dashboard quản lý task/workflow với:
- KPI cards (total, pending, overdue, completed)
- Bảng task có search + filter
- Action "Remind now"
- Biểu đồ trạng thái (Recharts)
- Responsive

## Chạy local

```bash
npm install
npm run dev
```

Mặc định: http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Gợi ý nối API thật

Hiện tại dùng seed data trong `src/App.jsx`.
Có thể thay bằng `fetch` từ webhook/API n8n để đồng bộ Google Sheets.

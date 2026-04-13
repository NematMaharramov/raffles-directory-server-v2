# Raffles Seychelles — Telephone Directory
## Company Server Edition v3.0

---

### Files in this package

```
raffles-directory/
├── server.js              ← Node.js server (run this)
├── package.json           ← Dependencies
├── data.json              ← All data: contacts, departments, passwords
├── index.html             ← The app (served by the server)
├── phonedirectory.js      ← App logic
├── phonedirectory.css     ← Styles
└── README.md              ← This file
```

---

### Requirements

- **Node.js** v16 or newer — https://nodejs.org

---

### Setup (first time)

```bash
# 1. Go into the directory
cd raffles-directory

# 2. Install the one dependency (Express)
npm install

# 3. Start the server
node server.js
```

You will see:
```
  ┌─────────────────────────────────────────────┐
  │  Raffles Seychelles — Telephone Directory   │
  │  Running on port 47291                      │
  │  http://localhost:47291                     │
  └─────────────────────────────────────────────┘
```

---

### How staff access it

Share the server's IP address on the company network:

```
http://192.168.x.x:47291
```

All staff open this URL in any browser. No installation needed on their side.

---

### Admin login

Default password: **Raffles2026**

The admin can change the password from inside the app (Admin Login → Password button).
The password is saved to `data.json` on the server.

---

### Data

All data is stored in `data.json` in the same folder as server.js.
Back up this file regularly — it contains all contacts, departments, and settings.

---

### Running as a background service (optional)

To keep the server running after you close the terminal, use **PM2**:

```bash
npm install -g pm2
pm2 start server.js --name "raffles-directory"
pm2 save
pm2 startup
```

---

### Port

The server runs on port **47291**.
Make sure your firewall allows inbound connections on this port from the company network.

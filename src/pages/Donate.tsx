import React from "react";
import { Container, Paper, Typography, Stack, RadioGroup, FormControlLabel, Radio, TextField, Button, Divider } from "@mui/material";
import styles from "./Donate.module.scss";
import { api } from "../api/http.ts";

const preset = [
  { label: "₹ 1500", value: 150000 },
  { label: "₹ 3000", value: 300000 },
  { label: "₹ 6000", value: 600000 },
  { label: "₹ 12000", value: 1200000 }
];

const supportCards = [
  "Primary and Secondary education for children",
  "Regular health check-ups & nutrition support",
  "Training and capacity building of teachers",
  "Vocational Education & Skill Training",
  "Music, sports, life skills education",
  "Infrastructure development, STEM programs",
  "Digital literacy access to rural children",
  "Merit-based scholarships for girls"
];

export function Donate() {
  const [amount, setAmount] = React.useState<number>(preset[0].value);

  const [form, setForm] = React.useState({
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    dob: "",
    pan: "",
    country: "India",
    state: "",
    city: "",
    address: "",
    pincode: ""
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  async function submit() {
    // minimal validation
    if (!form.donorName || !form.donorEmail || amount <= 0) {
      alert("Please fill name, email and valid amount.");
      return;
    }

    const res = await api<{ url: string }>("/api/donations/checkout", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        amount,
        currency: "INR",
        isRecurring: false
      })
    });

    window.location.href = res.url;
  }

  return (
    <Container className={styles.wrapper} maxWidth="lg">
      <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
        GIVE EVERY CHILD A CHANCE TO LEARN AND DREAM
      </Typography>

      <div className={styles.grid}>
        {/* Left content */}
        <Stack spacing={2}>
          <Typography color="text.secondary">
            Education is every child&apos;s right — it&apos;s the foundation of a secure and fulfilling life.
            Your support helps children access learning, safety, and opportunity.
          </Typography>

          <Typography color="text.secondary">
            Through our initiatives, we ensure learning never stops. Your donation helps provide books, teachers,
            learning spaces, digital access, and holistic development.
          </Typography>

          <Typography color="text.secondary">
            Together, let&apos;s build a future where no child is left behind.
          </Typography>
        </Stack>

        {/* Right donation form */}
        <Paper sx={{ p: 3, border: "2px solid", borderColor: "primary.main" }} elevation={0}>
          <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 900 }}>
            SUPPORT THE CAUSE
          </Typography>
          <Typography sx={{ textAlign: "center", mt: 1 }} color="text.secondary">
            MAKE A DIFFERENCE
          </Typography>

          <Divider sx={{ my: 2 }} />

          <RadioGroup
            row
            value={amount}
            onChange={(e) => setAmount(Number((e.target as HTMLInputElement).value))}
            sx={{ justifyContent: "space-between" }}
          >
            {preset.map((p) => (
              <FormControlLabel key={p.value} value={p.value} control={<Radio />} label={p.label} />
            ))}
          </RadioGroup>

          <TextField
            fullWidth
            sx={{ mt: 2 }}
            label="Other Amount (paise) e.g. 50000 = ₹500"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
            <TextField fullWidth label="Full Name" value={form.donorName} onChange={set("donorName")} />
            <TextField fullWidth label="Email ID" value={form.donorEmail} onChange={set("donorEmail")} />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
            <TextField fullWidth label="Mobile No" value={form.donorPhone} onChange={set("donorPhone")} />
            <TextField fullWidth label="DOB" value={form.dob} onChange={set("dob")} />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
            <TextField fullWidth label="PAN No" value={form.pan} onChange={set("pan")} />
            <TextField fullWidth label="Country" value={form.country} onChange={set("country")} />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
            <TextField fullWidth label="State" value={form.state} onChange={set("state")} />
            <TextField fullWidth label="City" value={form.city} onChange={set("city")} />
          </Stack>

          <TextField fullWidth sx={{ mt: 2 }} label="Address" value={form.address} onChange={set("address")} />
          <TextField fullWidth sx={{ mt: 2 }} label="Pincode" value={form.pincode} onChange={set("pincode")} />

          <Typography variant="caption" display="block" sx={{ mt: 2 }} color="text.secondary">
            *Your contributions may be eligible for tax benefits as per applicable laws.
          </Typography>

          <Button fullWidth sx={{ mt: 2 }} onClick={submit}>
            Submit
          </Button>
        </Paper>
      </div>

      <div className={styles.supportBanner}>WHAT WILL YOUR DONATION SUPPORT?</div>

      <div className={styles.supportGrid}>
        {supportCards.map((t) => (
          <Paper key={t} sx={{ p: 2, textAlign: "center" }} elevation={0}>
            <Typography fontWeight={700}>{t}</Typography>
          </Paper>
        ))}
      </div>
    </Container>
  );
}
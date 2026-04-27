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
      <Typography variant="h3" sx={{ textAlign: "center", mb: 2, fontWeight: 'bold', color: '#2e7d32' }}>
        GIVE EVERY CHILD A CHANCE TO LEARN AND DREAM
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center", mb: 4, color: '#666' }}>
        Your donation can transform a child's life forever
      </Typography>

      <div className={styles.grid}>
        {/* Left content */}
        <Stack spacing={3}>
          <Paper sx={{ p: 3, backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}>
              Why Your Donation Matters
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Education is every child&apos;s right — it&apos;s the foundation of a secure and fulfilling life.
              Your support helps children access learning, safety, and opportunity.
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Through our initiatives, we ensure learning never stops. Your donation helps provide books, teachers,
              learning spaces, digital access, and holistic development.
            </Typography>
            <Typography color="text.secondary">
              Together, let&apos;s build a future where no child is left behind.
            </Typography>
          </Paper>

          <Paper sx={{ p: 3, backgroundColor: '#e8f5e9', border: '1px solid #c8e6c9' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#2e7d32' }}>
              Your Impact
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body2" color="text.secondary">
                • ₹1500 can provide educational materials for 1 child for 6 months
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • ₹3000 can support health check-ups for 5 children
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • ₹6000 can provide digital learning access for 10 children
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • ₹12000 can sponsor a child's education for 1 year
              </Typography>
            </Stack>
          </Paper>
        </Stack>

        {/* Right donation form */}
        <Paper sx={{ p: 4, border: "3px solid", borderColor: "primary.main", borderRadius: 2 }} elevation={3}>
          <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 900, color: '#2e7d32' }}>
            SUPPORT THE CAUSE
          </Typography>
          <Typography sx={{ textAlign: "center", mt: 1 }} color="text.secondary">
            MAKE A DIFFERENCE TODAY
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Select Donation Amount
          </Typography>
          <RadioGroup
            row
            value={amount}
            onChange={(e) => setAmount(Number((e.target as HTMLInputElement).value))}
            sx={{ justifyContent: "space-between", mb: 2 }}
          >
            {preset.map((p) => (
              <FormControlLabel 
                key={p.value} 
                value={p.value} 
                control={<Radio />} 
                label={p.label}
                sx={{ 
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  px: 1,
                  py: 0.5,
                  '&:hover': { borderColor: '#4CAF50' }
                }}
              />
            ))}
          </RadioGroup>

          <TextField
            fullWidth
            sx={{ mt: 2, mb: 3 }}
            label="Other Amount (₹)"
            type="number"
            value={amount / 100}
            onChange={(e) => setAmount(Number(e.target.value) * 100)}
            InputProps={{ startAdornment: '₹' }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Personal Information
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField fullWidth label="Full Name *" value={form.donorName} onChange={set("donorName")} />
            <TextField fullWidth label="Email ID *" value={form.donorEmail} onChange={set("donorEmail")} />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField fullWidth label="Mobile No" value={form.donorPhone} onChange={set("donorPhone")} />
            <TextField fullWidth label="Date of Birth" value={form.dob} onChange={set("dob")} type="date" />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField fullWidth label="PAN No" value={form.pan} onChange={set("pan")} />
            <TextField fullWidth label="Country" value={form.country} onChange={set("country")} />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <TextField fullWidth label="State" value={form.state} onChange={set("state")} />
            <TextField fullWidth label="City" value={form.city} onChange={set("city")} />
          </Stack>

          <TextField fullWidth sx={{ mb: 2 }} label="Address" value={form.address} onChange={set("address")} />
          <TextField fullWidth sx={{ mb: 2 }} label="Pincode" value={form.pincode} onChange={set("pincode")} />

          <Typography variant="caption" display="block" sx={{ mt: 2, mb: 3 }} color="text.secondary">
            *Your contributions may be eligible for tax benefits under 80G as per applicable laws.
          </Typography>

          <Button 
            fullWidth 
            variant="contained" 
            size="large"
            sx={{ 
              py: 1.5, 
              fontSize: '1.1rem',
              fontWeight: 'bold',
              backgroundColor: '#4CAF50',
              '&:hover': { backgroundColor: '#45a049' }
            }} 
            onClick={submit}
          >
            PROCEED TO DONATE
          </Button>
        </Paper>
      </div>

      <div className={styles.supportBanner}>WHAT WILL YOUR DONATION SUPPORT?</div>

      <div className={styles.supportGrid}>
        {supportCards.map((t) => (
          <Paper key={t} sx={{ p: 3, textAlign: "center", '&:hover': { transform: 'translateY(-5px)', boxShadow: 3 }, transition: 'all 0.3s ease' }} elevation={2}>
            <Typography fontWeight={700} color="#2e7d32">{t}</Typography>
          </Paper>
        ))}
      </div>
    </Container>
  );
}
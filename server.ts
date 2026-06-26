/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // Ensure data directory exists
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // API Route: Submit contact message (Email-like persistence)
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, phone, email, subject, message } = req.body;
      
      if (!name || !phone || !message) {
        return res.status(400).json({ error: "تمامی فیلدهای الزامی را پر کنید." });
      }

      const newMessage = {
        id: "msg_" + Math.random().toString(36).substr(2, 9),
        name,
        phone,
        email: email || "",
        subject,
        message,
        createdAt: new Date().toISOString()
      };

      const messagesPath = path.join(process.cwd(), "data", "messages.json");
      let messages = [];
      if (fs.existsSync(messagesPath)) {
        const raw = fs.readFileSync(messagesPath, "utf-8");
        messages = JSON.parse(raw || "[]");
      }
      messages.push(newMessage);
      fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2), "utf-8");

      console.log(`[Backend] New contact message saved. Total: ${messages.length}`);

      // We simulate email dispatch log here too
      console.log(`[Email-Notification] Sending email copy to info@shahriarvision.com from client ${email || 'guest'}`);

      return res.json({ 
        success: true, 
        message: "پیام شما با موفقیت در پایگاه داده سرور شهریار ویژن ضبط شد. نسخه اطلاع‌رسانی ایمیل شبیه‌سازی و به آدرس info@shahriarvision.com ارسال شد." 
      });
    } catch (err) {
      console.error("Error in api/contact:", err);
      return res.status(500).json({ error: "خطا در برقراری ارتباط با پایگاه داده." });
    }
  });

  // API Route: Submit consultation request (CRM-like intake)
  app.post("/api/consultation", async (req, res) => {
    try {
      const { fullName, companyName, phone, email, businessStage, businessSize, primaryChallenge, servicesNeeded, description } = req.body;

      if (!fullName || !companyName || !phone) {
        return res.status(400).json({ error: "پر کردن فیلدهای ستاره‌دار الزامی است." });
      }

      const bookingCode = "SV-" + Math.floor(100000 + Math.random() * 900000);
      const newConsultation = {
        id: "consult_" + Math.random().toString(36).substr(2, 9),
        bookingCode,
        fullName,
        companyName,
        phone,
        email: email || "",
        businessStage,
        businessSize,
        primaryChallenge: primaryChallenge || "",
        servicesNeeded: servicesNeeded || [],
        description: description || "",
        status: "در انتظار بررسی اولیه", // Initial Persian status
        createdAt: new Date().toISOString()
      };

      const consultationsPath = path.join(process.cwd(), "data", "consultations.json");
      let consultations = [];
      if (fs.existsSync(consultationsPath)) {
        const raw = fs.readFileSync(consultationsPath, "utf-8");
        consultations = JSON.parse(raw || "[]");
      }
      consultations.push(newConsultation);
      fs.writeFileSync(consultationsPath, JSON.stringify(consultations, null, 2), "utf-8");

      console.log(`[Backend] Consultation stored successfully. Code: ${bookingCode}`);
      console.log(`[Email-Intake] Consultation notification sent to ceo@shahriarvision.com with code ${bookingCode}`);

      return res.json({ 
        success: true, 
        bookingCode,
        message: "پرونده عارضه‌یابی دیجیتالی با موفقیت در دیتابیس لوکال سرور شهریار ویژن ثبت و رهگیری ایجاد شد." 
      });
    } catch (err) {
      console.error("Error in api/consultation:", err);
      return res.status(500).json({ error: "خطایی ساختاری در سرور رخ داد." });
    }
  });

  // API Route: Query consultation status by tracking code (Booking Code)
  app.get("/api/consultation/:code", async (req, res) => {
    try {
      const { code } = req.params;
      const consultationsPath = path.join(process.cwd(), "data", "consultations.json");
      
      if (!fs.existsSync(consultationsPath)) {
        return res.status(404).json({ error: "هیچ درخواستی هنوز ثبت نشده است." });
      }

      const raw = fs.readFileSync(consultationsPath, "utf-8");
      const consultations = JSON.parse(raw || "[]");
      const consultation = consultations.find((c: any) => c.bookingCode === code);

      if (!consultation) {
        return res.status(404).json({ error: "پرونده‌ای با کد رهگیری وارد شده یافت نشد." });
      }

      return res.json(consultation);
    } catch (err) {
      console.error("Error retrieving consultation:", err);
      return res.status(500).json({ error: "خطا در خواندن اطلاعات پرونده از سرور." });
    }
  });

  // API Route: Quick statistics and all submissions (Simple monitoring dashboard helper)
  app.get("/api/admin/all-submissions", async (req, res) => {
    try {
      const messagesPath = path.join(process.cwd(), "data", "messages.json");
      const consultationsPath = path.join(process.cwd(), "data", "consultations.json");

      let messages = [];
      if (fs.existsSync(messagesPath)) {
        messages = JSON.parse(fs.readFileSync(messagesPath, "utf-8") || "[]");
      }

      let consultations = [];
      if (fs.existsSync(consultationsPath)) {
        consultations = JSON.parse(fs.readFileSync(consultationsPath, "utf-8") || "[]");
      }

      return res.json({ messages, consultations });
    } catch (err) {
      return res.status(500).json({ error: "خطا در سرور مدیریت." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running at http://localhost:${PORT}`);
  });
}

startServer();

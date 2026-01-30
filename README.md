# NIVEA E-Commerce Store (Concept)

A premium, full-featured e-commerce website built with Next.js, inspired by the NIVEA brand.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with NIVEA branding.
- **Animations**: Smooth transitions using Framer Motion.
- **Product Management**: Full catalog with detailed product pages.
- **Cart System**: Global state management for persistent shopping cart.
- **Checkout Flow**: Multi-step checkout process (Shipping -> Payment -> Review).
- **Admin Dashboard**: Analytics, order tracking, and product management.
- **Auth**: Modern Login/Sign-up pages.
- **Responsive**: Mobile-first design.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), Tailwind CSS 4, TypeScript.
- **Animations**: Framer Motion.
- **Icons**: Lucide React.
- **State Management**: React Context.
- **Images**: AI-generated premium assets.

## 🏁 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Backend Integration**:
   This frontend is ready to be connected to a backend like Supabase, MongoDB, or Firebase. 
   - Update `src/lib/data.ts` to fetch from an API.
   - Configure Stripe/PayPal in `src/app/checkout/page.tsx`.

## 📁 Project Structure

- `src/app`: Routes and Pages
- `src/components`: UI Components, Home Sections, Layout
- `src/lib`: Utilities, Data, Context
- `public/images`: Branded assets

## 🎨 Branding Colors

- **Nivea Blue**: `#003580`
- **Nivea Light Blue**: `#E6F0FF`
- **Text Dark**: `#333333`
- **Background**: `#FFFFFF`

---
Developed with ❤️ by Antigravity

# Admin Dashboard Setup Guide

This guide will help you set up and use the Sanchiti Admin Dashboard.

## 📋 Features

- **Admin Authentication** - Secure login with email and password
- **Testimonials Management** - View, approve, or reject testimonials
- **Enquiries Management** - View and respond to customer enquiries
- **Protected Routes** - All admin routes are protected with middleware
- **Responsive Design** - Matches the existing site design system

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sanchiti?retryWrites=true&w=majority

# JWT Secret for authentication (change this in production!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Admin Credentials (for database seeding)
ADMIN_EMAIL=admin@sanchiti.com
ADMIN_PASSWORD=changeme123
```

### 2. Install Dependencies

```bash
npm install
```

The following new packages have been added:
- `bcrypt` - Password hashing
- `mongoose` - MongoDB ODM
- `jose` - JWT handling

### 3. Seed the Database

Create the initial admin user and sample data:

```bash
# For development with ts-node
npx ts-node scripts/seed.ts

# Or if ts-node is not available, you can use the Node.js loader
node --require ts-node/register scripts/seed.ts
```

After seeding, you'll see output like:
```
✓ Database seeding completed successfully!

Login credentials:
Email: admin@sanchiti.com
Password: changeme123

IMPORTANT: Change the password after first login!
```

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/admin/login` to access the admin panel.

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx           # Admin layout with navigation
│   │   ├── page.tsx             # Dashboard (protected)
│   │   └── login/
│   │       └── page.tsx         # Login page
│   └── api/
│       ├── auth/
│       │   ├── login/
│       │   │   └── route.ts     # Login endpoint
│       │   └── logout/
│       │       └── route.ts     # Logout endpoint
│       ├── admin/
│       │   ├── testimonials/
│       │   │   └── route.ts     # Admin testimonials (protected)
│       │   └── enquiries/
│       │       └── route.ts     # Admin enquiries (protected)
│       ├── testimonials/
│       │   └── route.ts         # Public testimonial submission
│       └── enquiries/
│           └── route.ts         # Public enquiry submission
├── models/
│   ├── User.ts                  # Admin user schema
│   ├── Testimonial.ts           # Testimonial schema
│   └── Enquiry.ts               # Enquiry schema
├── components/
│   └── admin/
│       ├── TestimonialsPanel.tsx # Testimonials management UI
│       └── EnquiriesPanel.tsx    # Enquiries management UI
├── lib/
│   ├── db.ts                    # MongoDB connection
│   └── auth.ts                  # Authentication utilities
└── middleware.ts                # Route protection middleware
```

## 🔐 Authentication Flow

### Login Process

1. User visits `/admin/login`
2. Enters email and password
3. Credentials are sent to `/api/auth/login`
4. Server validates against MongoDB User collection
5. If valid, JWT token is created and set as `httpOnly` cookie
6. User is redirected to `/admin` dashboard

### Route Protection

- Next.js `middleware.ts` protects all `/admin/*` routes (except `/admin/login`)
- On each request, middleware verifies the JWT token
- Invalid/missing tokens redirect to login page

## 📊 Dashboard Features

### Testimonials Panel

- **View All Testimonials** - List of all submitted testimonials
- **Status Management** - Toggle testimonials between "approved" and "pending"
- **Display Count** - Shows total and approved count
- **Scrollable List** - Fixed height with overflow for large data sets

**Fields:**
- `name` - Testimonial author
- `message` - Testimonial text
- `status` - "approved" or "pending"
- `createdAt` - Submission date

### Enquiries Panel

- **View All Enquiries** - List of customer enquiries sorted by newest first
- **Quick Preview** - Shows first 2 lines of message
- **Detailed View** - Click any enquiry to see full message
- **Email Reply** - Direct "Reply via Email" button in detail view
- **Scrollable List** - Fixed height with overflow

**Fields:**
- `name` - Customer name
- `email` - Customer email
- `message` - Enquiry message
- `createdAt` - Submission timestamp

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email and password
- `POST /api/auth/logout` - Logout and clear session

### Admin Routes (Protected)
- `GET /api/admin/testimonials` - Fetch all testimonials
- `PUT /api/admin/testimonials` - Update testimonial status
- `GET /api/admin/enquiries` - Fetch all enquiries

### Public Routes
- `POST /api/testimonials` - Submit new testimonial
- `POST /api/enquiries` - Submit new enquiry

## 🎨 Design System Integration

The admin dashboard uses the same design system as the main website:

**Colors:**
- `background` - Deep charcoal canvas (HSL: 240 6% 5%)
- `foreground` - Light cream text (HSL: 40 30% 94%)
- `primary` - Signature muted gold (HSL: 38 45% 60%)
- `card` - Elevated surface (HSL: 240 6% 7%)
- `border` - Subtle dividers (HSL: 240 6% 15%)

**Typography:**
- Uses "Fraunces" for headings (elegant serif)
- Uses "Inter" for body text (clean sans-serif)

**Components:**
- Consistent button styles
- Card layouts matching main site
- Same spacing utilities (px, py, m, p)
- Consistent input and form styling

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret for signing JWT tokens | `your-secret-key` |
| `ADMIN_EMAIL` | Default admin email | `admin@sanchiti.com` |
| `ADMIN_PASSWORD` | Default admin password | `changeme123` |

### Changing Admin Password

1. Login to the admin dashboard
2. Currently, you'll need to update the password directly in MongoDB:
   ```bash
   # In MongoDB Compass or CLI
   db.users.updateOne(
     { email: "admin@sanchiti.com" },
     { $set: { password: "newPassword" } }
   )
   ```

To add a password change feature, create a new API route at `/api/admin/change-password`.

## 🔍 Monitoring & Debugging

### Check Admin User

```bash
# In MongoDB Compass
db.users.findOne({ email: "admin@sanchiti.com" })
```

### View Testimonials

```bash
# In MongoDB Compass
db.testimonials.find()
```

### View Enquiries

```bash
# In MongoDB Compass
db.enquiries.find()
```

## 🚨 Security Considerations

1. **Always change the default admin password** after first login
2. **Use strong JWT_SECRET** in production (min 32 characters)
3. **Enable HTTPS** in production
4. **Set secure cookie flags** - already configured for production
5. **Validate all inputs** - schemas use MongoDB validation
6. **Hash passwords** - using bcrypt with salt rounds of 10

## 📝 Common Tasks

### Create New Admin User

```typescript
// Using MongoDB Compass
// Create a new document in "users" collection
{
  email: "newadmin@sanchiti.com",
  password: "hashed_password_here", // Use bcrypt to hash
  role: "admin",
  createdAt: ISODate(),
  updatedAt: ISODate()
}
```

Or use the seed script and modify the credentials.

### Export Testimonials Data

```javascript
// In MongoDB Compass, run aggregation
db.testimonials.find({ status: "approved" }).toArray()
```

### Bulk Update Status

```javascript
// Approve all pending testimonials
db.testimonials.updateMany(
  { status: "pending" },
  { $set: { status: "approved" } }
)
```

## 🆘 Troubleshooting

### "Login Failed" Error
- Check MONGODB_URI in .env.local
- Verify admin user exists in database
- Check bcrypt is correctly installed: `npm list bcrypt`

### "Unauthorized" on Protected Routes
- Verify JWT_SECRET matches in middleware and auth file
- Check cookie is being set: Open Dev Tools → Application → Cookies
- Ensure cookie has `adminToken` name

### MongoDB Connection Issues
- Verify MONGODB_URI is correct
- Check IP is whitelisted in MongoDB Atlas
- Ensure credentials are URL-encoded if they contain special characters

### Styling Not Applied
- Clear Tailwind cache: `rm -rf .next`
- Restart dev server: Stop and `npm run dev`
- Verify all files in `src/` are included in tailwind.config.ts

## 📚 Next Steps

1. **Add password change functionality** - Create `/api/admin/change-password`
2. **Add email notifications** - Notify admin when new enquiry arrives
3. **Add bulk actions** - Approve/delete multiple testimonials at once
4. **Add search/filter** - Filter testimonials by status or date
5. **Add analytics** - Dashboard with testimonials and enquiries stats
6. **Add user management** - Create/edit/delete admin users

## 📞 Support

For issues or questions:
1. Check MongoDB logs
2. Review Next.js build errors
3. Check browser console for client-side errors
4. Verify all environment variables are set

---

Happy managing! 🎉

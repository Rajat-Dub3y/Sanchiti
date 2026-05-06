import * as dotenv from 'dotenv';

// Load environment variables FIRST
dotenv.config({ path: 'D:\\Projects\\sanchiti_v1\\.env.local' });

console.log('Loading environment variables...');
console.log('Current directory:', process.cwd());
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Set' : 'Not set');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Set' : 'Not set');

import connectDB from '../src/lib/db';
import User from '../src/models/User';
import Testimonial from '../src/models/Testimonial';
import Enquiry from '../src/models/Enquiry';

async function seed() {
  try {
    await connectDB();
    console.log('Connected to MongoDB');

    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@sanchiti.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'changeme123';

    const existingUser = await User.findOne({ email: adminEmail });
    if (existingUser) {
      console.log(`Admin user ${adminEmail} already exists`);
    } else {
      const user = new User({
        email: adminEmail,
        password: adminPassword,
        role: 'admin',
      });
      await user.save();
      console.log(`✓ Created admin user: ${adminEmail}`);
      console.log(`  Password: ${adminPassword}`);
    }

    // Create sample testimonials
    const sampleTestimonials = [
      {
        name: 'Rajesh Kumar',
        message: 'Sanchiti Digital completely transformed our online presence. Their team is professional and responsive.',
        status: 'approved',
      },
      {
        name: 'Priya Patel',
        message: 'Excellent service! They understood our brand vision perfectly and delivered beyond expectations.',
        status: 'approved',
      },
      {
        name: 'Vikram Singh',
        message: 'The design and functionality of our new website is incredible. Would definitely recommend!',
        status: 'pending',
      },
    ];

    const existingTestimonials = await Testimonial.countDocuments();
    if (existingTestimonials === 0) {
      await Testimonial.insertMany(sampleTestimonials);
      console.log(`✓ Created ${sampleTestimonials.length} sample testimonials`);
    }

    // Create sample enquiries
    const sampleEnquiries = [
      {
        name: 'Amit Sharma',
        email: 'amit@example.com',
        message: 'We are looking for a complete digital transformation package for our e-commerce business.',
      },
      {
        name: 'Neha Verma',
        email: 'neha@example.com',
        message: 'Can you help us with social media management and content creation?',
      },
    ];

    const existingEnquiries = await Enquiry.countDocuments();
    if (existingEnquiries === 0) {
      await Enquiry.insertMany(sampleEnquiries);
      console.log(`✓ Created ${sampleEnquiries.length} sample enquiries`);
    }

    console.log('\n✓ Database seeding completed successfully!');
    console.log('\nLogin credentials:');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log('\nIMPORTANT: Change the password after first login!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();

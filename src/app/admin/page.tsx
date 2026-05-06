'use client';

import { useEffect, useState } from 'react';
import { TestimonialsPanel } from '@/components/admin/TestimonialsPanel';
import { EnquiriesPanel } from '@/components/admin/EnquiriesPanel';

export default function AdminDashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated by making a request to a protected endpoint
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/testimonials');
        if (response.status === 401) {
          window.location.href = '/admin/login';
        } else {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Dashboard Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage testimonials and customer enquiries</p>
      </div>

      {/* Panels Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Testimonials Panel */}
        <div className="lg:col-span-1">
          <TestimonialsPanel />
        </div>

        {/* Enquiries Panel */}
        <div className="lg:col-span-1">
          <EnquiriesPanel />
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Testimonial {
  _id: string;
  name: string;
  message: string;
  status: 'approved' | 'pending';
  createdAt: string;
}

export function TestimonialsPanel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/testimonials');
      if (!response.ok) throw new Error('Failed to fetch testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (err) {
      setError('Failed to load testimonials');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'approved' ? 'pending' : 'approved';
    setUpdating(id);

    try {
      const response = await fetch('/api/admin/testimonials', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!response.ok) throw new Error('Failed to update testimonial');

      const updatedTestimonial = await response.json();
      setTestimonials((prev) =>
        prev.map((t) => (t._id === id ? updatedTestimonial : t))
      );
    } catch (err) {
      console.error('Error updating testimonial:', err);
      alert('Failed to update testimonial');
    } finally {
      setUpdating(null);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Testimonials</h2>
        <p className="text-sm text-muted-foreground">
          {testimonials.length} total • {testimonials.filter((t) => t.status === 'approved').length} approved
        </p>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-4 bg-destructive/15 border border-destructive/30 rounded-lg p-3">
          <p className="text-sm text-destructive flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {error}
          </p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && testimonials.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No testimonials yet</p>
        </div>
      )}

      {/* List */}
      {!loading && testimonials.length > 0 && (
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-secondary/20 border border-border/50 rounded-lg p-4 hover:border-border/80 transition-colors"
            >
              {/* Name and Status */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-medium text-foreground">{testimonial.name}</h3>
                <button
                  onClick={() => toggleStatus(testimonial._id, testimonial.status)}
                  disabled={updating === testimonial._id}
                  className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded transition-colors ${
                    testimonial.status === 'approved'
                      ? 'bg-accent/20 text-accent hover:bg-accent/30'
                      : 'bg-muted/20 text-muted-foreground hover:bg-muted/30'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {updating === testimonial._id ? (
                    <span className="animate-spin">⋯</span>
                  ) : testimonial.status === 'approved' ? (
                    <>
                      <CheckCircle className="w-3 h-3" />
                      Approved
                    </>
                  ) : (
                    <>
                      <Clock className="w-3 h-3" />
                      Pending
                    </>
                  )}
                </button>
              </div>

              {/* Message */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-2 line-clamp-2">
                {testimonial.message}
              </p>

              {/* Date */}
              <p className="text-xs text-muted-foreground/70">
                {new Date(testimonial.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

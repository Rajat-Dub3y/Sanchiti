'use client';

import { useEffect, useState } from 'react';
import { Mail, AlertCircle } from 'lucide-react';

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export function EnquiriesPanel() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/enquiries');
      if (!response.ok) throw new Error('Failed to fetch enquiries');
      const data = await response.json();
      setEnquiries(data);
    } catch (err) {
      setError('Failed to load enquiries');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-1">Enquiries</h2>
        <p className="text-sm text-muted-foreground">{enquiries.length} total</p>
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
      {!loading && enquiries.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No enquiries yet</p>
        </div>
      )}

      {/* List */}
      {!loading && enquiries.length > 0 && (
        <div className="space-y-3 max-h-[600px] overflow-y-auto">
          {enquiries.map((enquiry) => (
            <div
              key={enquiry._id}
              onClick={() => setSelectedEnquiry(enquiry)}
              className="bg-secondary/20 border border-border/50 rounded-lg p-4 hover:border-primary/50 cursor-pointer hover:bg-secondary/30 transition-all"
            >
              {/* Name and Email */}
              <div className="mb-2">
                <h3 className="font-medium text-foreground">{enquiry.name}</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {enquiry.email}
                </p>
              </div>

              {/* Message Preview */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-2 line-clamp-2">
                {enquiry.message}
              </p>

              {/* Date */}
              <p className="text-xs text-muted-foreground/70">
                {new Date(enquiry.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Enquiry Details Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border">
            {/* Modal Header */}
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{selectedEnquiry.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedEnquiry.email}</p>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Date */}
              <p className="text-xs text-muted-foreground mb-4">
                {new Date(selectedEnquiry.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>

              {/* Full Message */}
              <div className="bg-secondary/20 border border-border/50 rounded-lg p-4">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {selectedEnquiry.message}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href={`mailto:${selectedEnquiry.email}`}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Reply via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

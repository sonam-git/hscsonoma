"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface AnnouncementData {
  image: string | null;
  alt?: string;
}

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false); // Start closed until we fetch data
  const [announcementData, setAnnouncementData] = useState<AnnouncementData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch announcement data from API
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        // Check if user has already seen the modal
        const hasSeenModal = localStorage.getItem('announcement-modal-seen');
        
        if (hasSeenModal === 'true') {
          setLoading(false);
          return; // Don't show modal if already seen
        }

        const response = await fetch('/api/announcement');
        const data: AnnouncementData = await response.json();
        
        setAnnouncementData(data);
        
        // Only open modal if there's an image
        if (data.image) {
          setOpen(true);
        }
      } catch (error) {
        console.error('Error fetching announcement:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleClose = () => {
    setOpen(false);
    // Mark that user has seen the modal
    localStorage.setItem('announcement-modal-seen', 'true');
  };

  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose(); // Use handleClose to also save to localStorage
      }
    };

    const trapFocus = (e: KeyboardEvent) => {
      const modal = document.querySelector('[role="dialog"]');
      if (!modal) return;
      
      const focusableElements = modal.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.key === "Tab") {
        if (e.shiftKey) { // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else { // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("keydown", trapFocus);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("keydown", trapFocus);
    };
  }, [open]);

  // Don't render if loading, no data, or no image
  if (loading || !open || !announcementData || !announcementData.image) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcement-modal-title"
      tabIndex={-1}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-2xl mx-4 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/90 animate-fade-in"
        style={{
          boxShadow: '0 0 60px rgba(251, 191, 36, 0.5), 0 0 100px rgba(251, 191, 36, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="announcement-modal-title" className="sr-only">
          Announcement
        </h2>
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-red-600 hover:scale-110 text-3xl font-bold transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 shadow-lg"
          onClick={handleClose}
          aria-label="Close announcement"
          type="button"
        >
          &times;
        </button>

        {/* Image */}
        <div className="relative w-full h-auto bg-gradient-to-br from-orange-100 to-yellow-50">
          <Image
            src={announcementData.image}
            alt={announcementData.alt || "Special Announcement"}
            width={896}
            height={504}
            className="w-full h-auto object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            quality={95}
          />
        </div>
      </div>
    </div>
  );
}
import { NextResponse } from 'next/server';
import { getHomeEvents } from '@/lib/storyblok-home';

export async function GET() {
  try {
    const events = await getHomeEvents(20); // Fetch up to 20 upcoming events
    
    console.log('📅 API /events - Raw events from Storyblok:', events.length);
    
    // Filter for future events or events without dates (TBD)
    const now = new Date();
    const upcomingEvents = events
      .filter((event) => {
        // Include events with no date or invalid date (they're TBD)
        if (!event.date || event.date.trim() === '') {
          console.log(`📅 Including event with no date: ${event.title}`);
          return true;
        }
        const eventDate = new Date(event.date);
        // Check if date is valid
        if (isNaN(eventDate.getTime())) {
          console.log(`📅 Including event with invalid date: ${event.title}`);
          return true;
        }
        const isFuture = eventDate >= now;
        console.log(`📅 Event "${event.title}" date: ${event.date}, isFuture: ${isFuture}`);
        return isFuture;
      })
      .map((event) => ({
        id: event.id,
        title: event.title,
        date: event.date || '',
        time: event.time || '',
        location: event.location || '',
        description: event.description || '',
        image: event.image || '',
        registrationUrl: event.registrationUrl || '',
        isFeatured: event.isFeatured || false,
      }))
      .sort((a, b) => {
        // Sort events with dates first, then by date ascending
        // Events without dates go to the end
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });

    console.log('📅 API /events - Filtered upcoming events:', upcomingEvents.length);
    
    return NextResponse.json({ events: upcomingEvents });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ events: [] });
  }
}

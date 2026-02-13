import { NextResponse } from 'next/server';
import { getHomeEvents } from '@/lib/storyblok-home';

export async function GET() {
  try {
    const events = await getHomeEvents(20); // Fetch up to 20 upcoming events
    
    // Filter for future events only and format
    const now = new Date();
    const upcomingEvents = events
      .filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= now;
      })
      .map((event) => ({
        id: event.id,
        title: event.title,
        date: event.date,
        time: event.time,
        location: event.location,
        description: event.description,
        image: event.image,
        registrationUrl: event.registrationUrl,
        isFeatured: event.isFeatured,
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return NextResponse.json({ events: upcomingEvents });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ events: [] });
  }
}

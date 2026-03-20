// app/api/youtube/route.ts

export async function GET() {
  if (!process.env.YOUTUBE_API_KEY) {
    return Response.json(
      { error: "No Youtube API key found", subscribers: 0 },
      { status: 500 }
    );
  }

  try {
    const channelId = "UCVjG5MG2AKlT-rXry0YgEwQ";
    const apiKey = process.env.YOUTUBE_API_KEY;

    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );
    
    if (!statsResponse.ok) {
      const errorData = await statsResponse.json();
      console.error('YouTube API error:', errorData);
      return Response.json(
        { error: "YouTube API error", subscribers: 0 },
        { status: statsResponse.status }
      );
    }
    
    const statsData = await statsResponse.json();
    
    // Check if items exist
    if (!statsData.items || statsData.items.length === 0) {
      return Response.json(
        { error: "Channel not found", subscribers: 0 },
        { status: 404 }
      );
    }
    
    const subscribers = statsData.items[0].statistics.subscriberCount;

    return Response.json({
      subscribers,
    });
  } catch (error) {
    console.error('YouTube API error:', error);
    return Response.json(
      { error: `Something went wrong: ${error}`, subscribers: 0 },
      { status: 500 }
    );
  }
}

export const revalidate = 86400;
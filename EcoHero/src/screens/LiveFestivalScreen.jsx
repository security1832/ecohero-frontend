import React from 'react';
import Media from '../components/Media';

const dummyEvents = [
  {
    id: 1,
    title: 'Global Eco-Olympics',
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    tickets: 0,
    stages: ['Solar Sprint', 'Wind Relay'],
  },
  {
    id: 2,
    title: 'Eco Music Fest',
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    tickets: 19.99,
    stages: ['Main Stage', 'Acoustic Lounge'],
  },
  {import React from 'react';
    import Media from '../components/Media';
    
    const dummyEvents = [
      {
        id: 1,
        title: 'Global Eco-Olympics',
        media: { url: 'https://via.placeholder.com/300', type: 'live' },
        tickets: 0,
        stages: ['Solar Sprint', 'Wind Relay'],
      },
      {
        id: 2,
        title: 'Eco Music Fest',
        media: { url: 'https://via.placeholder.com/300', type: 'live' },
        tickets: 19.99,
        stages: ['Main Stage', 'Acoustic Lounge'],
      },
      {
        id: 3,
        title: 'Virtual Eco-Protest',
        media: { url: 'https://via.placeholder.com/300', type: 'live' },
        tickets: 0,
        stages: ['Main Rally', 'Youth Stage'],
      },
      {
        id: 4,
        title: 'Eco-Karaoke Night',
        media: { url: 'https://via.placeholder.com/300', type: 'live' },
        tickets: 0,
        stages: ['Pop Hits', 'Eco Anthems'],
      },
      {
        id: 5,
        title: 'Eco-Oscars',
        media: { url: 'https://via.placeholder.com/300', type: 'live' },
        tickets: 19.99,
        stages: ['Red Carpet', 'Awards Stage'],
      },
      {
        id: 6,
        title: 'Eco-Wedding Gala',
        media: { url: 'https://via.placeholder.com/300', type: 'live' },
        tickets: 0,
        stages: ['Ceremony', 'Reception'],
      },
      {
        id: 7,
        title: 'Global Eco-Carnival',
        media: { url: 'https://via.placeholder.com/300', type: 'live' },
        tickets: 0,
        stages: ['Main Parade', 'Cultural Floats'],
      },
    ];
    
    const LiveFestivalScreen = () => {
      const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
      const buyTicket = (title, price) =>
        alert(`Joining ${title} for ${price > 0 ? `$${price}` : 'free'}`);
      const buyBackstagePass = () => alert('Purchasing backstage pass ($99.99)');
      const joinDebate = () => alert('Joining eco-debate');
      const joinVirtualStage = (stage) => alert(`Joining virtual stage: ${stage}`);
    
      return (
        <div className="p-4 bg-gray-100 min-h-screen">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Live Eco Spectacles</h2>
          <p className="text-gray-600 mb-4">Join live eco-events and earn tokens!</p>
          {dummyEvents.map((event) => (
            <div key={event.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
              <h3 className="text-green-700 font-semibold">{event.title}</h3>
              <Media
                src={event.media.url}
                alt={event.title}
                type={event.media.type}
                isLive={true}
                onApplyARFilter={applyARFilter}
              />
              <p className="text-gray-800">Stages: {event.stages.join(', ')}</p>
              <div className="flex flex-wrap mt-2">
                {event.stages.map((stage, index) => (
                  <button
                    key={index}
                    onClick={() => joinVirtualStage(stage)}
                    className="bg-blue-600 text-white p-2 rounded mt-2 mr-2"
                    aria-label={`Join stage ${stage}`}
                  >
                    Join {stage}
                  </button>
                ))}
              </div>
              <button
                onClick={() => buyTicket(event.title, event.tickets)}
                className="bg-green-600 text-white p-2 rounded mt-2"
                aria-label={`Join ${event.title}`}
              >
                Join {event.tickets > 0 ? `($${event.tickets})` : '(Free)'}
              </button>
              <button
                onClick={buyBackstagePass}
                className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
                aria-label="Buy backstage pass"
              >
                Backstage Pass ($99.99)
              </button>
              {event.title.includes('Protest') && (
                <button
                  onClick={joinDebate}
                  className="bg-pink-600 text-white p-2 rounded mt-2 ml-2"
                  aria-label="Join debate"
                >
                  Join Debate
                </button>
              )}
            </div>
          ))}
        </div>
      );
    };
    
    export default LiveFestivalScreen;
    id: 3,
    title: 'Virtual Eco-Protest',
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    tickets: 0,
    stages: ['Main Rally', 'Youth Stage'],
  },
  {
    id: 4,
    title: 'Eco-Karaoke Night',
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    tickets: 0,
    stages: ['Pop Hits', 'Eco Anthems'],
  },
  {
    id: 5,
    title: 'Eco-Oscars',
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    tickets: 19.99,
    stages: ['Red Carpet', 'Awards Stage'],
  },
  {
    id: 6,
    title: 'Eco-Wedding Gala',
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    tickets: 0,
    stages: ['Ceremony', 'Reception'],
  },
  {
    id: 7,
    title: 'Global Eco-Carnival',
    media: { url: 'https://via.placeholder.com/300', type: 'live' },
    tickets: 0,
    stages: ['Main Parade', 'Cultural Floats'],
  },
];

const LiveFestivalScreen = () => {
  const applyARFilter = (filter) => alert(`Applying ${filter} AR filter`);
  const buyTicket = (title) =>
    alert(`Joining ${title} for ${title.includes('Eco-Oscars') || title.includes('Music Fest') ? '$19.99' : 'free'}`);
  const buyBackstagePass = () => alert('Purchasing backstage pass');
  const joinDebate = () => alert('Joining eco-debate');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Live Eco Spectacles</h2>
      {dummyEvents.map((event) => (
        <div key={event.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-green-700 font-semibold">{event.title}</h3>
          <Media
            src={event.media.url}
            alt={event.title}
            type={event.media.type}
            isLive={true}
            onApplyARFilter={applyARFilter}
          />
          <p className="text-gray-800">Stages: {event.stages.join(', ')}</p>
          <button
            onClick={() => buyTicket(event.title)}
            className="bg-green-600 text-white p-2 rounded mt-2"
            aria-label={`Join ${event.title}`}
          >
            Join {event.tickets > 0 ? `($${event.tickets})` : '(Free)'}
          </button>
          <button
            onClick={buyBackstagePass}
            className="bg-purple-600 text-white p-2 rounded mt-2 ml-2"
            aria-label="Buy backstage pass"
          >
            Backstage Pass ($99.99)
          </button>
          {event.title.includes('Protest') && (
            <button
              onClick={joinDebate}
              className="bg-blue-600 text-white p-2 rounded mt-2 ml-2"
              aria-label="Join debate"
            >
              Join Debate
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default LiveFestivalScreen;
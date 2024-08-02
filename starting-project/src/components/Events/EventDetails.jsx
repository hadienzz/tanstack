import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useEffect } from 'react';

export default function EventDetails() {
  const data = useLoaderData()

  const { event } = data

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        <header>
          <h1>{event.title}</h1>
          <nav>
            <button>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/images/${event.image}`} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{event.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{event.date} @ {event.time}</time>
            </div>
            <p id="event-details-description">{event.description}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/events/${params.id}`)
  if (!response.ok) throw new Error('Failed to fetch data...')
  const data = await response.json()
  // console.log(data)

  return data
}
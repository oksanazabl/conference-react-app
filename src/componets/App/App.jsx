import { PageTitle } from '../PageTitle/PageTitle';
import { EventBoard } from '../EventBoard/EventBoard';
import upcomingEvents from '../../upcoming-events.json';


export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core World Coalition Conference" />
      <EventBoard  events={upcomingEvents}/>
    </div>
  );
};


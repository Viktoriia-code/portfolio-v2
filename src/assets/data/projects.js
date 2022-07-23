import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Name num.1',
    desc:
      'Comming soon...',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Name num.2',
    desc:
      'Comming soon...',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Name num.3',
    desc:
      'Comming soon...',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Name num.4",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Name num.5',
    desc:
      'Comming soon...',
    img: ProjectImg,
  },
];

export default projects;

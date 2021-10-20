import "./curriculum.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBriefcase} from '@fortawesome/free-solid-svg-icons';


export default function Curriculum() {
  return (
    <div className="curriculum" id="curriculum">
      <div className="education">
        <FontAwesomeIcon icon={faBookOpen} size="6x"></FontAwesomeIcon>
        <ul>
          <li>
            <h3>Le Wagon</h3>
            <h6>Description: </h6>
            <span className="spanCv">
              - Ruby on rails
              - HTML & CSS
              - React
              - PostgreSQL
            </span>
          </li>
          <li>
          <h3>Escola Superior Comunicação Social</h3>
            <h6>Description: </h6>
            <span className="spanCv">
              - Ruby on rails
              - HTML & CSS
              - React
              - PostgreSQL
            </span>
          </li>
          <li></li>
        </ul>
      </div>
      <div>
      <FontAwesomeIcon icon={faBriefcase} size="6x"></FontAwesomeIcon>

      </div>
    </div>
  )
}
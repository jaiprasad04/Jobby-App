import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    title,
    companyLogoUrl,
    description,
    employmentType,
    location,
    packagePerAnnum,
    rating,
    id,
  } = jobData

  return (
    <Link to={`/jobs/${id}`} className="item-link">
      <li className="job-card-item">
        <div className="company-logo-name-location-contai">
          <div className="company-logo-and-name-container">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="company-logo"
            />
            <div className="company-name-container">
              <h1 className="company-name">{title}</h1>
              <div className="rating-container">
                <BsStarFill className="rating-icon" />
                <p className="company-rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="company-location-type-salary-container">
            <div className="company-location-type-container">
              <div className="location-container">
                <MdLocationOn className="location-icon" />
                <p className="text">{location}</p>
              </div>
              <div className="employe-type-container">
                <BsFillBriefcaseFill className="briefcase-icon" />
                <p className="text">{employmentType}</p>
              </div>
            </div>
            <p className="package">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="horizontal-line" />
        <h1 className="company-description">Description</h1>
        <p className="company-description-text">{description}</p>
      </li>
    </Link>
  )
}

export default JobCard

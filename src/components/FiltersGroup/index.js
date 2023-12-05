import {BsSearch} from 'react-icons/bs'

import ProfileDetails from '../ProfileDetails'

import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    changeSearchInput,
    employmentTypesList,
    salaryRangesList,
    changeEmployeeList,
    changeSalary,
    getAllJobs,
  } = props

  const onChangeSearchInput = event => {
    changeSearchInput(event)
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      getAllJobs()
    }
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search"
        value={searchInput}
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      <button
        type="button"
        data-testid="searchButton"
        className="search-button-container"
        onClick={getAllJobs}
        label="button"
      >
        <BsSearch className="search-icon" />
      </button>
    </div>
  )

  const renderEmploymentType = () => (
    <div className="employment-type-container">
      <h1 className="employment-type-heading">Type of Employment</h1>
      <ul className="employment-type-container">
        {employmentTypesList.map(eachType => {
          const onSelectEmployeeType = event => {
            changeEmployeeList(event.target.value)
          }

          return (
            <li
              className="employment-item"
              key={eachType.employmentTypeId}
              onChange={onSelectEmployeeType}
            >
              <input
                type="checkbox"
                id={eachType.employmentTypeId}
                className="check-input"
                value={eachType.employmentTypeId}
              />
              <label
                htmlFor={eachType.employmentTypeId}
                className="check-label"
              >
                {eachType.label}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const renderSalaryRange = () => (
    <div className="salary-range-container">
      <h1 className="salary-range-heading">Salary Range</h1>
      <ul className="salary-range-list-container">
        {salaryRangesList.map(eachSalary => {
          const onClickSalary = () => {
            changeSalary(eachSalary.salaryRangeId)
          }

          return (
            <li
              key={eachSalary.salaryRangeId}
              onClick={onClickSalary}
              className="salary-item"
            >
              <input
                type="radio"
                id={eachSalary.salaryRangeId}
                name="salary"
                className="check-input"
              />
              <label htmlFor={eachSalary.salaryRangeId} className="check-label">
                {eachSalary.label}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup

import './index.css'

const BrowserHistory = props => {
  const {historyList, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-items">
      <div className="history-info">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logoUrl" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="button"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory

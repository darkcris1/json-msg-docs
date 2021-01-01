import Link from './common/Link'

const AccountList = () => {
  return (
    <div className="account-list">
      <ul>
        <li>
          <Link href={`https://www.github.com/darkcris1/json-msg`}>
            <img
              src="/github.svg"
              width="30"
              height="30"
              alt="json-msg repository"
            />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default AccountList

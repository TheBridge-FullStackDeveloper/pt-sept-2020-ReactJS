import './index.scss'

const icons = {
  accept: '✨',
  warning: '🚀',
  danger: '👾',
}

const Button = ({ text = 'LAUNCH', type = 'accept' }) => {
  return (
    <div className={`button button--hover button--${type}`}>
      <label className="button__text">{text.toUpperCase()}</label>
      <label className="button__icon">{icons[type]}</label>
    </div>
  )
}

export default Button

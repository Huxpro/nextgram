import Modal from '../components/modal'
import Link from 'next/link'

export default class extends React.Component {
  static getInitialProps () {
    return {
      // dummy data
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.id) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    this.props.url.back()
  }

  showPhoto (e, id) {
    e.preventDefault()
    console.log(this.props.url);
    this.props.url.push('/photo?id=' + id)
  }

  render () {
    return (
      <ul>
        {
          this.props.url.query.id &&
            <Modal
              id={this.props.url.query.id}
              onDismiss={() => this.dismissModal()}
            />
        }
        {
          this.props.photos.map((id) => (
            <div key={id} className="photo">
              <a href={'/photo?id=' + id}
                onClick={(e) => this.showPhoto(e, id)}>
                {id}
              </a>
              <br />
              <Link href={'/photo?id=' + id}>{`<Link/> - ${id}`}</Link>
            </div>
          ))
        }
        <style jsx>{`
          ul {
            padding: 50px;
            text-align: center;
          }
          .photo{
            display: inline-block;
          }
          .photo > a {
            color: #333;
            vertical-align: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }
          .photo > a:hover{
            border-color: blue;
          }
        `}</style>
      </ul>
    )
  }
}

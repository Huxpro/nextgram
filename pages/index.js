import Router from 'next/router'
import Link from 'next/link'
import Modal from '../components/modal'

export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling espace close
  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  render () {
    const { url, photos } = this.props

    return (
      <div className='list'>
        { url.query.photoId && <Modal id={url.query.photoId}/> }
        {
          photos.map((id) => (
            <div key={id} className='photo'>
              <Link
                href={`/?photoId=${id}`}
                as={`/photo?id=${id}`}>
                <a className='photoLink'>{id}</a>
              </Link>
            </div>
          ))
        }
        <style jsx>{`
          .list {
            padding: 50px;
            text-align: center;
          }

          .photo {
            display: inline-block;
          }

          .photoLink {
            color: #333;
            verticalAlign: middle;
            cursor: pointer;
            background: #eee;
            display: inline-block;
            width: 250px;
            height: 250px;
            line-height: 250px;
            margin: 10px;
            border: 2px solid transparent;
          }

          .photoLink:hover {
            borderColor: blue;
          }
        `}</style>
      </div>
    )
  }
}

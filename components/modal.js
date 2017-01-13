import Photo from './frame'
import Link from 'next/link'

export default ({ id }) => (
  <div className='shim'>
    <Link href="/">
      <div className="mask" />
    </Link>
    <div className='photo'>
      <Photo id={id} />
    </div>

    <style jsx>{`
      .shim {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }

      .photo {
        position: absolute;
        top: 50%;
        width: 100%;
        margin-top: -250px;
      }

      .mask {
        position: absolute;
        background: rgba(0,0,0,.65);
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

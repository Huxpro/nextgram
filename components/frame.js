import Link from 'next/link'

export default ({ id }) => (
  <div className="photo">
    <div className="image">
      {id}
    </div>

    <div className="sidebar">
      <ul className="sidebar-list">
        <li>
          <Link href='/profile?id=nkzawa'>@nkzawa</Link>
          - Great photo!
        </li>
      </ul>
    </div>
    <style jsx>{`
      .photo {
        height: 500px;
        width: 800px;
        display: inline-block;
        overflow: hidden;
      }
      .image{
        float: left;
        width: 600px;
        height: 500px;
        background: #333;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        line-height: 500px;
        font-size: 40px;
      }
      .sidebar{
        float: right;
        background: #fff;
        width: 200px;
        height: 500px;
        text-align: left;
        box-sizing: border-box;
        padding: 20px;
        font-family: Monaco;
        font-size: 11px;
      }
      .sidebar-list{
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

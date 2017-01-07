export default ({ url: { query: { id } } }) => (
  <main>
    <h1>
      User profile:
      {' '}
      <b>{id}</b>
    </h1>
    <style jsx>{`
      main {
        padding: 100px;
      }
      h1 {
        font: 15px Monaco;
      }
      b {
        color: blue;
      }
    `}</style>
  </main>
)

import Page from '../layouts/main.js'
import Logo from '../components/logo.js'

export default () => (
  <Page>
    <div className="cover nous">
      <div className="w60 h60 mt12 ml12 relative logo"><Logo /> </div>
    </div>
    <div className="cover mountain last" />
    <style jsx global>{`
      .cover {
        width: 94vw;
        min-height: 90vh;
        margin: auto;
        margin-top: 3vw;
        background-size: cover;
        background-position: center right;
      }

      .nous {
        background-image: url('static/nous.jpg');
      }

      .last {
        margin-bottom: 3vw;
      }

      .mountain {
        background-image: url('static/mountain.jpg');
      }

      .logo > svg {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </Page>
)

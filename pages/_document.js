import Document, { Html, Head, Main, NextScript } from "next/document";
import ReportPortal from '../components/Ui/New-Components/Profile/ReportPortal/ReportPortal'


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="portal"></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
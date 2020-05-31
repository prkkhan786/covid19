import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        align="center"
        className="socialbtns"
        style={{ position: "relative", right: "1%" }}
      >
        <ul>
          <li>
            <a
              href="https://twitter.com/prkkhan1"
              className="fa fa-lg fa-twitter"
            ></a>
          </li>

          <li>
            <a
              href="https://github.com/prkkhan786"
              className="fa fa-lg fa-github"
            ></a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/parvez-khan-1b245889/"
              className="fa fa-lg fa-linkedin"
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/travelwithparvez/"
              className="fa fa-lg fa-instagram"
            ></a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCbazSHWpFq-Io2PiehXY2Zw"
              className="fa fa-lg fa-youtube"
            ></a>
          </li>
        </ul>
      </div>
      <p style={{ fontWeight: "bolder" }}>Made with ❤ by Parvez khan.</p>
    </div>
  );
}

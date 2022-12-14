import * as React from "react"

interface Props {
    props: any
}

const NeckIcon = ({props}:Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    xmlSpace="preserve"
    {...props}
  >
    <image
      width={96}
      height={96}
      href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACiFBMVEUAAAD/ppD9lHX+hmP+ elP+h2L9lXT/ooD/nob8kXD/eVL9jmz6n33/nnv/v4D9lnb+fFb+k3L/n4D/zMz7yrn7ybj6ybf6 ybn7ybj6ybj7wK37yLf7ybj/v7//27b5yLf7ybj6ybj6ybj7ybj5yrj/1ar6yrf5ybj7yrj6ybj6 yrf6ybj6yrn6yLn6ybj6ybj6ybj5yrn6ybn6ybj6ybj6ybf7yLf6ybj6ybj7ybf/zLP6ybj6ybf/ v7/7ybj6yLj/qqr5ybj//4D7y7j7yrb5ybn5yLf6ybj5ybj6ybj6ybj6ybj6ybj7ybn6ybj6ybj6 ybj5ybj5ybj5yrf5ybj5yrj5zLn/xrj/zLv7yrj7ybf5ybf4zLb4yLr5ybj4y7f4ybX5yrf5ybj6 ybn7yrj6ybj6ybj6ybj6ybj6ybj7yLj6ybj6ybj7yrf5ybj6ybj4yrn6yLj/w7T7ybf8ybn/xqr5 ybf/yLz6yLf6ybj4y7z6ybj7yrj6ybj7ybf3xbX2yrn/zLj5yLn5ybn5yrn7ybn5yLj6ybj6yLj6 ybn6ybj6ybf6ybj6yLn7ybn7yLj7yLn6ybn6ybj7ybn6ybj8yLf5yLj6yrj/xLH6yrj6yrj6yrf/ dUz/eE//d07/d0/6ybj9lHP9lHT7uaP7uKH+iWb+imf8rpX8sJf6yLf+gl7+g176yLj8rpT/eFD+ hmL+flj+flf+h2P7tp//dk3+hWH+g1//dkz7t6H9lXT+jmv+jGr9lXb6wq//fFX9mnr9mHn7sJn8 rJP8q5L8r5f6w7D6wrD9mHr6x7X+jWv9mnz6yLb6xrP+iGX6x7T6xrX+iWX8oIT/fFb+hGD8ooX+ hF//fVb///+tm5dZAAAAnHRSTlMAF6Tt/uyjFirA/tA1HQSZ/a4IBT56oMfj7v55PQQHWLDy8a9W Bm7m5Ww109IzXvj3W1/9/mM8/Ps5Ct/dCHZwA+cCRD+Kh7y44d7z8OTg1dG3tFxaKygSD0hHuSMl iScmi4j2rMjoxdDsrer0fLP6TW8RckwJgBfEwiKdc6GyHx0ZVLVXf1Pvn5z5y5ORQkF0cY2q6UpP lA26v5la1lfSAAAAAWJLR0TXkLJaPwAAAAd0SU1FB+YLBBAsLg26MWgAAAOLSURBVGje7Zn5W0xR HIcPIsneNiVLpSakholGSlEokrJFdkkJkdEihCSk7EuYybEbkn1NZSdSlvh7VDPN3Nuc773nnrl+ 8JjPT+c8z+e878y5c+9z7jMI2WOPPf9JunXv4aDrEoeevRxlwvd2sqIb08e5rwx4Rye9DkyVcz8b 8f0HDNQJxmHQYDayi6ubu4fC06tKJ5KLXp4KD/ch3kOl0IcNH+GDjbkkJrhsKvr6jfSnxPsHKLE5 V8QEVy3dwFEuNPzRYzA314T513nloLHi/OAQ3hJ8Q1hwk99WjRPjj1fzV2DDLSH+7eou9dAJwvyJ Ybhr7vCINXqhL9AWzSQhfvhkqwXYcJdLvHefO3tgsO5HRAoIpmBCHj7iIB8/4UyePiP1o2B+9FTS Avycw3xRy5m8JNYV00BBDHEBrqu3MBteWcb1deR+LCiYTl6AX1s26c1bi+AdUJ8BCmYCK7D5Y9e8 /2D+GX2E2nGgIB5a8qnRBP2McYNp2PgFas8CBT7QEtxkvLZfmzFu+dYxrG0Cy56gIAxcgw3ff+h/ tja3D1taf+l/t1bDXQ0omI1lSQIomCOPIBEUzJVHkAQKkuURzJN8o0kMfKPNl0ewABQslEewCBSk yCNYDAqWyCNIBQVL5RGAD7tlofIIQpcDghXy8OHfabztaGOAZ8VKufgYryIKguUTkM93q+UTrCEK /HidNGlIFW+2lihI53WUEuhtWcebZRAFibxOpjRBEG8WQRSs51Y0WdIEWbxT+QaiYCO3otgkTeAW yJ35EAW8M4VfqjRBTDZ3tpko2BLBqeSkqKXw1Vu13EuwjXwr5+apzJcgHxVIEWxH+ZrOcVoe/IZQ 2PlFdyC0U4pAi9Au07CoEAnFuE8J+QjtlrBHYXsQ2usrtDv8fVIXt48kHGL2tfdL1Fi1P1KM37FP xpegYnpBaccCbXYhBd6SyAO0fF+az03IQVrBITY+or7XYhgFuWV0/DLGHULoMJ0gnZWPyukEFcwC LZ0ggFlQQicoZRYcoRO4MguO0gm8/7YglllAeQ2KmQXH6ATHmQUVdIITzALKo8tJZgHlo8KDWXCK TqBkFoTQCVTMgiQ6QSazIIpOkMMsyKU6wytzmQXoNM2L7Rl2PkJnxfnltvCRS5wYP1nSfyvWqcwQ 5hdU2sZHKPycEP+8zfy2A142zC9iPrBwEw0+VC9Q/Slkjz32/Pv5A2oFFIIQw/IwAAAAJXRFWHRk YXRlOmNyZWF0ZQAyMDIyLTExLTA0VDE1OjQ0OjQ2KzAxOjAwIkyF0wAAACV0RVh0ZGF0ZTptb2Rp ZnkAMjAyMi0xMS0wNFQxNTo0NDo0NiswMTowMFMRPW8AAAAASUVORK5CYII="
    />
  </svg>
)

export default NeckIcon
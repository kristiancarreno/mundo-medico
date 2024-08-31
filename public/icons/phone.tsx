import React from 'react'
type Props = {
  width?: number
  height?: number
  className?: string
}

function PhoneIco({ width = 30, height = 29, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox='0 0 30 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='Vector'
        d='M29.926 13.0521C29.9207 12.9978 29.9149 12.945 29.9081 12.8927C29.8882 12.7227 29.8645 12.5542 29.8372 12.3862C29.812 12.2212 29.7826 12.0582 29.7522 11.8933C28.4835 5.14338 22.3882 0.0228414 15.0462 0H14.9989C14.9501 0 14.9008 0 14.8519 0.00152276C6.63621 0.0771533 0 6.53925 0 14.5008C0 18.5219 1.6924 22.1608 4.43184 24.7875C4.52636 24.8769 4.62035 24.9682 4.71645 25.056C4.77106 25.1053 4.82724 25.156 4.88343 25.2053C4.89813 25.2195 4.91231 25.2332 4.92859 25.2454C5.19691 25.4855 5.47837 25.7169 5.76875 25.9398C6.68872 26.6463 7.69166 27.227 8.74921 27.6848C8.82168 27.7163 8.89414 27.7478 8.96713 27.7777C10.8123 28.565 12.8529 29 14.9989 29C17.145 29 19.1299 28.5757 20.9567 27.8112C26.2776 25.5839 30 20.4619 30 14.5013C30 14.012 29.9748 13.5282 29.9254 13.0526L29.926 13.0521ZM22.96 21.4237C21.8862 22.6546 20.6453 22.9724 19.027 22.7181C12.0537 21.6258 7.31516 17.0032 6.43352 10.3218C6.39887 10.0624 6.38259 9.80101 6.36998 9.67665C6.36263 8.18079 7.92481 6.48494 9.31632 6.34129C10.3103 6.23977 11.3012 6.80624 11.7108 7.84933C12.0174 8.63153 12.3115 9.46448 12.3456 10.2832C12.3708 10.8512 12.0552 11.5197 11.685 11.9948C11.2713 12.5298 11.141 12.9821 11.3999 13.5856C12.3036 15.7058 13.849 17.2087 16.0297 18.1133C16.6121 18.3569 17.1109 18.3325 17.5882 17.861C18.2813 17.1737 19.1341 17.0138 20.0845 17.2894C20.7488 17.4808 21.4325 17.6138 22.0799 17.8437C23.7597 18.4417 24.1084 20.1111 22.96 21.4248V21.4237Z'
        fill='white'
      />
    </svg>
  )
}

export default PhoneIco

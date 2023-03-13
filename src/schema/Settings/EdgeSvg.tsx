import React from 'react';

interface Props {
  id: string
  stroke: string
}

type EdgeSvgType = ({ id, stroke }: Props) => JSX.Element;

export const EdgeSvg: EdgeSvgType = ({
  id,
  stroke
}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter={`url(#${id})`}>
      <rect
        x="4"
        width="32"
        height="32"
        rx="4"
        fill={`url(#fill${id})`}
        shapeRendering="crispEdges"
      />
    </g>
    <path
      d="M17.4617 11.0255C16.6997 11.1513 16.0384 11.7767 15.8587 12.5314C15.7545 12.9735 15.812 13.4192 16.0384 13.9475C16.0564 13.9907 15.068 15.0653 13.961 16.2046C13.9251 16.2442 13.8676 16.2334 13.6483 16.1615C13.0877 15.9746 12.6025 16.0034 12.0957 16.2585C10.8809 16.8587 10.6257 18.4689 11.5853 19.4285C11.9735 19.8167 12.4371 20 13.005 19.9964C13.5729 19.9928 14.0365 19.7879 14.4211 19.371C14.9674 18.7816 15.1076 17.9406 14.7841 17.1966L14.7014 17.0133L15.7797 15.8812L16.8579 14.749L17.0807 14.8425C17.2784 14.9287 17.3431 14.9359 17.7852 14.9359C18.2272 14.9359 18.2919 14.9287 18.4932 14.8425L18.716 14.749L19.7979 15.8812C20.3909 16.5065 20.8689 17.0349 20.8617 17.0528C20.6784 17.459 20.6497 17.5776 20.6317 17.919C20.6065 18.5336 20.7755 18.9865 21.1996 19.4142C21.5805 19.7987 22.055 20 22.6013 20C23.144 20 23.6112 19.8023 24.003 19.4106C24.578 18.8355 24.7398 17.9693 24.4127 17.2218C24.33 17.0385 24.33 17.0277 24.3911 16.9522C24.4235 16.9091 24.9087 16.3951 25.4694 15.8093L26.4865 14.749L26.7093 14.8425C26.9106 14.9251 26.9789 14.9359 27.3814 14.9359C27.9026 14.9359 28.1254 14.8784 28.4633 14.6592C29.0383 14.289 29.3941 13.6384 29.3941 12.9591C29.3941 12.7147 29.2755 12.2619 29.1533 12.0319C29.0203 11.7875 28.6358 11.4029 28.3842 11.2591C28.1362 11.119 27.6941 11.0004 27.421 11.0004C26.6698 11.0039 25.9618 11.4424 25.6167 12.1217C25.3723 12.5997 25.3759 13.3617 25.6275 13.8505L25.6958 13.9871L25.0201 14.6951C24.6499 15.0833 24.1575 15.5936 23.9311 15.8272L23.5178 16.2478L23.2482 16.1507C23.0182 16.068 22.9211 16.0537 22.6013 16.0537C22.2814 16.0537 22.1808 16.068 21.9471 16.1543L21.6668 16.2513L21.2427 15.8093C20.0279 14.5441 19.5283 14.0086 19.5355 13.9691C19.5391 13.9475 19.5858 13.8253 19.6397 13.6959C19.7152 13.5162 19.7404 13.3832 19.7547 13.1209C19.7763 12.6932 19.726 12.4416 19.5427 12.0822C19.1689 11.3346 18.2883 10.8853 17.4617 11.0255Z"
      fill="white"
    />
    <defs>
      <filter
        id={id}
        x="0"
        y="-4"
        width="40"
        height="44"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_394_4629"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.435294 0 0 0 0 0.435294 0 0 0 0 0.435294 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_backgroundBlur_394_4629"
          result="effect2_dropShadow_394_4629"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_394_4629"
          result="shape"
        />
      </filter>
      <linearGradient
        id={`fill${id}`}
        x1="5.23077"
        y1="1.5"
        x2="38.5687"
        y2="4.62864"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0127841" stopColor={stroke} />
        <stop offset="1" stopColor={stroke} stopOpacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
);
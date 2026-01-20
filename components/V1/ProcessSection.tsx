import React, { useState } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  fibonacci: number;
}

interface ProcessSectionProps {
  process: ProcessStep[];
}

// SVG Background Components
const SierpinskiTriangle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="80%"
    height="80%"
    viewBox="0 0 400 346"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <path id="lev0" fill="#c5d558" d="M0 0,2 0,1 1.732 z" />
      <g id="lev1">
        <use xlinkHref="#lev0" transform="matrix(0.5 0 0 0.5  0  0)" />
        <use xlinkHref="#lev0" transform="matrix(0.5 0 0 0.5  1  0)" />
        <use xlinkHref="#lev0" transform="matrix(0.5 0 0 0.5 0.5 0.866)" />
      </g>
      <g id="lev2">
        <use xlinkHref="#lev1" transform="matrix(0.5 0 0 0.5  0  0)" />
        <use xlinkHref="#lev1" transform="matrix(0.5 0 0 0.5  1  0)" />
        <use xlinkHref="#lev1" transform="matrix(0.5 0 0 0.5 0.5 0.866)" />
      </g>
      <g id="lev3">
        <use xlinkHref="#lev2" transform="matrix(0.5 0 0 0.5  0  0)" />
        <use xlinkHref="#lev2" transform="matrix(0.5 0 0 0.5  1  0)" />
        <use xlinkHref="#lev2" transform="matrix(0.5 0 0 0.5 0.5 0.866)" />
      </g>
      <g id="lev4">
        <use xlinkHref="#lev3" transform="matrix(0.5 0 0 0.5  0  0)" />
        <use xlinkHref="#lev3" transform="matrix(0.5 0 0 0.5  1  0)" />
        <use xlinkHref="#lev3" transform="matrix(0.5 0 0 0.5 0.5 0.866)" />
      </g>
      <g id="lev5">
        <use xlinkHref="#lev4" transform="matrix(0.5 0 0 0.5  0  0)" />
        <use xlinkHref="#lev4" transform="matrix(0.5 0 0 0.5  1  0)" />
        <use xlinkHref="#lev4" transform="matrix(0.5 0 0 0.5 0.5 0.866)" />
      </g>
    </defs>
    <use xlinkHref="#lev5" transform="translate(0,0) scale(200)" />
  </svg>
);

const Phi = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="190%"
    height="100%"
    viewBox="0 0 400 500"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fill="#cbe425"
      d="m178.41 115.87v6.6704q-40.948 10.561-40.948 77.449 0 72.447 50.954 85.231v-107.65q0-23.531 2.9651-34.278 2.9652-10.932 12.97-19.084 10.191-8.3378 24.458-8.3378 25.014 0 46.321 23.531 21.493 23.531 21.493 61.329 0 35.389-22.048 63.182-21.864 27.793-66.147 31.684v76.152h-20.011v-76.152q-38.539-3.3351-61.885-28.719-23.161-25.569-23.161-66.332 0-36.686 21.123-59.847 21.123-23.346 53.918-24.828zm30.016 169.35q58.365-8.7083 58.365-75.411 0-30.757-12.599-51.509-12.414-20.937-29.275-20.937-6.1141 0-10.376 4.4467-4.0749 4.2616-5.1905 10.191-0.92746 5.9292-0.92746 23.346z"
    />
  </svg>
);

const SeedOfLife = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80%"
    height="80%"
    viewBox="0 0 113.95 113.95"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs id="defs3913">
      <filter id="filter3768" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3770" stdDeviation="0.51274281" />
      </filter>
      <filter id="filter3764" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3766" stdDeviation="0.51274281" />
      </filter>
      <filter id="filter3760" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3762" stdDeviation="0.51274281" />
      </filter>
      <filter id="filter3756" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3758" stdDeviation="0.51274281" />
      </filter>
      <filter id="filter3752" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3754" stdDeviation="0.51274281" />
      </filter>
      <filter id="filter3748" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3750" stdDeviation="0.51274281" />
      </filter>
      <filter id="filter3744" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3746" stdDeviation="0.62060327" />
      </filter>
      <filter id="filter3740" colorInterpolationFilters="sRGB">
        <feGaussianBlur id="feGaussianBlur3742" stdDeviation="1.2511475" />
      </filter>
    </defs>
    <g id="layer1" transform="translate(-54.856 -72.53)">
      <g
        id="g3748"
        style={{ stroke: "#cbe425" }}
        transform="matrix(.26078 0 0 .26078 -1.0608 -89.52)"
      >
        <circle
          cx="166.29"
          cy="267.12"
          r="63.13"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3768)",
            stroke: "#cbe425",
            strokeWidth: 2.24,
            fill: "none",
          }}
          transform="matrix(1.6738 0 0 1.6738 102.89 300.36)"
        />
        <circle
          cx="166.29"
          cy="267.12"
          r="63.13"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3764)",
            stroke: "#cbe425",
            strokeWidth: 2.24,
            fill: "none",
          }}
          transform="matrix(1.6738 0 0 1.6738 209.15 298.9)"
        />
        <circle
          cx="166.29"
          cy="267.12"
          r="63.13"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3760)",
            stroke: "#cbe425",
            strokeWidth: 2.24,
            fill: "none",
          }}
          transform="matrix(1.6738 0 0 1.6738 261.55 392.07)"
        />
        <circle
          cx="166.29"
          cy="267.12"
          r="63.13"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3756)",
            stroke: "#cbe425",
            strokeWidth: 2.24,
            fill: "none",
          }}
          transform="matrix(1.6738 0 0 1.6738 47.57 392.07)"
        />
        <circle
          cx="166.29"
          cy="267.12"
          r="63.13"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3752)",
            stroke: "#cbe425",
            strokeWidth: 2.24,
            fill: "none",
          }}
          transform="matrix(1.6738 0 0 1.6738 102.89 483.78)"
        />
        <circle
          cx="166.29"
          cy="267.12"
          r="63.13"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3748)",
            stroke: "#cbe425",
            strokeWidth: 2.24,
            fill: "none",
          }}
          transform="matrix(1.6738 0 0 1.6738 209.15 482.32)"
        />
        <circle
          cx="181.56"
          cy="330.25"
          r="155.15"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3744)",
            stroke: "#cbe425",
            strokeWidth: 2.71,
            fill: "none",
          }}
          transform="matrix(1.3829 0 0 1.3829 181.82 383.2)"
        />
        <circle
          cx="181.56"
          cy="330.25"
          r="155.15"
          style={{
            strokeLinejoin: "round",
            filter: "url(#filter3740)",
            stroke: "#cbe425",
            strokeWidth: 5.47,
            fill: "none",
          }}
          transform="matrix(.68595 0 0 .68595 308.36 613.36)"
        />
      </g>
    </g>
  </svg>
);

const GoldenRatio = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    viewBox="0 0 915 580"
    width="80%"
    height="80%"
    preserveAspectRatio="xMidYMid meet"
    id="svg2"
  >
    <defs id="defs5" />
    <path
      transform="matrix(0,1,1,0,0,0)"
      id="path2782"
      style={{
        opacity: 1,
        fill: "#ffffff",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M 18.898132,563.14957 A 543.94263,543.75146 0 0 1 562.84077,19.398132"
      id="path1873"
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      id="path1875"
      d="M -899.02731,355.46605 A 336.18655,336.06839 0 0 1 -562.84075,19.397675"
      transform="scale(-1,1)"
    />
    <path
      transform="matrix(0,-1,-1,0,0,0)"
      d="m -563.14906,-691.27235 a 207.68251,207.75557 0 0 1 207.68251,-207.75556"
      id="path2762"
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      id="path2764"
      d="M 562.84128,-434.76319 A 128.43051,128.38536 0 0 1 691.27179,-563.14854"
      transform="scale(1,-1)"
    />
    <path
      d="m 562.84184,434.7637 a 79.324539,79.296654 0 0 1 79.32454,-79.29665"
      id="path2766"
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      id="path2768"
      d="m -691.27137,404.55478 a 49.105476,49.088211 0 0 1 49.10548,-49.08821"
      transform="scale(-1,1)"
    />
    <path
      transform="scale(-1)"
      d="m -691.27178,-404.55426 a 30.218561,30.207939 0 0 1 30.21856,-30.20794"
      id="path2770"
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      id="path2772"
      d="m 642.16632,-415.8829 a 18.886414,18.879776 0 0 1 18.88641,-18.87978"
      transform="scale(1,-1)"
    />
    <path
      d="m 642.16683,415.88342 a 11.331649,11.327665 0 0 1 11.33164,-11.32766"
      id="path2774"
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2784"
      d="M 653.49848,415.88344 V 404.55528"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2786"
      d="M 661.05275,415.88294 H 642.16583"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2788"
      d="m 653.49798,412.10688 h 7.55477"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2790"
      d="m 657.27586,412.10738 v 3.77606"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2794"
      d="m 661.05325,404.55428 v 30.20844"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2796"
      d="m 642.16586,404.55478 h 49.10598"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2798"
      d="M 642.16636,434.76372 V 355.46656"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2800"
      d="M 691.27181,434.76322 H 562.84079"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2802"
      d="M 691.27234,355.46658 V 563.14961"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2804"
      d="M 562.8408,355.27506 H 899.21875"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      id="rect2806"
      d="M 562.84129,563.14958 V 19.397678"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="M 18.89815,563.1496 V 18.89761"
      id="path922"
    />
    <path
      id="path924"
      d="M 899.02836,562.64954 V 18.897641"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      d="M 18.89765,18.897107 H 899.5276"
      id="path926"
    />
    <path
      id="path928"
      d="M 18.89765,563.14909 H 899.52759"
      style={{
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      transform="scale(-1,1)"
      d="m -661.05231,412.10681 a 7.5542655,7.5516105 0 0 1 7.55426,-7.55161"
      id="path1028"
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      id="path1030"
      d="m -661.05276,-412.10736 a 3.7768829,3.7755551 0 0 1 3.77688,-3.77556"
      transform="scale(-1)"
    />
    <path
      transform="scale(1,-1)"
      d="m 653.50534,-412.10101 a 3.7768831,3.7755556 0 0 1 3.77689,-3.77556"
      id="path1034"
      style={{
        opacity: 1,
        fill: "none",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#c5d558",
        strokeWidth: 10,
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
);

const RuleOfThirds = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80%"
    height="80%"
    viewBox="0 0 450 300"
    preserveAspectRatio="xMidYMid meet"
  >
    <g>
      <path
        style={{
          fill: "none",
          fillOpacity: 0.75,
          fillRule: "evenodd",
          stroke: "#c5d558",
          strokeWidth: 10,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M 151.75284,300 C 151.01413,0.032524557 151.01413,0.032524557 151.01413,0.032524557"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 0.75,
          fillRule: "evenodd",
          stroke: "#c5d558",
          strokeWidth: 10,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M 303.1273,299.9488 C 302.38859,-2.3619995e-14 302.38859,-2.3619995e-14 302.38859,-2.3619995e-14"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 0.75,
          fillRule: "evenodd",
          stroke: "#c5d558",
          strokeWidth: 10,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M 0.99616808,100.52345 C 450.01048,101.26499 450.01048,101.26499 450.01048,101.26499"
      />
      <path
        style={{
          fill: "none",
          fillOpacity: 0.75,
          fillRule: "evenodd",
          stroke: "#c5d558",
          strokeWidth: 10,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        d="M 2.731043,201 C 451.74535,201.74154 451.74535,201.74154 451.74535,201.74154"
      />
    </g>
  </svg>
);

// Symmetry - Mandala-style radial symmetry pattern
const Symmetry = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(200,200)">
      {/* Outer petal ring */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <path
            d="M 0,-180 Q 50,-120 0,-60 Q -50,-120 0,-180"
            style={{
              fill: "none",
              stroke: "#c5d558",
              strokeWidth: 5,
            }}
          />
        </g>
      ))}
      {/* Inner petal ring */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <g key={angle} transform={`rotate(${angle})`}>
          <path
            d="M 0,-120 Q 30,-85 0,-50 Q -30,-85 0,-120"
            style={{
              fill: "none",
              stroke: "#c5d558",
              strokeWidth: 4,
            }}
          />
        </g>
      ))}
      {/* Center circles */}
      <circle
        r="75"
        style={{ fill: "none", stroke: "#c5d558", strokeWidth: 4 }}
      />
      <circle
        r="40"
        style={{ fill: "none", stroke: "#c5d558", strokeWidth: 3 }}
      />
      <circle r="12" style={{ fill: "#c5d558", stroke: "none" }} />
      {/* Radial lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={angle}
          x1="0"
          y1="-40"
          x2="0"
          y2="-75"
          transform={`rotate(${angle})`}
          style={{
            stroke: "#c5d558",
            strokeWidth: 3,
            strokeOpacity: 0.7,
          }}
        />
      ))}
    </g>
  </svg>
);

// Geometric Harmony - Metatron's Cube inspired pattern
const GeometricHarmony = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(200,200)">
      {/* Outer hexagon of circles */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={angle}
          cx={Math.cos((angle * Math.PI) / 180) * 130}
          cy={Math.sin((angle * Math.PI) / 180) * 130}
          r="65"
          style={{
            fill: "none",
            stroke: "#c5d558",
            strokeWidth: 4,
          }}
        />
      ))}
      {/* Center circle */}
      <circle
        r="65"
        style={{ fill: "none", stroke: "#c5d558", strokeWidth: 5 }}
      />
      {/* Connecting lines forming hexagram */}
      <polygon
        points="0,-130 112.6,65 -112.6,65"
        style={{
          fill: "none",
          stroke: "#c5d558",
          strokeWidth: 3,
          strokeOpacity: 0.8,
        }}
      />
      <polygon
        points="0,130 112.6,-65 -112.6,-65"
        style={{
          fill: "none",
          stroke: "#c5d558",
          strokeWidth: 3,
          strokeOpacity: 0.8,
        }}
      />
      {/* Inner hexagon */}
      <polygon
        points="0,-75 65,-37.5 65,37.5 0,75 -65,37.5 -65,-37.5"
        style={{
          fill: "none",
          stroke: "#c5d558",
          strokeWidth: 3,
        }}
      />
      {/* Center point */}
      <circle r="10" style={{ fill: "#c5d558", stroke: "none" }} />
    </g>
  </svg>
);

// Scale & Proportion - Flower of Life pattern
const ScaleProportion = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(200,200)">
      {/* Center circle */}
      <circle
        r="50"
        style={{ fill: "none", stroke: "#c5d558", strokeWidth: 4 }}
      />
      {/* First ring - 6 circles */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={`ring1-${angle}`}
          cx={Math.cos((angle * Math.PI) / 180) * 50}
          cy={Math.sin((angle * Math.PI) / 180) * 50}
          r="50"
          style={{
            fill: "none",
            stroke: "#c5d558",
            strokeWidth: 3,
          }}
        />
      ))}
      {/* Second ring - 6 circles */}
      {[30, 90, 150, 210, 270, 330].map((angle) => (
        <circle
          key={`ring2-${angle}`}
          cx={Math.cos((angle * Math.PI) / 180) * 86.6}
          cy={Math.sin((angle * Math.PI) / 180) * 86.6}
          r="50"
          style={{
            fill: "none",
            stroke: "#c5d558",
            strokeWidth: 2.5,
          }}
        />
      ))}
      {/* Outer ring - 6 circles */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={`ring3-${angle}`}
          cx={Math.cos((angle * Math.PI) / 180) * 100}
          cy={Math.sin((angle * Math.PI) / 180) * 100}
          r="50"
          style={{
            fill: "none",
            stroke: "#c5d558",
            strokeWidth: 2,
          }}
        />
      ))}
      {/* Outer boundary circle */}
      <circle
        r="160"
        style={{ fill: "none", stroke: "#c5d558", strokeWidth: 5 }}
      />
    </g>
  </svg>
);

const cardBackgrounds: Record<number, React.ComponentType> = {
  0: SierpinskiTriangle,
  1: Phi,
  2: SeedOfLife,
  3: GoldenRatio,
  4: RuleOfThirds,
  5: Symmetry,
  6: GeometricHarmony,
  7: ScaleProportion,
  // Add more mappings as needed
};

export const ProcessSection = ({ process }: ProcessSectionProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl text-black font-sans mb-4 sm:mb-6">
            Notre méthodologie
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
            Une approche structurée, pensée pour créer des espaces justes,
            durables et singuliers
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {process.map((step, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className={`group relative block mx-auto h-64 sm:h-80 lg:h-96 w-full max-w-sm cursor-pointer ${
                activeCard === index ? "z-50" : "z-10"
              }`}
            >
              <span className="absolute inset-0 border-2 border-dashed border-white" />
              <div
                className={`relative flex h-full w-full transform items-end border-2 border-white bg-black transition-transform overflow-hidden md:group-hover:scale-105 ${
                  activeCard === index ? "scale-105" : ""
                }`}
              >
                {/* SVG Background */}
                {cardBackgrounds[index] && (
                  <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                    {React.createElement(cardBackgrounds[index])}
                  </div>
                )}
                <div
                  className={`absolute z-20 p-4 !pt-0 transition-opacity sm:p-6 lg:p-8 bottom-0 left-0 right-0 ${
                    activeCard === index
                      ? "opacity-0"
                      : "opacity-100 md:group-hover:opacity-0"
                  }`}
                >
                  <div className="text-6xl sm:text-7xl font-light text-[#cbea00]">
                    {step.number}
                  </div>
                  <h2 className="mt-4 text-xl font-medium sm:text-xl text-white">
                    {step.title}
                  </h2>
                </div>
                <div
                  className={`absolute z-30 p-4 transition-opacity sm:p-6 lg:p-8 inset-0 flex flex-col justify-center ${
                    activeCard === index
                      ? "opacity-100"
                      : "opacity-0 md:group-hover:opacity-100"
                  }`}
                >
                  <h3 className="text-xl font-medium sm:text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

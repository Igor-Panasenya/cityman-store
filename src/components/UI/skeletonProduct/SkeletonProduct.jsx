import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonProduct = (props) => (
    <ContentLoader
        speed={2}
        width={1140}
        height={700}
        viewBox="0 0 1140 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="19" y="8" rx="33" ry="33" width="300" height="300" />
        <rect x="23" y="325" rx="15" ry="15" width="65" height="65" />
        <rect x="93" y="326" rx="15" ry="15" width="65" height="65" />
        <rect x="164" y="326" rx="15" ry="15" width="65" height="65" />
        <rect x="240" y="325" rx="15" ry="15" width="65" height="65" />
        <rect x="342" y="26" rx="11" ry="11" width="237" height="107" />
        <rect x="348" y="150" rx="0" ry="0" width="84" height="29" />
        <rect x="349" y="193" rx="0" ry="0" width="115" height="26" />
        <rect x="349" y="234" rx="0" ry="0" width="218" height="100" />
        <rect x="35" y="435" rx="0" ry="0" width="250" height="29" />
        <rect x="32" y="494" rx="0" ry="0" width="545" height="20" />
        <rect x="29" y="534" rx="0" ry="0" width="545" height="20" />
        <rect x="34" y="576" rx="0" ry="0" width="545" height="20" />
        <rect x="35" y="618" rx="0" ry="0" width="545" height="20" />
    </ContentLoader>
)

export default SkeletonProduct
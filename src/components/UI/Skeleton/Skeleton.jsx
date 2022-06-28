import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={260}
        height={380}
        viewBox="0 0 260 380"
        backgroundColor="#292929"
        foregroundColor="#525252"
        {...props}
    >
        <rect x="13" y="10" rx="7" ry="7" width="10" height="353" />
        <rect x="246" y="10" rx="7" ry="7" width="10" height="353" />
        <rect x="14" y="9" rx="7" ry="7" width="241" height="10" />
        <rect x="14" y="355" rx="7" ry="7" width="241" height="10" />
        <rect x="53" y="290" rx="10" ry="10" width="160" height="25" />

        <rect x="35" y="325" rx="10" ry="10" width="30" height="25" />
        <rect x="77" y="325" rx="10" ry="10" width="71" height="25" />
        <rect x="164" y="325" rx="10" ry="10" width="71" height="25" />

        <rect x="18" y="18" rx="0" ry="0" width="230" height="260" />
    </ContentLoader>
)

export default Skeleton
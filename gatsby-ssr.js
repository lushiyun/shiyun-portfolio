import wrapMDX from "./root-mdx"

export const wrapRootElement = wrapMDX

export const onServiceWorkerUpdateReady = () =>
  typeof window !== "undefined" && window.location.reload(true)

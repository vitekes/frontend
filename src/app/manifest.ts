import { MetadataRoute } from 'next'
import { SITE_NAME } from 'src/constants/seo.constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: '#FFFFFF',
    background_color: '#FFFFFF',
    scope: '/',
    start_url: '/source=pwa',
    display: 'standalone',
    orientation: 'portrait',
    name: SITE_NAME,
    short_name: SITE_NAME,
    // description: DESCRIPTION,
    // icons: [
    // 	{
    // 		src: "/touch-icons/256x256.png",
    // 		sizes: "256x256",
    // 		type: "image/png",
    // 	},
    // 	{
    // 		src: "/touch-icons/128x128.png",
    // 		sizes: "128x128",
    // 		type: "image/png",
    // 	},
    // ],
  }
}

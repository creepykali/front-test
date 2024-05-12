import Image from 'next/image'
import planes from '../_assets/planes.svg'

export default function BgPlanes() {
    return (
        <Image
            alt=""
            src={planes}
            quality={100}
            className="bg-planes"
        />
    )
}
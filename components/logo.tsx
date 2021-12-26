import Image from 'next/image'

export default function Logo ({size}) {
    return(
        <span>
            <Image src="/images/j.png" height={size} width={size} />
            <Image src="/images/m.png" height={size} width={size} />
            <Image src="/images/m.png" height={size} width={size} />
        </span>
    )
}
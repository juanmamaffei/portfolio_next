import Link from 'next/link'
import Layout from '../../components/layout'

export default function ChamberOfSecrets() {
    return(
        <Layout>
            <h1>
            Chamber Of Secrets
            </h1>
            <Link href='/'>
                <a className="btn-primary">Home</a>
            </Link>
        </Layout>)
}
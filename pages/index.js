import Layout from "../components/layout";
import Link from "next/link";

const A = props => (
    <div onClick = { e => {
        props.onClick(e)
    }}>Click me to display tv show list</div>
)

const SubLink = props => (
    <li>
        <Link as={`p/${props.as}`} href={`/post?title=${props.title}`}>
            {props.title}
        </Link>
    </li>
)

const Index = () => (
    <Layout>
        <h2>Information</h2>
        <SubLink title="First Post" as="first-post" />
        <SubLink title="Second Post" as="second-post" />
        <SubLink title="Third Post" as="third-post" />
        <p>Hello Next.js</p>
        <Link href="/tvshows">
            <A/>
        </Link>

        <style jsx>{`
            h2{
                font-family: "Arial";
            }
        `}</style>
        <style jsx global>{`
            .list{
                list-style: none;
                margin: 5px 0;
            }
        `}</style>
    </Layout>
)
export default Index
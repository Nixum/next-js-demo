import {withRouter} from 'next/router'
import Layout from '../components/layout'
//加载样式
import '../scss/post.scss'

const Page = withRouter((props) => (
    <Layout>
        <h3 className="header">Post Page</h3>
        <p>Info:{props.router.query.title}</p>
    </Layout>
))

export default Page
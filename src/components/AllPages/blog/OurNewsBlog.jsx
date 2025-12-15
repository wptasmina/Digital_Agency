import blogBgImage from '../../../assets/pages/blog/blogBg.jpeg';
import PageHeader from '../../shear/PageHeader/PageHeader';


export default function OurNewsBlog() {
  return (
    <div>
        <PageHeader
            title="Our News & Blog"
            subtitle="We believe great marketing starts with understanding people. Our agency focuses on creating meaningful."
            currentPage={[
                { name: "Pages", path: "/pages" },
                { name: "Blog", path: "/blog" }
            ]}
            image={blogBgImage}
        />
      
      {/* <OurLatestNewsBlog /> */}
    </div>
  )
}
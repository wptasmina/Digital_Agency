import BlogList from "../../../../components/AllPages/blog/BlogList";
import PageHeader from "../../../../components/shear/PageHeader/PageHeader";
import blogBanner from "../../../../assets/pages/blog/blogDetails/blogDetailsBg.jpg"

export default function BlogDetails() {
  return (
    <div>
      <PageHeader
        title="Blog Details"
        subtitle="We believe great marketing starts with understanding people. Our agency focuses on creating meaningful."
        image={blogBanner}
        currentPage={[
          { name: "Pages", path: "/pages" },
          { name: "Blog", path: "/blog" },
          { name: "Blog Details", path: "" } // no navigation
        ]}
      />

      <BlogList />
    </div>
  );
}

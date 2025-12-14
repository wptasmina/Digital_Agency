import PageHeader from '../../../../components/shear/PageHeader/PageHeader'

export default function blogDetails() {
  return (
    <div>
      <PageHeader
  title="Blog Details"
  subtitle="Deep dive into this topic"
  image={blogBanner}
  currentPage={[
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Post Details", path: "" } // no navigation
  ]}
/>

    </div>
  )
}
